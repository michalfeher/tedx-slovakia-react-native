var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
} = React;

var videoList = require('../video/videoList');
var TopicsView = require('../topics/Topics');
var styles = require('./style.js');

module.exports = React.createClass({
  handlePress: function(city, year) {
    // this.context.menuActions.close();
    // console.log(this.context.menuActions);
    this.props.navigator.push({
        title: city + ' ' + (year ? year : ''),
        component: videoList,
        passProps:{
          // year: year,
          // city: city
        },
        rightButtonTitle: 'Témy',
        onRightButtonPress: () => {
            this.props.navigator.push({
                title: "Témy",
                component: TopicsView,
                passProps: {
                  navigator: this.props.navigator,
                  city: city,
                  year: year,
                },
            });},
    });
  },
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.cityContainer}>
          <TouchableHighlight
            onPress={() => this.handlePress('Bratislava', this.props.year)}>
            <View>
            <Image
              source={require('../../images/bratislava.png')}
              style={styles.cityImage} />
            <Text style={styles.cityName}>Bratislava {(this.props.year ? '\'' + this.props.year.substr(2,2) : '')}</Text>
            </View>

          </TouchableHighlight>

        </View>

        <View style={styles.cityContainer}>
          <Image
            source={require('../../images/kosice.png')}
            style={styles.cityImage} />
          <Text style={[styles.cityName, styles.black]}>Košice {(this.props.year ? '\'' + this.props.year.substr(2,2) : '')}</Text>
        </View>

        <View style={styles.cityContainer}>
          <Image
            source={require('../../images/zilina.png')}
            style={styles.cityImage} />
          <Text style={styles.cityName}>Žilina {(this.props.year ? '\'' + this.props.year.substr(2,2) : '')}</Text>
        </View>

        <View style={styles.cityContainer}>
          <Image
            source={require('../../images/trnava.png')}
            style={styles.cityImage} />
          <Text style={[styles.cityName, styles.black]}>Trnava {(this.props.year ? '\'' + this.props.year.substr(2,2) : '')}</Text>
        </View>
      </View>
    );
  },
});
