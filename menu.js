var React = require('react-native');
var Dimensions = require('Dimensions');
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

var window = Dimensions.get('window');

module.exports = React.createClass({

  handleClick() {
    //this.context.menuActions.close();
    this.props.navigator.push({name: 'years'});
  },
  render() {
    return (
      <ScrollView style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={require('./images/ted.png') }/>
        </View>
        <Text style={styles.item}></Text>
        <TouchableHighlight onPress={this.handleClick}>
          <Text style={styles.item}>Ročník 2015</Text>
        </TouchableHighlight>

        <Text style={styles.item}>Ročník 2014</Text>
        <Text style={styles.item}>Ročník 2013</Text>
        <Text style={styles.item}>Ročník 2012</Text>
        <Text style={styles.item}>Ročník 2011</Text>
        <Text style={styles.item}>Ročník 2010</Text>
      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#d1d1d1',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 200,
    flex: 1,
    marginTop: -10
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 24,
    fontWeight: '300',
    paddingTop: 5,
    borderBottomWidth: 10,
    borderBottomColor: 'black'
  },
});
