'use strict';

var React = require('react-native');
var {
    StyleSheet,
    Text,
    ListView,
    TouchableHighlight,
    View
    } = React;

var videoList = require('../video/videoList');
var TopicsView = require('./Topics');
var styles = require('./style');

var TOPICS = [
    {name:'Sports'},{name:'Entertainment'}, {name:'Music'},{name:'Science'},
    {name:'Technology'}, {name:'Business'},{name:'World'},{name:'Politics'}];

var TopicsListView = React.createClass({

    getInitialState: function() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(TOPICS),
        };
    },

    render: function () {
      return (
          <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow}
          />
      );
    },

    renderRow: function(topic: Object)  {
        return (
            <NavButton
                onPress={() => this.selectTopic(topic)}
                text={topic.name}
                />
        );
    },

    selectTopic: function(topic: Object) {
        this.setState({filter:topic.name.toLowerCase()});

        this.props.navigator.push({
            title: topic.name + ' | ' +this.props.city + (this.props.year ? ' \'' + this.props.year.substr(2,2): ''),
            component: videoList,
            passProps: {
                filter: topic.name.toLowerCase(),
            },
            leftButtonTitle: '< Mestá',
            onLeftButtonPress: () => {
                this.props.navigator.popN(3);
            },
            rightButtonTitle: 'Témy',
            onRightButtonPress: () => {
                this.props.navigator.push({
                    title: "Témy",
                    component: TopicsView,
                    passProps: {
                      navigator: this.props.navigator,
                      city: this.props.city,
                      year: this.props.year,
                    },
                });},
        });
    },

});

var NavButton = React.createClass({

    render: function() {
        return (
            <TouchableHighlight
                style={styles.button}
                activeOpacity={1}
                animationVelocity={0}
                underlayColor="rgb(210, 230, 255)"
                onPress={this.props.onPress}>
                <Text style={styles.buttonText}>
                    {this.props.text}
                </Text>
            </TouchableHighlight>
        )
    }
});



module.exports = TopicsListView;
