import React, {Component} from 'react'
import {SafeAreaView, StyleSheet, View } from 'react-native'
import ProfileInfoSection from '../../../components/sub-components/Profile/ProfileInfoSection';
import ProfileSettingsSection from '../../../components/sub-components/Profile/ProfileSettingsSection';
import AccountTabButtonLong from '../../../components/sub-components/navigationTabs/AccountTabButtonLong';
import { ImageBackground } from 'react-native';
import UploadImageButton from '../../../components/sub-components/buttons/UploadImageButton';
import { withTranslation } from 'react-i18next';

let avatarImage = '../../../assets/icons/Profile/avatar.png';

class MyProfile extends Component {

    constructor(props) {
        super(props);
        const { t } = this.props;
        this.state = {  
            tab : t(`myInformations`)
        }
    }


    changeTab = (newTab) => {
        this.setState({
            tab : newTab
        })
    }


    render(){
        const {tab} = this.state;
        const { t } = this.props;

        return (
            <SafeAreaView style={styles.conatiner}>
                <View style={styles.fixedView}>
                    <View>
                        <ImageBackground style={styles.avatarView} source={require(avatarImage)} >
                            <UploadImageButton />
                        </ImageBackground>
                    </View>
                    <View style={styles.tabs}>
                        <AccountTabButtonLong active={tab === t(`myInformations`) ? true : false} title={t(`myInformations`)} hasIcon={false} onChangeTab={this.changeTab}/>
                        <AccountTabButtonLong active={tab === t(`settings`) ? true : false} title={t(`settings`)} hasIcon={true} onChangeTab={this.changeTab}/>
                    </View>
                </View>
                <View style={styles.changingView}>
                    {
                        tab === t(`myInformations`) ? 
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

export default withTranslation()(MyProfile);
