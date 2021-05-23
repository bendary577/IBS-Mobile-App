import React, {Component} from 'react'
import {StyleSheet, Text, View, ScrollView } from 'react-native'
import ProfileInfoCard from '../../../components/sub-components/cards/ProfileInfoCard';
import {t} from '../../../languages/i18Manager';

const ProfileInfoSection = () => {

    return (
        <View style={styles.conatiner}>
            <ScrollView>
                <ProfileInfoCard title={t(`profile:username`)} value="Islam Mohamed Abdelazim kamal mahmoud" />
                <ProfileInfoCard title={t(`profile:nationaiID`)} value="28701038800411"/>
                <ProfileInfoCard title={t(`profile:phone`)} value="01024635330"/>
                <ProfileInfoCard title={t(`profile:email`)} value="ema.eslam@gmail.com"/>
                <ProfileInfoCard title={t(`profile:address`)} value="maadi, bolaq eldakror, Giza"/>
                <ProfileInfoCard title={t(`profile:company`)} value="IBS"/>
                <ProfileInfoCard title={t(`profile:nationality`)} value="Egyptian"/>
                <ProfileInfoCard title={t(`profile:bank`)} value="Bank of Alexandria"/>
                <ProfileInfoCard title={t(`profile:hiringDate`)} value="01 Jan 2011"/>
                <ProfileInfoCard title={t(`profile:ibsNumber`)} value="67323"/>
                <ProfileInfoCard title={t(`profile:jobTitle`)} value="IT Project Resource"/>
                <ProfileInfoCard title={t(`profile:gender`)} value="Male"/>
                <ProfileInfoCard title={t(`profile:insuranceNumber`)} value="63218741"/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex : 1,
        flexDirection : 'column',
    },

})

export default ProfileInfoSection;
