import React,{Component} from 'react';
import {SafeAreaView,View, StyleSheet ,FlatList, I18nManager} from 'react-native';
import TitleText from '../../../components/primitive-components/TitleText';
import Transaction from '../../../components/sub-components/Payment/Transaction';
import {getUserPayments} from '../../../services/api_requests';
import NoContent from '../../../components/sub-components/general/NoContent';
import Loading from '../../../components/sub-components/general/Loading';
import { withTranslation } from 'react-i18next';
import IBSDropDownMenu from '../../../components/sub-components/inputs/IBSDropDownMenu';

class MyTransactions extends Component {

    constructor(props) {
        super(props);
        this.state = {  
            transactions : [],
            renderedTransactions : [],
            isLoading : false,
            bankNames : [],
            dropDownLabels : []
        }
    }

    componentDidMount = async () =>{
        this.setState({isLoading : true});
        let response = await getUserPayments();
        if(response.status === 200){
            //fetch the returned payments transactions
            this.setState({
                transactions : response.data.payments,
                renderedTransactions : response.data.payments
            });
            //get all payments banks names
            let banks  = response.data.payments.map((payment) => {
                return I18nManager.isRTL ? payment.bank.name.ar : payment.bank.name.en 
            })
            //filter the bank names to be unique
            banks = banks.filter((item, index, list) => {
                return list.indexOf(item) === index
            })
            this.setState({bankNames : banks})
            //set the dropdown filter labels as banks namespace
            banks.map((bank) => {
                let filterLabel = {
                    label : bank,
                    value : bank
                }
                this.state.dropDownLabels.push(filterLabel);
            })
        }else{}
        this.setState({isLoading : false});
    }

    filterTickets = async (value) => {
        let bankname = this.state.bankNames.filter((bankName)=>{
            return bankName === value;
        })
        let payments = this.state.transactions.filter( transaction => {
            return transaction.bank.name.ar == bankname 
        })
        this.setState({renderedTransactions : payments})
    }

    navigateToPaymentDetails = (route, id) => {
      this.props.navigation.navigate(route, id);
    }

    render (){
        const { t } = this.props;
        return (
            this.state.isLoading === true ? 
            <Loading action={t(`loading`)}/>
                :
            this.state.renderedTransactions.length === 0 ? 
                <NoContent />
                : 
                <SafeAreaView style={styles.conatiner}>
                    <View style={styles.titleView}>
                        {/* ----------------------- screen title ---------------------------------------- */}
                        <TitleText value={t(`myTransactions`)}/>
                        {/* ----------------------- drop down menu ------------------------------------ */}
                        <View style={{marginTop : 30}}>
                            <IBSDropDownMenu handleFilter={this.filterTickets} labels={this.state.dropDownLabels} />
                        </View>
                    </View>
                        {/* ----------------------- transaction messages list ------------------------- */}
                    <View style={styles.transactionsView}>
                        <FlatList
                            data={this.state.renderedTransactions}
                            renderItem={({item})=>(<Transaction item={item} middle={false} onHandlePress={this.navigateToPaymentDetails}/>)}
                            keyExtractor={(item) => item._id.toString()}
                         />
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
    titleView : {
        flex : 2,
        padding : 20,
    },
    dropdown : {
        flex : 1,
        borderRadius : 15,
        borderWidth : 1,
        borderColor : 'black'
    },
    transactionsView : {
        flex : 4,
    },

})

export default withTranslation()(MyTransactions);
