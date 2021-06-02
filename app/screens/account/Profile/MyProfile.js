import React, {Component} from 'react'
import {SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native'
import ProfileInfoSection from '../../../components/sub-components/Profile/ProfileInfoSection';
import ProfileSettingsSection from '../../../components/sub-components/Profile/ProfileSettingsSection';
import AccountTabButtonLong from '../../../components/sub-components/navigationTabs/AccountTabButtonLong';
import {t} from '../../../languages/i18Manager';
import { ImageBackground } from 'react-native';
import UploadImageButton from '../../../components/sub-components/buttons/UploadImageButton';

let avatarImage = '../../../assets/icons/Profile/avatar.png';

class MyProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {  
            tab : t(`profile:myInformations`)
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
                    <View>
                        <ImageBackground style={styles.avatarView} source={require(avatarImage)} >
                            <UploadImageButton />
                        </ImageBackground>
                    </View>
                    <View style={styles.tabs}>
                        <AccountTabButtonLong active={tab === t(`profile:myInformations`) ? true : false} title={t(`profile:myInformations`)} hasIcon={false} onChangeTab={this.changeTab}/>
                        <AccountTabButtonLong active={tab === t(`profile:settings`) ? true : false} title={t(`profile:settings`)} hasIcon={true} onChangeTab={this.changeTab}/>
                    </View>
                </View>
                <View style={styles.changingView}>
                    {
                        tab === t(`profile:myInformations`) ? 
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
       marginTop : 15,
       alignItems : 'flex-end',
       padding : 8
    },
    uploadIcon : {
        width : 20,
        height : 20
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
