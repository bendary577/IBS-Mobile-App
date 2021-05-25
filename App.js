import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {StatusBar, I18nManager as RNI18nManager} from 'react-native';
import Router from './app/config/router';
import i18n from './app/languages/i18Manager';
import {AuthProvider} from './app/contexts/authContext';
import { Updates } from 'expo';
import {useAuth} from './app/contexts/authContext';
import {getToken} from './app/services/authentication';

const App = () => {

  const [isI18nInitialized, setI18nInitialized] = useState(false);
  const {setAuthenticated} = useAuth();

  useEffect (() => {
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
            setI18nInitialized(true);
        })
        .catch((error) => console.warn(error));

        //check if there is a token registered
        let token = getToken();
        console.log("what is the token ? " + token)
        if(token){
          setAuthenticated(true);
        }
  }, [])

    return (
        <AuthProvider>
          <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#EC253C" translucent = {true}/>
          <Router />
        </AuthProvider>
    );    
}


export default App;