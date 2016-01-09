var React = require('react-native');
var {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  Component,
  TouchableHighlight,
  Navigator
} = React;

var Cities = require('../cities/cities');
var TopicsView = require('../topics/Topics');
var styles = require('./style');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      year: '',
    };
  },
  setYear: function(selectedYear) {
    this.setState({
      year: selectedYear
    });
  },
  handleClick(year) {
    this.props.toggle();
    this.setYear(year);
    this.props.navigator.push({
        title: 'Ročník ' + this.state.year,
        component: Cities,
        passProps: {
          year: year,
        },
        leftButtonTitle: 'Ročníky',
        onLeftButtonPress: () => {
          this.props.toggle();
        }
    });

  },
  render() {
    return (
      <ScrollView style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={require('../../images/ted.png') }/>
        </View>
        <Text style={styles.item}></Text>
        <TouchableHighlight underlayColor={'#fbd0d0'} onPress={() => this.handleClick('2015')}>
          <Text style={styles.item}>Ročník 2015</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={'#fbd0d0'} onPress={() => this.handleClick('2014')}>
          <Text style={styles.item}>Ročník 2014</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={'#fbd0d0'} onPress={() => this.handleClick('2013')}>
          <Text style={styles.item}>Ročník 2013</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={'#fbd0d0'} onPress={() => this.handleClick('2012')}>
          <Text style={styles.item}>Ročník 2012</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={'#fbd0d0'} onPress={() => this.handleClick('2011')}>
          <Text style={styles.item}>Ročník 2011</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={'#fbd0d0'} onPress={() => this.handleClick('2010')}>
          <Text style={styles.item}>Ročník 2010</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
});
