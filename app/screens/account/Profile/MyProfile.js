import React, {Component} from 'react'
import {Image, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native'
import ProfileInfoSection from '../../../components/sub-components/Profile/ProfileInfoSection';
import ProfileSettingsSection from '../../../components/sub-components/Profile/ProfileSettingsSection';
import AccountTabButtonLong from '../../../components/sub-components/navigationTabs/AccountTabButtonLong';

let avatarImage = '../../../assets/icons/Profile/avatar.png';
let cameraIcon = '../../../assets/icons/Profile/camera.png';

class MyProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {  
            tab : "My Information"
        }
    }


    changeTab = (newTab) => {
        this.setState({
            tab : newTab
        })
    }


    render(){
        const {tab} = this.state;

        return (
            <SafeAreaView style={styles.conatiner}>
                <View style={styles.fixedView}>
                    <View >
                        <Image style={styles.avatarView} source={require(avatarImage)} />
                    </View>
                    <View style={styles.tabs}>
                        <AccountTabButtonLong active={tab === "My Information" ? true : false} title="My Information" hasIcon={false} onChangeTab={this.changeTab}/>
                        <AccountTabButtonLong active={tab === "Settings" ? true : false} title="Settings" hasIcon={true} onChangeTab={this.changeTab}/>
                    </View>
                </View>
                <View style={styles.changingView}>
                    {
                        tab === "My Information" ? 
                            <ProfileInfoSection />
                        : 
                            <ProfileSettingsSection />
                    }

                </View>
            </SafeAreaView>
        )
    }    
}

const styles = StyleSheet.create({
    conatiner: {
        flex : 1,
        flexDirection : 'column',
    },
    fixedView : {
        flex : 3,
        justifyContent : 'center',
        alignItems : 'center',
    },
    avatarView : {
       width : 120,
       height : 120, 
       borderRadius : 15,
       marginTop : 15
    },
    tabs : {
        flexDirection : 'row',
        width : "100%",
        justifyContent  : 'space-evenly',
        marginTop : 20,
    },
    changingView : {
        flex : 3,
        padding : 20,
    }
})

export default MyProfile;
