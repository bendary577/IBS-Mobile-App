import i18n from '../languages/i18Manager';
import {I18nManager, Platform} from 'react-native'
import i18next from 'i18next';


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

export const textAlign = () =>{
    if(I18nManager.isRTL){
      if(Platform.OS === 'ios'){
        return {
          textAlign : 'left'
        };
      }
    }
}

export const filterIosStyle = () => {
    if(Platform.OS === 'ios'){
      return {
        
      };
    }
}

export default getFlipForRTLStyle;