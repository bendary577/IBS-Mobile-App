import i18n from '../languages/i18Manager';


//helper function to flip images when direction is RTL
const getFlipForRTLStyle = () => {
        console.log("$$$$$$$$$$$$$$$$$" + i18n.isRTL)
        if (!i18n.isRTL) { return {}; };
        return {
            transform: [{
                scaleX: -1,
            }],
        };
}

export default getFlipForRTLStyle;