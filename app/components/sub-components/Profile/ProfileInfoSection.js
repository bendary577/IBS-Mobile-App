import React, {Component} from 'react'
import {StyleSheet, View, ScrollView } from 'react-native'
import ProfileInfoCard from '../../../components/sub-components/cards/ProfileInfoCard';
import {getUserInfo} from '../../../services/api_requests';
import {authorizeRequest} from '../../../services/authentication';
import { withTranslation } from 'react-i18next';

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
        let data = await authorizeRequest(getUserInfo);
        console.log("data is " + data.company.name.en);
        this.setData(data.name.en, 
                data.identityNumber,
                data.phone,
                data.email,
                data.address.en,
                data.company.name.en,
                data.nationality.en,
                data.bank.name.en,
                data.hiringDate,
                data.ibsNumber,
                data.job.en,
                data.gender.en,
                data.insuranceNumber);
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

    render(){
        const { t } = this.props;

        return (
            <View style={styles.conatiner}>
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
