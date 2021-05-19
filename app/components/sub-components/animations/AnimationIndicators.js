import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';


//------------------------ screen ---------------------
class AnimationIndicators extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            imageIndex : 0,
            animationImages : [
                require('../../../assets/icons/WelcomeAnimationScreen/indicator-red.png'),
                require('../../../assets/icons/WelcomeAnimationScreen/indicator-gray.png'),
            ],
        }
    }


    componentDidMount = () => {
        setInterval(() => {
            let imageIndex = this.state.imageIndex+1;
              if (imageIndex > 2) {
                  imageIndex = 0;
            }
            this.setState({imageIndex:imageIndex})
        }, 2000);
    }

    render(){
        const {imageIndex, animationImages} = this.state;

        return (
            <View style={styles.container}>
                <Image style={styles.icon} source={imageIndex === 0 ? animationImages[0] : animationImages[1]} key={imageIndex} />
                <Image style={styles.icon} source={imageIndex === 1 ? animationImages[0] : animationImages[1]} key={imageIndex+1} />
                <Image style={styles.icon} source={imageIndex === 2 ? animationImages[0] : animationImages[1]} key={imageIndex+2} />
            </View>
        );
    }
}

//----------------------- screen styling ---------------------
const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon : {
        width : 15,
        height : 15,
        margin : 4
    }
});





export default AnimationIndicators;