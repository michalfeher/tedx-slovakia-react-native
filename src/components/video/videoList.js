'use strict';

var React = require('react-native');
var {
    ActivityIndicatorIOS,
    ListView,
    StyleSheet,
    Text,
    TextInput,
    View,
    } = React;
var TimerMixin = require('react-timer-mixin');

var VideoRow = require('./videoRow');
var videoDetail = require('./videoDetail');
var styles = require('./style');

var BASE_URL = 'http://newsblock.io/api/';

var resultsCache = {
    dataForQuery: {},
    totalForQuery: {},
    timeForQuery:{}
};

var baseDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

var MainScreen = React.createClass({
    mixins: [TimerMixin],
    timeoutID: (null: any),

getInitialState: function() {
    return {
        isLoading: true,
        dataSource: baseDataSource,
        filter: 'world',
    };
},

componentDidMount: function() {
    var _filter = this.props.filter || this.state.filter;
    this.fetchVideos(_filter);
},

fetchVideos: function(query: string) {

    this.timeoutID = null;
    this.setState({
                isLoading: true,
                filter:query
            });

    var expiry = 1 * 60 * 1000; // cache expiration
    if(resultsCache.timeForQuery[query] + expiry > new Date().getTime()) {
        this.setState({
            isLoading: false,
            dataSource: baseDataSource.cloneWithRows(resultsCache.dataForQuery[query])
        });
        return;
    }

    //fetch(BASE_URL+query)
    fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=50&playlistId=PLKK__96A2wlKP2rvwilmuZcLHK9HJQC_o&key=AIzaSyA3s5FUAn-MKP8NtS3gnFldFh9riVW_iCY')
        .then((response) => response.json())
        .catch((error) => {
            console.log('## error for: '+ query);
            var availableData =  resultsCache.dataForQuery[query] || [];

            this.setState({
                dataSource: baseDataSource.cloneWithRows(availableData),
                isLoading: false,
            });
        })
        .then((responseData) => {
            // if(!responseData || !responseData.videos){ // abort when no videos
            //     console.log('### no responseData');
            //     return;
            // }
            //console.log('## fetched', responseData.videos.length, query);
            console.log(responseData);
            //resultsCache.totalForQuery[query] = responseData.videos.length;
            resultsCache.dataForQuery[query] = responseData.items;
            resultsCache.timeForQuery[query] = new Date().getTime();

            this.setState({
                isLoading: false,
                dataSource: baseDataSource.cloneWithRows(resultsCache.dataForQuery[query]),
            });
        })
        .done();
},

selectVideo: function(video: Object) {
console.log(video);
    var domain = 'https://www.youtube.com';
    this.props.navigator.push({
        title: video.title,
        component: videoDetail,
        passProps: {
            video: video,
            url: domain +'/embed/'+ video.snippet.resourceId.videoId +'?autoplay=1' // domain+'/watch?v='+video.videoId
        }
    });
},

handleScroll: function(event: Object) {

    if (event.nativeEvent.contentOffset.y < -110) { // pull-down
        this.setState({isLoading: true});
        var filter = this.props.filter || this.state.filter;
        // reduce dup fetches
        this.clearTimeout(this.timeoutID);
        this.timeoutID = this.setTimeout(() => this.fetchVideos(filter), 250);
    }
},

render: function() {

    var results = this.state.dataSource.getRowCount() === 0 ?
        <NoVideos
            filter={this.state.filter}
            isLoading={this.state.isLoading}
        /> :
        <ListView
            ref="listview"
            dataSource={this.state.dataSource}
            renderHeader={this.renderHeader}
            renderRow={this.renderRow}
            initialListSize={8}
            pageSize={8}
            automaticallyAdjustContentInsets={false}
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps={true}
            showsVerticalScrollIndicator={false}
            onScroll={this.handleScroll}
        />;

        return (
            <View style={styles.videoListContainer}>
                <View style={[styles.separator, {marginTop: 64}]} />
                {results}
            </View>
        );
},

renderRow: function(video: Object)  {
    return (
        <VideoRow
            onSelect={() => this.selectVideo(video)}
            video={video}
        />
    );
},

renderHeader: function () {
    if (this.state.isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicatorIOS
                    animating={this.state.isLoading}
                    style={[{marginTop: 10}]}
                />
            </View>
        );
    }
},

});

var NoVideos = React.createClass({
    render: function() {
        var text = 'no results found';
        if (this.props.filter) {
            if(this.props.isLoading){
                text = `Loading results for “${this.props.filter}”`;
            }
            else {
                text = `No results for “${this.props.filter}”`;
            }
        }

        return (
            <View style={[styles.container]}>
                <Text style={styles.noResultsText}>{text}</Text>
            </View>
        );
    }
});



module.exports = MainScreen;
