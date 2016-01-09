'use strict';

var React = require('react-native');
var {
    AppRegistry,
    NavigatorIOS,
    StyleSheet,
    } = React;

var MainScreen = require('./src/components/video/videoList');
var TopicsView = require('./src/components/topics/Topics');
var Menu = require('./src/components/menu/menu');
var SideMenu = require('react-native-side-menu');
var Cities = require('./src/components/cities/cities');

var ROUTES = {
  homepage: tedxV1,
  cities: Cities
};

var tedxV1 = React.createClass({
    getInitialState: function() {
      return {
        isOpen: false,
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
            menu={<Menu navigator={this.refs.nav} toggle={this.toggle} setYear={this.setYear} isOpen={this.state.isOpen}/>}
            isOpen={this.state.isOpen}
            ref="sidemenu"
            onChange={(isOpen) => this.updateMenuState(isOpen)}>
              <NavigatorIOS
                  ref="nav"
                  style={styles.container}
                  initialRoute={{
                      component: Cities,
                      title: '',
                      leftButtonTitle: 'Ročníky',
                      onLeftButtonPress: () => {
                          this.toggle();
                          }
                  }}
              />
          </SideMenu>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

AppRegistry.registerComponent('tedxV1', () => tedxV1);
