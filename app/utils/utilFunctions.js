import i18n from '../languages/i18Manager';
import {I18nManager} from 'react-native'

//helper function to flip images when direction is RTL
const getFlipForRTLStyle = () => {
        console.log("$$$$$$$$$$$$$$$$$" + i18n.isRTL)
        if (!I18nManager.isRTL) { return {}; };
        return {
            transform: [{
                scaleX: -1,
            }],
        };
}

export default getFlipForRTLStyle;