var React = require('react-native');
var {
  StyleSheet,
  PixelRatio, } = React;

var styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    button: {
        backgroundColor: 'white',
        padding: 9,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#CDCDCD',
    },
    buttonText: {
        fontSize: 17,
        fontWeight: '500',
        marginTop: 5,
        padding: 7,
        marginLeft: 55,
    },
});

module.exports = styles;
