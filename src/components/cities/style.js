var React = require('react-native');
var { StyleSheet } = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop:65,
  },
  cityContainer: {
    flex:1,
    alignSelf: "stretch",
  },
  cityImage: {
    alignSelf: "stretch",
    flex:1,
    opacity:0.4
  },
  cityName: {
    fontSize:60,
    //fontWeight: 'bold',
    color:'#ff656e',
    backgroundColor:'none',
    position:'absolute',
    top: 40,
    left:0,
    right:0,
    textAlign: 'center',

  },
  black: {
    color: '#242424',
  }
});

module.exports = styles;
