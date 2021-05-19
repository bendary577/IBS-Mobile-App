import React, {Component} from 'react';
import {SafeAreaView,View, Text, StyleSheet,Image,Button, ScrollView } from 'react-native';
import TitleText from '../../../components/primitive-components/TitleText';
import AccountTabButton from '../../../components/sub-components/navigationTabs/AccountTabButton';
import EaringsSection from '../../../components/sub-components/Payment/EarningsSection';
import DeductionsSection from '../../../components/sub-components/Payment/DeductionsSection';
import OtherInfoSection from '../../../components/sub-components/Payment/OtherInfoSection';

let bankIcon = '../../../assets/icons/Payment/bank.png';
let dataIcon = '../../../assets/icons/Payment/date.png';

class PaymentDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {  
            tab : "Earnings"
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
                {/* ---------------------------- fixed section of the screen ------------------------ */}
                <View style={styles.fixedView}>
                    {/* ---------------------------- title ------------------------ */}
                    <View>
                        <TitleText value="Payment Details" />
                    </View>

                    {/* ---------------------------- transaction info ------------------------ */}
                    <View>
                        <Image style={styles.bankIcon} source={require(bankIcon)} />
                        <Text style={styles.bankTitle}>Commercial International Bank</Text>
                        <View style={styles.transactionView}>
                            <View>
                                <Text style={styles.transactionAmmountText}>14351.48 LE</Text>
                            </View>
                            <View style={styles.transactionDateView}>
                                <Image style={styles.dateIcon} source={require(dataIcon)} />
                                <Text style={styles.transactionDateText}>Jul’ 2019</Text>
                            </View>
                        </View>
                    </View>

                    {/* ---------------------------- tabs ------------------------ */}
                    <View style={styles.tabs}>
                        <AccountTabButton active={tab === "Earnings" ? true : false} title="Earnings" onChangeTab={this.changeTab}/>
                        <AccountTabButton active={tab === "Deductions" ? true : false} title="Deductions" onChangeTab={this.changeTab}/>
                        <AccountTabButton active={tab === "Other Info" ? true : false} title="Other Info" onChangeTab={this.changeTab}/>
                    </View>
                </View>

                {/* ---------------------------- changing section of the screen ------------------------ */}
                <View style={styles.changedView}>
                    { tab === "Earnings" ? 
                        <EaringsSection />
                        :
                      tab === "Deductions" ? 
                        <DeductionsSection />
                        :
                        <OtherInfoSection />
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
        padding : 20,
    },
    bankIcon : {
        marginTop : 10,
    },
    bankTitle : {
        fontSize : 18,
        marginTop : 10
    },
    transactionView : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginTop : 15
    },

    transactionAmmountText : {
        fontSize : 18,
        color : 'red'
    },
    transactionDateView : {
        flexDirection : 'row'
    },  
    dateIcon : {
        width : 20,
        height : 20,
        marginRight : 5
    },
    transactionDateText : {
        fontSize : 16   
    },
    tabs : {
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        marginTop : 30
    },
    tabButton : {
        backgroundColor : 'red',
        color : 'black'
    },
    changedView : {
        flex : 3,
    },
})

export default PaymentDetails;
