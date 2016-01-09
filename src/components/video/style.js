var React = require('react-native');
var { StyleSheet } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        padding: 20
    },
    videoListContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    centerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 100,
        color: 'white',
    },
    noResultsText: {
        marginBottom:0,
        color: '#000000',
    },
    frame: {
        marginTop:20,
        height:450,
        flex: 1,
        width: window.width,
    },
    scrollContainer: {
      flex: 1,
      width: window.width,
      height:700,
      backgroundColor: 'white',
    },
    image: {
      width: 320,
      height: 180,
      marginBottom: 20,
    },
    showMore: {
      fontWeight: 'bold',
      marginTop:10
    },
    parallax: {
      marginTop:50,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        flex: 1,
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 2,
    },
    channel: {
        color: '#999999',
        fontSize: 12,
    },
    row: {
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 5,
    },
    cellImage: {
        backgroundColor: '#dddddd',
        height: 65,
        marginRight: 10,
        width: 60,
    },
    cellBorder: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 1,
        marginLeft: 4,
    },
    separator: {
        height: 1,
        backgroundColor: '#eeeeee',
    },
    spinner: {
        width: 30,
    },
    scrollSpinner: {
        marginVertical: 20,
    },
    wrapper: {
        height: 60,
        marginTop: 10,
    },
    loading: {
        height: 20,
    },
});

module.exports = styles;
