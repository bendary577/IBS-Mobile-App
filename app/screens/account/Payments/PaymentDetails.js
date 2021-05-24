import React, {Component} from 'react';
import {SafeAreaView,View, Text, StyleSheet,Image,Button, ScrollView } from 'react-native';
import TitleText from '../../../components/primitive-components/TitleText';
import AccountTabButton from '../../../components/sub-components/navigationTabs/AccountTabButton';
import EaringsSection from '../../../components/sub-components/Payment/EarningsSection';
import DeductionsSection from '../../../components/sub-components/Payment/DeductionsSection';
import OtherInfoSection from '../../../components/sub-components/Payment/OtherInfoSection';
import {t} from '../../../languages/i18Manager';
import {authorizeRequestWithId} from '../../../services/authentication';
import {getSiglePayment} from '../../../services/api_requests';
import Loading from '../../../components/sub-components/general/Loading';
import NoContent from '../../../components/sub-components/general/NoContent';

let bankIcon = '../../../assets/icons/Payment/bank.png';
let dataIcon = '../../../assets/icons/Payment/date.png';


class PaymentDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {  
            tab : t(`payment:earnings`),
            isLoading : false,
            payment : {}
        }
    }

    //make api request when screen is mounted
    componentDidMount = async () =>{
        this.setState({isLoading : true});
        let data = await authorizeRequestWithId(getSiglePayment, this.props.route.params.paymentId);
        this.setState({
            payment : data
        });
        this.setState({isLoading : false});
    }

    //change current active tab 
    changeTab = (newTab) => {
        this.setState({
            tab : newTab
        })
    }

    render(){

        //get current active tab, payment, loading state 
        const {tab, isLoading, payment} = this.state;

        return (

            isLoading === true ? 
                <Loading />
            :

            Object.keys(payment).length !== 0 && isLoading === false ?

                <SafeAreaView style={styles.conatiner}>
                    {/* ---------------------------- fixed section of the screen ------------------------ */}
                    <View style={styles.fixedView}>
                        {/* ---------------------------- title ------------------------ */}
                        <View>
                            <TitleText value={t(`payment:paymentDetails`)} />
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
                            <AccountTabButton active={tab === t(`payment:earnings`) ? true : false} title={t(`payment:earnings`)} onChangeTab={this.changeTab}/>
                            <AccountTabButton active={tab === t(`payment:deductions`) ? true : false} title={t(`payment:deductions`)} onChangeTab={this.changeTab}/>
                            <AccountTabButton active={tab === t(`payment:otherInfo`) ? true : false} title={t(`payment:otherInfo`)} onChangeTab={this.changeTab}/>
                        </View>
                    </View>

                    {/* ---------------------------- changing section of the screen ------------------------ */}
                    <View style={styles.changedView}>
                        { 
                        tab === t(`payment:earnings`) ? 
                            <EaringsSection item={payment.paymentDetails[0]} />
                            :
                        tab === t(`payment:deductions`) ? 
                            <DeductionsSection item={payment.paymentDetails[1]} />
                            :
                            <OtherInfoSection item={payment.paymentDetails[2]} />
                        }
                    </View>
                </SafeAreaView>
                :
                <NoContent />
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
