import React, {Component} from 'react'
import {StyleSheet, View, ScrollView } from 'react-native'
import ProfileInfoCard from '../../../components/sub-components/cards/ProfileInfoCard';
import {getUserInfo} from '../../../services/api_requests';
import { withTranslation } from 'react-i18next';
import IBSButtonLargeGray from '../../primitive-components/IBSButtonLargeGray';


class ProfileInfoSection extends Component {

    constructor(props) {
        super(props);
        this.state = {  
            username : '',
            nationaiID : '',
            phone : '',
            email : '',
            address: '',
            company: '',
            nationality: '',
            bank: '',
            hiringDate: '',
            ibsNumber: '',
            jobTitle: '',
            gender: '',
            insuranceNumber: ''
        }
    }


    componentDidMount = async () =>{
        let data = await getUserInfo();
        console.log("^^^^^^^^^^^^^^^^^^^ egypt " + data.user.emp.name.en);
        this.setData(
                data.user.emp.name.en, 
                data.user.identityNumber,
                data.user.phone,
                data.user.emp.email,
                data.user.emp.address.en,
                data.user.emp.bank.name,
                data.user.nationality,
                data.user.emp.bank.name,
                data.user.emp.hiringDate,
                data.user.emp.clientEmpNumber,
                data.user.emp.job.en,
                data.user.emp.gender,
                data.user.emp.insuranceNumber);
    }

    setData = (username, identityNumber,phone, email,address,company, nationality, bank, hiringDate, ibsNumber, job, gender, insuranceNumber) => {
        this.setState({
            username : username,
            nationaiID : identityNumber,
            phone : phone,
            email : email,
            address: address,
            company: company,
            nationality: nationality,
            bank: bank,
            hiringDate: hiringDate,
            ibsNumber: ibsNumber,
            jobTitle: job,
            gender: gender,
            insuranceNumber: insuranceNumber
        })
    }

    navigateToUpdatePassword = () => {
        this.props.navigation.navigate("Update Password")
    }

    render(){
        const { t } = this.props;

        return (
            <View style={styles.conatiner}>
                <IBSButtonLargeGray value="Update Password" action={false} onHandlePress={this.navigateToUpdatePassword}/>
                <ScrollView>
                    <ProfileInfoCard title={t(`username`)} value={this.state.username} />
                    <ProfileInfoCard title={t(`nationaiID`)} value={this.state.nationaiID}/>
                    <ProfileInfoCard title={t(`phone`)} value={this.state.phone}/>
                    <ProfileInfoCard title={t(`email`)} value={this.state.email}/>
                    <ProfileInfoCard title={t(`address`)} value={this.state.address}/>
                    <ProfileInfoCard title={t(`company`)} value={this.state.company}/>
                    <ProfileInfoCard title={t(`nationality`)} value={this.state.nationality}/>
                    <ProfileInfoCard title={t(`bank`)} value={this.state.bank}/>
                    <ProfileInfoCard title={t(`hiringDate`)} value={this.state.hiringDate}/>
                    <ProfileInfoCard title={t(`ibsNumber`)} value={this.state.ibsNumber}/>
                    <ProfileInfoCard title={t(`jobTitle`)} value={this.state.jobTitle}/>
                    <ProfileInfoCard title={t(`gender`)} value={this.state.gender}/>
                    <ProfileInfoCard title={t(`insuranceNumber`)} value={this.state.insuranceNumber}/>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conatiner: {
        flex : 1,
        flexDirection : 'column',
    },

})

export default withTranslation()(ProfileInfoSection);
