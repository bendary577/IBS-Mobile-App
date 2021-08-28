import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useTranslation} from 'react-i18next';

const IBSDropDownMenu = (props) => {

    const [filterDropDownOpen, setFilterDropDownOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const {t} = useTranslation();

    const toggleFilterDropDown = () => {
        setFilterDropDownOpen(!filterDropDownOpen);
    }

    const applyFilter = (value) => {
        setSelectedValue(value)
        setFilterDropDownOpen();
    }  

    return (
        <View style={{zIndex : 2000}}>
            <DropDownPicker
                items={props.labels}
                value={selectedValue}
                open={filterDropDownOpen}
                setValue={applyFilter}
                onChangeValue={(value)=> props.handleFilter(value)}
                placeholder={t(`filter`)}
                onPress={toggleFilterDropDown}
                closeAfterSelecting={true}
                itemSeparator={true}
     
            />
        </View>
    )
}

const styles = StyleSheet.create({
    

})

export default IBSDropDownMenu;
