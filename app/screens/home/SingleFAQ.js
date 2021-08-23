import React, { useState , useEffect} from 'react';
import {Text, View, SafeAreaView, StyleSheet, I18nManager} from 'react-native';
import {useTranslation} from 'react-i18next';
import {getSingleFAQ} from '../../services/api_requests';
import Loading from '../../components/sub-components/general/Loading';
import NoContent from '../../components/sub-components/general/NoContent';
import { WebView } from 'react-native-webview';
import moment from 'moment';

//------------------------ screen ---------------------
const SingleFAQ = ({route, navigation}) => {

    const [faq, setFAQ] = useState(null);
    const [loading , setLoading] = useState([]);
    const [error, setError] = useState('');
    const {t} = useTranslation();

    useEffect(() => {
        fetchFAQ();
    }, [fetchFAQ]);

    const fetchFAQ = async () => {
        setLoading(true);
        let response = await getSingleFAQ(route.params.faq_id);
        if(response.status === 200) {
            setFAQ(response.data.faq);
        }else{
            setError(response.data.error);
        }
        setLoading(false)
    }

	return (

        loading === true ? 

        <Loading action={t(`loading`)}/>
        :

        error !== '' ? 
        <Text style={styles.error}>{error}</Text>
        :

        faq === null ? 
            <NoContent />
        :
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={[styles.title, styles.textAlign]}>{faq.title}</Text>
                <View style={styles.redLine}></View>
                <Text style={[styles.createdAt, styles.textAlign]}> {t(`created_at`)} {moment(faq.createdAt).format("MMM Do YY")}</Text>
                <View style={styles.employeeView}>
                    <View style={styles.employeeNameView}>
                        <Text>{I18nManager.isRTL ? faq.createdBy.emp.name.ar : faq.createdBy.emp.name.en}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.WebView}>
                <WebView
                    originWhitelist={['*']}
                    source={{ html: "<div class='preview'><h1>Addidisti ad extremum etiam indoctum fuisse.</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hi curatione adhibita levantur in dies, valet alter plus cotidie, alter videt. <mark>Aliter enim explicari, quod quaeritur, non potest.</mark> Age nunc isti doceant, vel tu potius quis enim ista melius? <a href='http://loripsum.net/' target='_blank'>Duo Reges: constructio interrete.</a> Negat enim summo bono afferre incrementum diem. </p><h3>Ab hoc autem quaedam non melius quam veteres, quaedam omnino relicta.&lt;/h3>&lt;p>Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Si enim ita est, vide ne facinus facias, cum mori suadeas. Illa sunt similia: hebes acies est cuipiam oculorum, corpore alius senescit; Habes, inquam, Cato, formam eorum, de quibus loquor, philosophorum. Nos commodius agimus. Progredientibus autem aetatibus sensim tardeve potius quasi nosmet ipsos cognoscimus. Non igitur bene. Sed quid minus probandum quam esse aliquem beatum nec satis beatum? </p><p>At ille pellit, qui permulcet sensum voluptate. Possumusne ergo in vita summum bonum dicere, cum id ne in cena quidem posse videamur? Fortasse id optimum, sed ubi illud: Plus semper voluptatis? <i>Occultum facinus esse potuerit, gaudebit</i> Quid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret? <b>Quamquam te quidem video minime esse deterritum.</b> Nam prius a se poterit quisque discedere quam appetitum earum rerum, quae sibi conducant, amittere. </p><blockquote cite='http://loripsum.net'>Ipse negat, ut ante dixi, luxuriosorum vitam reprehendendam, nisi plane fatui sint, id est nisi aut cupiant aut metuant.</blockquote><h2>Hoc non est positum in nostra actione.</h2><p>Quasi vero, inquit, perpetua oratio rhetorum solum, non etiam philosophorum sit. Isto modo ne improbos quidem, si essent boni viri. At ille pellit, qui permulcet sensum voluptate. <a href='http://loripsum.net/' target='_blank'>Bonum incolumis acies: misera caecitas.</a> Aufidio, praetorio, erudito homine, oculis capto, saepe audiebam, cum se lucis magis quam utilitatis desiderio moveri diceret. Vide, ne etiam menses! nisi forte eum dicis, qui, simul atque arripuit, interficit. Quamvis enim depravatae non sint, pravae tamen esse possunt. Sed quid attinet de rebus tam apertis plura requirere? </p></div>"}}
                    style={{ marginTop: 20 }}
                />
            </View>
        </View>

	);
}

//----------------------- screen styling ---------------------
const styles = StyleSheet.create({
    container : {
        flex : 1,
        display: 'flex',
        flexDirection : 'column',
        padding : 15
    },
    heading : {

    },
    textAlign : {
        textAlign : 'left', 
    },
    redLine : {
        height : 4,
        width : 30,
        backgroundColor : 'red',
        marginTop : 3
    },
    title : {
        fontSize:20, 
        fontWeight : 'bold'
    },
    createdAt : {
        marginVertical : 10
    },
    employeeView : {
        justifyContent : 'center',
        alignItems : 'center',
        marginBottom : 10
    },
    employeeNameView : {
        backgroundColor : '#c4c4c4',
        borderRadius : 10,
        width : '90%',
        height: 40,
        justifyContent : 'center',
        padding : 10
    },
    WebView : {
        flex : 1,
        borderWidth : 2,
        borderRadius : 5,
        borderColor : '#bfbfbd'
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
});





export default SingleFAQ;