import i18next from 'i18next';
import { I18nManager as RNI18nManager, NativeModules} from 'react-native';
import {RNRestart} from 'react-native-restart';
import * as config from '../config/i18n';
import languageDetector from './language-detector';
import translationLoader from './translation-loader';

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
                console.log("%%%%%%%%%%%%% " + i18next.language)
                if(languageKey === 'ar' && !RNI18nManager.isRTL){
                   // RNI18nManager.forceRTL(true);
                    //NativeModules.DevSettings.reload();
                }else if(RNI18nManager.isRTL){
                    //RNI18nManager.forceRTL(false);
                    //NativeModules.DevSettings.reload();
                }

            });
           
       //NativeModules.DevSettings.reload();
       //RNRestart.Restart();
    }
};
export const t = i18n.t;
export default i18n;