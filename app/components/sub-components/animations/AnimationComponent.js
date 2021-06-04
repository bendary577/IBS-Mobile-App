import React, { Component } from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import TitleText from '../../primitive-components/TitleText';
import { withTranslation } from 'react-i18next';

//import {t} from '../../../languages/i18Manager';
//import {useTranslation} from 'react-i18next';

//const {t} = useTranslation();

//------------------------ screen ---------------------
class AnimationComponent extends Component {

    constructor(props) {
        super(props);
        const { t } = this.props
        this.state = { 
            imageIndex : 0,
            animationImages : [
                require('../../../assets/icons/WelcomeAnimationScreen/finance2.png'),
                require('../../../assets/icons/WelcomeAnimationScreen/newspaper.png'),
                require('../../../assets/icons/WelcomeAnimationScreen/tech-support.png'),
            ],
            animationTitles : [
                t(`getInTouch`),
                t(`getNews`),
                t(`monthlyTransfers`)
            ],
            animationTexts : [
                t(`getInTouchText`),
                t(`getNewsText`),
                t(`monthlyTransfersText`)
            ],
        };
    }


    componentDidMount = () => {
        setInterval(() => {
            let imageIndex = this.state.imageIndex+1;
              if (imageIndex >= this.state.animationImages.length) {
                  imageIndex = 0;
            }
            this.setState({imageIndex:imageIndex})
        }, 2000);
    }

    render() {
        const {imageIndex, animationImages, animationTitles, animationTexts} = this.state;
        return (
            <View style={styles.container}>
                <Image style={styles.icon} source={animationImages[imageIndex]} key={imageIndex}/>  
                <TitleText value={animationTitles[imageIndex]}/>
                <Text style={styles.text}>
                    {animationTexts[imageIndex]}
                </Text>
            </View>
        );
    }    
}

//----------------------- screen styling ---------------------
const styles = StyleSheet.create({
    container : {
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon : {
        width : 220,
        height : 220,
        marginBottom : 15
    },
    text : {
        fontSize: 18,
        textAlign : 'center',
        color : "#6F6F6F",
        marginTop : 15,
        padding : 4
    },
});


export default withTranslation()(AnimationComponent);