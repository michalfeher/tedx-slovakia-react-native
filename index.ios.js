'use strict';

var React = require('react-native');
var {
    AppRegistry,
    NavigatorIOS,
    StyleSheet,
    } = React;

var MainScreen = require('./MainScreen');
var TopicsView = require('./Topics');
var Menu = require('./menu');
var SideMenu = require('react-native-side-menu');
var Cities = require('./cities');
var Years = require('./years');

var ROUTES = {
  homepage: tedxV1,
  years: Years,
  cities: Cities
};

var tedxV1 = React.createClass({
    getInitialState: function() {
      return {
        isOpen: false
      };
    },
    toggle: function() {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    },
    updateMenuState: function(isOpen) {
      this.setState({ isOpen, });
    },
    renderScene: function(route, navigator) {
      var Component = ROUTES[route.name]; // ROUTES['signin'] => Signin
      var backIcon = false;
      if(route.name == 'invoices')
        backIcon=true

      return (
        <SideMenu
          menu={<Menu navigator={navigator}/>}
          isOpen={this.state.isOpen}
          onChange={(isOpen) => this.updateMenuState(isOpen)}>
            <Component route={route} navigator={navigator} />

        </SideMenu>
      );
    },
    render: function() {
        return (
          <SideMenu
            menu={<Menu navigator={this.refs.nav}/>}
            isOpen={this.state.isOpen}
            onChange={(isOpen) => this.updateMenuState(isOpen)}>
              <NavigatorIOS
                  ref="nav"
                  style={styles.container}
                  initialRoute={{
                      title: 'Top videá',
                      component: Cities,
                      // rightButtonTitle: 'Témy',
                      // onRightButtonPress: () => {
                      //     this.refs.nav.navigator.push({
                      //         title: "Topics",
                      //         component: TopicsView,
                      //         rightButtonTitle: 'Cancel',
                      //         onRightButtonPress: () => {this.refs.nav.navigator.pop();},
                      //         passProps: {navigator: this.refs.nav.navigator},
                      //     });},
                      leftButtonTitle: 'Ročníky',
                      onLeftButtonPress: () => {
                          this.toggle();
                          }
                  }}
              />
          </SideMenu>
        );
        // return (
        //   <SideMenu
        //     menu={<Menu navigator={this.refs.nav}/>}
        //     isOpen={this.state.isOpen}
        //     onChange={(isOpen) => this.updateMenuState(isOpen)}>
        //       <NavigatorIOS
        //           ref="nav"
        //           style={styles.container}
        //           initialRoute={{name: 'cities'}}
        //       />
        //   </SideMenu>
        // );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

AppRegistry.registerComponent('tedxV1', () => tedxV1);
