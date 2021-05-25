import i18next from 'i18next';
import { I18nManager as RNI18nManager, NativeModules} from 'react-native';
import {RNRestart} from 'react-native-restart';
import * as config from '../config/i18n';
import languageDetector from './language-detector';
import translationLoader from './translation-loader';
import { Updates } from 'expo';

const i18n = {

    init: () => {
        return new Promise((resolve, reject) => {
            i18next
                .use(languageDetector)
                .use(translationLoader)
                .init({
                    fallbackLng: config.fallback,
                    ns: config.namespaces,
                    defaultNS: config.defaultNamespace,
                    interpolation: {
                        escapeValue: false,
                    },
                }, (error) => {
                    if (error) { return reject(error)}
                })
        })
    },

  
    t: (key, options) => i18next.t(key, options),

    get locale() { return i18next.language; },

    get dir() {
        return i18next.dir().toUpperCase();
    },

    get isRTL() {
        return RNI18nManager.isRTL;
    },

    select(map) {
        const key = this.isRTL ? 'rtl' : 'ltr';
        return map[key];
    },

    changeLanguage : (languageKey)=>{
        console.log(languageKey)
        i18next
            .changeLanguage(languageKey)
            .then(() => {
                if(languageKey === 'ar'){
                    console.log("i'm in arabic")
                    console.log("i18n dir " + i18n.dir)
                    console.log("is rtl ? " + RNI18nManager.isRTL)
                    if (i18n.dir !== 'RTL') {
                        i18n.dir === 'RTL';
                    }else if(RNI18nManager.isRTL === false){
                        RNI18nManager.forceRTL(true);
                        Updates.reloadFromCache();
                    }
                }else if(languageKey === 'en' && RNI18nManager.isRTL){
                    console.log("i'm in english")
                    console.log("i'm in arabic")
                    console.log("i18n dir " + i18n.dir)
                    console.log("is rtl ? " + RNI18nManager.isRTL)
                    if (i18n.dir !== 'LTR') {
                        i18n.dir === 'LTR';
                    }else if(RNI18nManager.isRTL === true){
                        RNI18nManager.forceRTL(false);
                        Updates.reloadFromCache();
                    }
                }
                return true;
            });
       //NativeModules.DevSettings.reload();
       //RNRestart.Restart();
       return true;
    }
};
export const t = i18n.t;
export default i18n;