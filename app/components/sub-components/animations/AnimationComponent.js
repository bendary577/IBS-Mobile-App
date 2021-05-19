import React, { Component } from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import TitleText from '../../primitive-components/TitleText';



//------------------------ screen ---------------------
class AnimationComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            imageIndex : 0,
            animationImages : [
                require('../../../assets/icons/WelcomeAnimationScreen/finance2.png'),
                require('../../../assets/icons/WelcomeAnimationScreen/newspaper.png'),
                require('../../../assets/icons/WelcomeAnimationScreen/tech-support.png'),
            ],
            animationTitles : [
                "Get In Touch",
                "Get The Latest News",
                "Check Monthly Transfers"
            ],
            animationTexts : [
                "No need to get in touch in person, ask all your inquiries through the in-app chat",
                "Get the latest news on your account dashboard, transfer notifications & much more!",
                "Keep an eye on your salary transfers through an easy transfers manager"
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


export default AnimationComponent;