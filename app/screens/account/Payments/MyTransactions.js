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
            isLoading : false,
            dropDownLabels : [],
        }
    }

    componentDidMount = async () => {
        this.fetchPayments();
        this.initializeFiltrationLabels();
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

    initializeFiltrationLabels = () => {
        let years = this.generateArrayOfYears();
        let yearsLabels = years.map((year)=>{
            return {label : year, value : year}
        })
        this.setState({dropDownLabels : yearsLabels})
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

    filterTickets = async (year) => {
        this.fetchPayments(year);
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
                <SafeAreaView style={styles.conatiner}>
                    <View style={styles.titleView}>
                        {/* ----------------------- drop down menu ------------------------------------ */}
                        <View style={{marginTop : 30}}>
                            {
                                (this.state.dropDownLabels.length > 0 && 
                                    <IBSDropDownMenu handleFilter={this.filterTickets} labels={this.state.dropDownLabels} />
                                ) 
                            }
                              
                        </View>
                    </View>
                        {/* ----------------------- transaction messages list ------------------------- */}
                        <View style={styles.transactionsView}>
                            {
                            this.state.transactions.length === 0 ? 
                            <NoContent />
                            :
                            <FlatList
                                data={this.state.transactions}
                                renderItem={({item})=>(<Transaction item={item} middle={false} onHandlePress={this.navigateToPaymentDetails}/>)}
                                keyExtractor={(item) => item._id.toString()}
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
    },
    titleView : {
        flex : 2,
        padding : 20,
    },
    transactionsView : {
        flex : 4,
    },

})

export default withTranslation()(MyTransactions);
