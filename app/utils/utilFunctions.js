import i18n from '../languages/i18Manager';
import {I18nManager} from 'react-native'

//helper function to flip images when direction is RTL
const getFlipForRTLStyle = () => {
        if (!I18nManager.isRTL) { return {}; };
        return {
            transform: [{
                scaleX: -1,
            }],
        };
}

export const refresh = () => {
    return new Promise((resolve) => {
      setTimeout(()=>{resolve()}, 2000)
    });
  }

export default getFlipForRTLStyle;