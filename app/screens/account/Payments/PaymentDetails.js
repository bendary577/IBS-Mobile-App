import React, {Component} from 'react';
import {SafeAreaView,View, Text, StyleSheet,Image, I18nManager} from 'react-native';
import TitleText from '../../../components/primitive-components/TitleText';
import AccountTabButton from '../../../components/sub-components/navigationTabs/AccountTabButton';
import EaringsSection from '../../../components/sub-components/Payment/EarningsSection';
import DeductionsSection from '../../../components/sub-components/Payment/DeductionsSection';
import OtherInfoSection from '../../../components/sub-components/Payment/OtherInfoSection';
import {getSiglePayment} from '../../../services/api_requests';
import Loading from '../../../components/sub-components/general/Loading';
import NoContent from '../../../components/sub-components/general/NoContent';
import { withTranslation } from 'react-i18next';
import moment from 'moment';

let bankIcon = '../../../assets/icons/Payment/bank.png';
let dataIcon = '../../../assets/icons/Payment/date.png';


class PaymentDetails extends Component {

    constructor(props) {
        super(props);
        const {t} = this.props
        this.state = {  
            tab : t(`earnings`),
            isLoading : false,
            error : '',
            payment : {}
        }
    }

    //make api request when screen is mounted
    componentDidMount = async () =>{
        this.setState({isLoading : true});
        let response = await getSiglePayment(this.props.route.params.paymentId);
        if(response.status === 200){
            this.setState({
                payment : response.data.payment
            });
        }else{
            this.setState({
                error : response.data.error
            });
        }
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
        const { t } = this.props;

        return (

            isLoading === true ? 
                <Loading />
            :

            this.state.error !== '' ?

            <Text style={styles.error}>{this.state.error}</Text>

            :

            Object.keys(payment).length !== 0 && isLoading === false ?

                <SafeAreaView style={styles.conatiner}>
                    <View style={styles.fixedView}>
                        {/* ---------------------------- title ------------------------ */}
                        <View>
                            <TitleText value={t(`paymentDetails`)} />
                        </View>

                        {/* ---------------------------- transaction info ------------------------ */}
                        <View>
                            <Image style={styles.bankIcon} source={require(bankIcon)} />
                            <Text style={[styles.bankTitle, styles.textAlign]}>{I18nManager.isRTL ? payment.bank.name.ar : payment.bank.name.en}</Text>
                            <View style={styles.transactionView}>
                                <View>
                                    <Text style={styles.transactionAmmountText}>{payment.total}</Text>
                                </View>
                                <View style={styles.transactionDateView}>
                                    <Image style={styles.dateIcon} source={require(dataIcon)} />
                                    <Text style={styles.transactionDateText}>{moment(payment.createdAt).format("MMM Do YY")}</Text>
                                </View>
                            </View>
                        </View>

                        {/* ---------------------------- tabs ------------------------ */}
                        <View style={styles.tabs}>
                            <AccountTabButton active={tab === t(`earnings`) ? true : false} title={t(`earnings`)} onChangeTab={this.changeTab}/>
                            <AccountTabButton active={tab === t(`deductions`) ? true : false} title={t(`deductions`)} onChangeTab={this.changeTab}/>
                            <AccountTabButton active={tab === t(`otherInfo`) ? true : false} title={t(`otherInfo`)} onChangeTab={this.changeTab}/>
                        </View>
                    </View>

                    {/* ---------------------------- changing section of the screen ------------------------ */}
                    <View style={styles.changedView}>
                        { 
                        tab === t(`earnings`) ? 
                            <EaringsSection item={payment.paymentDetails[0]} />
                            :
                        tab === t(`deductions`) ? 
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
    textAlign : {
        textAlign : 'left', 
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
    error : {
        flex : 1,
        flexDirection : 'column',
        fontSize : 20,
        textAlign : 'center',
        justifyContent : 'center',
        alignItems : 'center',
        color : 'red',
        marginTop : "40%",
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

export default withTranslation()(PaymentDetails);
