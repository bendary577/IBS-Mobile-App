import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useTranslation} from 'react-i18next';

const IBSDropDownMenu = (props) => {

    const [filterDropDownOpen, setFilterDropDownOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const {t} = useTranslation();

    useEffect(()=>{
        //console.log("dropdown " + props.labels[0].label)
    },[]);

    const toggleFilterDropDown = () => {
        setFilterDropDownOpen(!filterDropDownOpen);
    }

    const applyFilter = (value) => {
        setSelectedValue(value)
    }  

    return (
        <SafeAreaView>
            <DropDownPicker
                items={props.labels}
                value={selectedValue}
                open={filterDropDownOpen}
                containerStyle={styles.dropdown}
                style={styles.dropdown}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                setValue={applyFilter}
                onChangeValue={(value)=> props.handleFilter(value)}
                placeholder={t(`filter`)}
                onPress={toggleFilterDropDown}
                closeAfterSelecting={true}
                itemSeparator={true}
                />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    dropdown : {
        height: 45
    }

})

export default IBSDropDownMenu;
