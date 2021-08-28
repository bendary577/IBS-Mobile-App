import React, {useEffect, useState} from 'react'
import {StyleSheet, View, Text, ScrollView, I18nManager } from 'react-native'
import ProfileInfoCard from '../../../components/sub-components/cards/ProfileInfoCard';
import {getUserInfo} from '../../../services/api_requests';
import { withTranslation } from 'react-i18next';
import IBSButtonLargeGray from '../../primitive-components/IBSButtonLargeGray';
import moment from 'moment';
import Loading from '../../../components/sub-components/general/Loading';
import {useTranslation} from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

const ProfileInfoSection = () => {

    const [username, setUsername] = useState('');
    const [nationalID, setNationalID] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [company, setCompany] = useState('');
    const [nationality, setNationality] = useState('');
    const [bank, setBank] = useState('');
    const [hiringDate, setHiringDate] = useState('');
    const [ibsNumber, setIbsNumber] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [gender, setGender] = useState('');
    const [insuranceNumber, setInsuranceNumber] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');
    const navigation = useNavigation();
    const {t} = useTranslation();

    useEffect(()=>{
        fetchUserData();
    }, [fetchUserData])

    const fetchUserData = async () =>{
        setLoading(true);
        let response = await getUserInfo();
        if(response.status === 200){
            setUsername(I18nManager.isRTL ? response.data.user.emp.name.ar : response.data.user.emp.name.en);
            setNationalID(response.data.user.identityNumbe);
            setPhone(response.data.user.phone);
            setEmail(response.data.user.emp.email);
            setAddress(I18nManager.isRTL ? response.data.user.emp.address.ar : response.data.user.emp.address.en);
            setCompany(response.data.user.emp.bank.name);
            setNationality(response.data.user.nationality);
            setBank(response.data.user.emp.bank.name);
            setHiringDate(response.data.user.emp.hiringDate);
            setIbsNumber(response.data.user.emp.clientEmpNumber);
            setJobTitle(I18nManager.isRTL ? response.data.user.emp.job.ar : response.data.user.emp.job.en);
            setGender(response.data.user.emp.gender);
            setInsuranceNumber(response.data.user.emp.insuranceNumber);
        }else{
            console.log("error")
            //setError(response.data.error)
        }
        setLoading(false);
    }

        const navigateToUpdatePassword = () => {
            navigation.navigate("Update Password")
        }


        return (
            <View style={styles.conatiner}>
                <IBSButtonLargeGray value={t(`update_password`)} action={false} onHandlePress={navigateToUpdatePassword}/>
                {
                    loading === true ? 
                    <Loading />
                    :
                    error !== '' ? 
                    <Text style={styles.error}>{error}</Text>
                    :
                    <ScrollView>
                        <ProfileInfoCard title={t(`username`)} value={username} />
                        <ProfileInfoCard title={t(`nationaiID`)} value={nationalID}/>
                        <ProfileInfoCard title={t(`phone`)} value={phone}/>
                        <ProfileInfoCard title={t(`email`)} value={email}/>
                        <ProfileInfoCard title={t(`user_address`)} value={address}/>
                        <ProfileInfoCard title={t(`company`)} value={company}/>
                        <ProfileInfoCard title={t(`nationality`)} value={nationality}/>
                        <ProfileInfoCard title={t(`bank`)} value={bank}/>
                        <ProfileInfoCard title={t(`hiringDate`)} value={moment(hiringDate).format("MMM Do YY")}/>
                        <ProfileInfoCard title={t(`ibsNumber`)} value={ibsNumber}/>
                        <ProfileInfoCard title={t(`jobTitle`)} value={jobTitle}/>
                        <ProfileInfoCard title={t(`gender`)} value={gender}/>
                        <ProfileInfoCard title={t(`insuranceNumber`)} value={insuranceNumber}/>
                    </ScrollView>
                }

            </View>
        )
}

const styles = StyleSheet.create({
    conatiner: {
        flex : 1,
        flexDirection : 'column',
    },
    error : {
        flex : 1,
        flexDirection : 'column',
        fontSize : 18,
        textAlign : 'center',
        justifyContent : 'center',
        alignItems : 'center',
        color : 'red',
        marginTop : '5%'
    },

})

export default withTranslation()(ProfileInfoSection);
