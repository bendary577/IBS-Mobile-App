import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StatusBar, I18nManager as RNI18nManager} from 'react-native';
import Router from './app/config/router';
import i18n from './app/languages/i18Manager';
import {AuthProvider} from './app/contexts/authContext';

export default class App extends Component {

  state = { isI18nInitialized: false }

  componentDidMount() {
    i18n.init()
        .then(() => {
            const RNDir = RNI18nManager.isRTL ? 'RTL' : 'LTR';
            // RN doesn't always correctly identify native locale direction, so we force it here.
            if (i18n.dir !== RNDir) {
                const isLocaleRTL = i18n.dir === 'RTL';
                RNI18nManager.forceRTL(isLocaleRTL);
                // RN won't set the layout direction if we don't restart the app's JavaScript.
                Updates.reloadFromCache();
            }
            this.setState({ isI18nInitialized: true });
        })
        .catch((error) => console.warn(error));
  }

  render(){
      return (
            <AuthProvider>
              <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#EC253C" translucent = {true}/>
              <Router />
            </AuthProvider>
      );    
  }
}

