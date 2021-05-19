import React, {Component} from 'react'
import {StyleSheet, Text, View, ScrollView } from 'react-native'
import ProfileInfoCard from '../../../components/sub-components/cards/ProfileInfoCard';

const ProfileInfoSection = () => {

    return (
        <View style={styles.conatiner}>
            <ScrollView>
                <ProfileInfoCard title="User name" value="Islam Mohamed Abdelazim kamal mahmoud" />
                <ProfileInfoCard title="National ID or Passport Number" value="28701038800411"/>
                <ProfileInfoCard title="Phone Number" value="01024635330"/>
                <ProfileInfoCard title="Email Address" value="ema.eslam@gmail.com"/>
                <ProfileInfoCard title="Address" value="maadi, bolaq eldakror, Giza"/>
                <ProfileInfoCard title="Company" value="IBS"/>
                <ProfileInfoCard title="Nationality" value="Egyptian"/>
                <ProfileInfoCard title="Bank Name" value="Bank of Alexandria"/>
                <ProfileInfoCard title="Hiring Date" value="01 Jan 2011"/>
                <ProfileInfoCard title="IBS Number" value="67323"/>
                <ProfileInfoCard title="Job Title" value="IT Project Resource"/>
                <ProfileInfoCard title="Gender" value="Male"/>
                <ProfileInfoCard title="Insurance Number" value="63218741"/>
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
