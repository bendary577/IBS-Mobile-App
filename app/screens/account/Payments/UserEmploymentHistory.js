import React, {Component} from 'react';
import TitleText from '../../../components/primitive-components/TitleText';
import {getUserEmploymentHistory} from '../../../services/api_requests';
import Loading from '../../../components/sub-components/general/Loading';
import NoContent from '../../../components/sub-components/general/NoContent';
import { withTranslation } from 'react-i18next';
import {SafeAreaView, Image,ScrollView, View, StyleSheet} from 'react-native';
import {primaryRedColor} from '../../../config/colors';
import ClientCard from '../../../components/sub-components/cards/ClientCard';

class UserEmploymentHistory extends Component {

    constructor(props) {
        super(props);
        const {t} = this.props
        this.state = {  
            isLoading : false,
            employmentHistory : {},
            errot : ''
        }
    }

    //make api request when screen is mounted
    componentDidMount = async () =>{
        this.setState({isLoading : true});
        let response = await getUserEmploymentHistory();
        if(response.status === 200){
            console.log("$$$$$$$$$$$ emp data is " +  response.data.employmentHistory._id)
            this.setState({
                employmentHistory : response.data.employmentHistory
            });
        }else{
            this.setState({
                error : response.data.error
            });
        }
        this.setState({isLoading : false});
    }

    render(){
        const { t } = this.props;
        return (

        this.state.isLoading === true ? 
                <Loading />
            :

            this.state.employmentHistory !== {} && Object.keys(this.state.employmentHistory).length !== 0  && this.state.isLoading === false ?

            <SafeAreaView style={styles.container}>
                {/* ------------------------------------- header section ------------------------------------ */}
                <View style={styles.header}>
                    <View style={styles.card}>
                        <Image
                            style={styles.icon}
                            source={require('../../../assets/icons/aboutUs/about.png')}
                        />  
                    </View>
                    <TitleText value={t(`employment_history`)}/>
                </View>

                {/* ------------------------------------- about text section ------------------------------------ */}
                <ScrollView>
                    <View style={styles.supportTicketsView}>
                        {
                            this.state.employmentHistory.client !== null ? 
                            this.state.employmentHistory.map((client)=>{
                                return <ClientCard key={client.client._id.toString()} item={client} />
                            })
                            :
                            <NoContent />
                        }
                    </View>
                </ScrollView>
                </SafeAreaView>
                :
                <NoContent />
            )   
    }
}

const styles = StyleSheet.create({
    container : {
        marginTop : 20,
        flex : 1,
        flexDirection : 'column',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical : 20,
        marginLeft : 10,
        marginBottom: 20
    },
    card : {
        width : 30,
        height: 30,
        backgroundColor : primaryRedColor,
        justifyContent: 'center',
        alignItems : 'center',
        borderRadius : 8,
        marginRight : 5
    },
    supportTicketsView : {
        flex : 4,
    },
})

export default withTranslation()(UserEmploymentHistory);
