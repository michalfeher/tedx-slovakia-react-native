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

var MainScreen = require('./MainScreen');
var TopicsView = require('./Topics');

module.exports = React.createClass({
  handlePress: function() {
    this.props.navigator.push({
        title: "Topics",
        component: MainScreen,
        rightButtonTitle: 'Témy',
        onRightButtonPress: () => {
            this.props.navigator.push({
                title: "Témy",
                component: TopicsView,
                rightButtonTitle: 'Späť',
                onRightButtonPress: () => {this.props.navigator.pop();},
                passProps: {navigator: this.props.navigator},
            });},
        leftButtonTitle: 'Späť',
        onLeftButtonPress: () => {
            this.props.navigator.pop();
        }
    });
  },
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.cityContainer}>
          <TouchableHighlight
            onPress={this.handlePress}>
            <View>
            <Image
              source={require('./bratislava.png')}
              style={styles.cityImage} />
            <Text style={styles.cityName}>Bratislava</Text>
            </View>

          </TouchableHighlight>

        </View>

        <View style={styles.cityContainer}>
          <Image
            source={require('./kosice.png')}
            style={styles.cityImage} />
          <Text style={[styles.cityName, styles.black]}>Košice</Text>
        </View>

        <View style={styles.cityContainer}>
          <Image
            source={require('./zilina.png')}
            style={styles.cityImage} />
          <Text style={styles.cityName}>Žilina</Text>
        </View>

        <View style={styles.cityContainer}>
          <Image
            source={require('./trnava.png')}
            style={styles.cityImage} />
          <Text style={[styles.cityName, styles.black]}>Trnava</Text>
        </View>
      </View>
    );
  },
});

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
    color: 'black',
  }
});
