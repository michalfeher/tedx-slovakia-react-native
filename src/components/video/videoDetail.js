'use strict';

var moment = require('moment');

var React = require('react-native');
var Accordion = require('react-native-accordion');
var ParallaxView = require('react-native-parallax-view');
var styles = require('./style.js');

var {
    Text,
    StyleSheet,
    View,
    WebView,
    ScrollView,
    Image
    } = React;

var ViewVideo = React.createClass({

    getInitialState: function() {
        return {
            status: 'No Page Loaded',
            backButtonEnabled: false,
            forwardButtonEnabled: false,
            loading: true,
            showMore: true,
        };
    },

    handleAccordionPress: function() {
      this.setState({
        showMore: !this.state.showMore
      });
    },

    showMoreText: function() {
      return (
        <Text style={styles.showMore}>Zobraziť viac...</Text>
      )
    },

    render: function() {
        var pubDate = moment(this.props.video.publishedAt).fromNow(false);

          var previewText = (
            <View>
              <Text>{this.props.video.snippet.description.substring(0,300)}</Text>
              {this.state.showMore ? this.showMoreText() : null}
            </View>
          );


        var content = (
          <View>
            <Text>{this.props.video.snippet.description.substring(300,this.props.video.snippet.description.length)}</Text>
          </View>
        );

        return (
          <ParallaxView
              backgroundSource={{uri:this.props.video.snippet.thumbnails.maxres.url}}
              windowHeight={400}
              header={(
                <Text style={[styles.noResultsText, styles.centerText]}>
                {this.props.video.snippet.title}
                </Text>
              )}
              style={styles.parallax}

          >
          <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <Accordion
                  header={previewText}
                  content={content}
                  easing="linear"
                  underlayColor="#f2f2f2"
                  onPress={this.handleAccordionPress}
                />
            </View>
                <WebView
                    style={styles.frame}
                    url={this.props.url}
                    renderLoading={this.renderLoading}
                    renderError={this.renderError}
                    automaticallyAdjustContentInsets={false}
                />

          </ScrollView>
          </ParallaxView>
        );
    },
    renderLoading: function () {
        console.log('## webView: loading()');
        return (
            <View style={[styles.container, styles.centerText]}>
                <Text style={styles.noResultsText}>Loading video...</Text>
            </View>
        );
    },
    renderError: function () {
        return (
            <View style={[styles.container, styles.centerText]}>
                <Text style={styles.noResultsText}>Video not found - 404, {this.props.url}</Text>
            </View>
        );
    }
});



module.exports = ViewVideo;
