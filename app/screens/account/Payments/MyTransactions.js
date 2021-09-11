import React,{Component} from 'react';
import {SafeAreaView,View,  StyleSheet, FlatList, I18nManager, Platform} from 'react-native';
import Transaction from '../../../components/sub-components/Payment/Transaction';
import {getUserPayments} from '../../../services/api_requests';
import NoContent from '../../../components/sub-components/general/NoContent';
import Loading from '../../../components/sub-components/general/Loading';
import { withTranslation } from 'react-i18next';
import IBSDropDownMenu from '../../../components/sub-components/inputs/IBSDropDownMenu';
import {getUserEmploymentHistory} from '../../../services/api_requests';
import * as SecureStore from 'expo-secure-store';


class MyTransactions extends Component {

    constructor(props) {
        super(props);
        const {t} = this.props
        this.state = {  
            transactions : [],
            isLoading : false,
            yearFilterDropDownLabels : [],
            historyFilterDropDownLabels : [{label : t(`no_data`), value : 2}],
            employmentHistory : [],
            refreshing : false,
            error : '',
        }
    }

    componentDidMount = async () => {
        this.fetchPayments();
        this.fetchEmployeeHistory();
        this.initializeYearFiltrationLabels();
    }

    fetchPayments = async (year = 2021) => {
        this.setState({isLoading : true});
        let response = await getUserPayments(year);
        if(response.status === 200){
            this.setState({
                transactions : response.data.payments,
            });
        }else{}
        this.setState({isLoading : false});
    }

    fetchEmployeeHistory = async () => {
        this.setState({isLoading : true});
        let response = await getUserEmploymentHistory();
        if(response.status === 200){
            this.setState({
                employmentHistory : response.data.employmentHistory}, () => {
                    this.initializeHistoryFiltrationLabels();
                });
        }else{
            this.setState({
                error : response.data.error
            });
        }
        this.setState({isLoading : false});
    }

    initializeHistoryFiltrationLabels = () => {
        let historyClients = this.state.employmentHistory.map((client)=>{
            return {label : client === null || client.client === null || client.client.name === null ? I18nManager.isRTL ? "لا يوجد بيانات" : "no data" :   I18nManager.isRTL ? client.client.name.ar: client.client.name.en, value : client._id}
        })
        this.setState({historyFilterDropDownLabels : historyClients})
    }

    initializeYearFiltrationLabels = () => {
        let years = this.generateArrayOfYears();
        let yearsLabels = years.map((year)=>{
            return {label : year, value : year}
        })
        this.setState({yearFilterDropDownLabels : yearsLabels})
    }

    generateArrayOfYears = () => {
        let max = new Date().getFullYear()
        let min = max - 9
        let years = []
        for (let i = max; i >= min; i--) {
            years.push(i)
        }
        return years
    }

    filterTicketsByYear = async (year) => {
        SecureStore.setItemAsync('year', year.toString());
        this.fetchPayments(year);
    }

    filterTicketsByClient = async (id) => {
        if(id !== null){
            SecureStore.setItemAsync('employee_id', id.toString());
            let year = await SecureStore.getItemAsync('year');
            year = parseInt(year);
            this.fetchPayments(year);
        }
    }

    navigateToPaymentDetails = (id) => {
      this.props.navigation.navigate("PaymentDetails",{paymentId : id});
    }

    handleRefresh = () => {
        this.setState({refreshing : true}, ()=>{
            this.fetchPayments();
        })
    }

    render (){
        const { t } = this.props;
        return (
                <SafeAreaView style={styles.conatiner}>
                    <View style={styles.titleView}>
                        {/* ----------------------- drop down menu ------------------------------------ */}
                        <View style={styles.yearFilter}>
                            {
                                (this.state.yearFilterDropDownLabels.length > 0 && 
                                    <IBSDropDownMenu handleFilter={this.filterTicketsByYear} labels={this.state.yearFilterDropDownLabels} type="year"/>
                                ) 
                            } 
                        </View>
                        <View style={styles.clientFilter}>
                            {
                                (this.state.historyFilterDropDownLabels.length > 0 && 
                                    <IBSDropDownMenu handleFilter={this.filterTicketsByClient} labels={this.state.historyFilterDropDownLabels} type="client"/>
                                ) 
                            } 
                        </View>
                    </View>
                        {/* ----------------------- transaction messages list ------------------------- */}
                        <View style={styles.transactionsView}>
                            {
                            this.state.isLoading === true ? 
                            <Loading action={t(`loading`)}/>
                            : 
                            this.state.transactions.length === 0 ? 
                            <NoContent />
                            :
                            <FlatList
                                data={this.state.transactions}
                                renderItem={({item})=>(<Transaction item={item} middle={false} onHandlePress={this.navigateToPaymentDetails}/>)}
                                keyExtractor={(item) => item._id.toString()}
                                refreshing={this.state.refreshing}
                                onRefresh={this.handleRefresh}
                            />
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
        padding : 20,
    },
    titleView : {
        flex : 1,
        flexDirection : 'row',
        padding : Platform.OS === 'ios'  ? 10  : 0
    },
    yearFilter : {
        flex : 3,
        justifyContent : 'center',
        alignItems : 'center',
        padding : 1,
        position : 'relative',
        zIndex : 10000
    },
    clientFilter : {
        flex : 3,
        justifyContent : 'center',
        alignItems : 'center',
        padding : 1,
        position : 'relative',
        zIndex : 1000,
    },
    transactionsView : {
        flex : 5,
        zIndex : -1
    },

})

export default withTranslation()(MyTransactions);
