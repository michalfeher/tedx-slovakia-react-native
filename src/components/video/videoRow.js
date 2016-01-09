'use strict';

var moment = require('moment');

var React = require('react-native');
var {
    Image,
    PixelRatio,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
    } = React;

var styles = require('./style.js');

var VideoRow = React.createClass({

    render: function() {
        // var viewCount = this.props.video.stats.viewCount;
        // var pubDate = moment(this.props.video.publishedAt).fromNow(true);
        // var channelTitle = this.props.video.channelTitle;
        // var title = this.props.video.title;
        // var thumbnail = {uri:this.props.video.thumbnails.default.url};
        var viewCount = 0;
        var pubDate = 0;
        var channelTitle = this.props.video.snippet.channelTitle;
        var title = this.props.video.snippet.title;
        var thumbnail = {uri:this.props.video.snippet.thumbnails.medium.url};

        return (
            <View>
                <TouchableHighlight onPress={this.props.onSelect}>
                    <View style={styles.row}>
                        <DelayedImage
                            source={thumbnail}
                            style={styles.cellImage}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.title} numberOfLines={2}>{title}</Text>
                            <Text style={styles.channel} numberOfLines={1}>
                                {channelTitle} {' '} &bull;{' '} {pubDate} &bull;{' '} {viewCount} views
                            </Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <View style={styles.cellBorder} />
            </View>
        );
    }
});

var DelayedImage = React.createClass({
    propTypes: Image.propTypes,
    getInitialState(): { showImage: boolean } {
    return { showImage: true };
},
componentWillReceiveProps: function(nextProps: any) {
    if(this.props.source.uri != nextProps.source.uri) {
        this.setState({ showImage: false });
        setTimeout(() => this.setState({ showImage: true }), 0);
    }
},
render: function(): React.Component {
    return <Image {...this.props} source={{uri: this.state.showImage ? this.props.source.uri : null}} />
},
});


module.exports = VideoRow;
