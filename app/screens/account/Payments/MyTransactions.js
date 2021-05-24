import React,{Component} from 'react';
import {SafeAreaView,View, Text, StyleSheet, ScrollView ,FlatList} from 'react-native';
import TitleText from '../../../components/primitive-components/TitleText';
import DropDownPicker from 'react-native-dropdown-picker';
import Transaction from '../../../components/sub-components/Payment/Transaction';
import { t } from '../../../languages/i18Manager';
import {authorizeRequest} from '../../../services/authentication';
import {getUserPayments} from '../../../services/api_requests';
import NoContent from '../../../components/sub-components/general/NoContent';
import Loading from '../../../components/sub-components/general/Loading';

class MyTransactions extends Component {

    constructor(props) {
        super(props);
        this.state = {  
            transactions : [],
            isLoading : false
        }
    }

    componentDidMount = async () =>{
        this.setState({isLoading : true});
        let data = await authorizeRequest(getUserPayments);
        this.setState({
            transactions : data
        });
        this.setState({isLoading : false});
    }


    navigateToPaymentDetails = (route, id) => {
      this.props.navigation.navigate(route, id);
    }

    render (){
        return (
            this.state.isLoading === true ? 
                <Loading />
                :
            this.state.transactions.length === 0 ? 
                <NoContent />
                : 
                <SafeAreaView style={styles.conatiner}>
                    <View style={styles.titleView}>
                    <TitleText value={t(`payment:myTransactions`)}/>
                    <View style={{marginTop : 30}}>
                            <DropDownPicker
                                items={[
                                    {label: 'Item 1', value: 'item1'},
                                    {label: 'Item 2', value: 'item2'},
                                ]}
                                defaultValue="item1"
                                containerStyle={{height: 45}}
                                style={styles.dropdown}
                                dropDownStyle={{backgroundColor: '#fafafa'}}
                                onChangeItem={item => console.log(item.label, item.value)}
                                placeholder={t(`general:filter`)}
                            />
                    </View>
                    </View>
                    <View style={styles.transactionsView}>
                        <FlatList
                            data={this.state.transactions}
                            renderItem={({item})=>(<Transaction item={item} middle={false} onHandlePress={this.navigateToPaymentDetails}/>)}
                            keyExtractor={(item) => item._id}
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

export default MyTransactions;
