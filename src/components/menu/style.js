var React = require('react-native');
var Dimensions = require('Dimensions');
var { StyleSheet } = React;

var window = Dimensions.get('window');

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
  button: {
  }
});

module.exports = styles;
