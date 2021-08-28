import React, {useState} from 'react';
import {View,SafeAreaView, StyleSheet} from 'react-native';
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
        <SafeAreaView>
            <DropDownPicker
                zIndex = {2000}
                items={props.labels}
                value={selectedValue}
                open={filterDropDownOpen}
                containerStyle={styles.dropdown}
                style={styles.dropdown}
                //dropDownStyle={{backgroundColor: '#fafafa'}}
                setValue={applyFilter}
                onChangeValue={(value)=> props.handleFilter(value)}
                placeholder={ props.type === 'year' ? t(`year_filter`) : props.type === 'client' ? t(`client_filter`) : t(`tickets_filter`) }
                onPress={toggleFilterDropDown}
                closeAfterSelecting={true}
                itemSeparator={true}
                dropDownContainerStyle={styles.dropdownContainer}
                selectedItemContainerStyle={styles.selectedItemContainer}
                selectedItemLabelStyle={styles.selectedItemLabel}
                itemSeparatorStyle={styles.itemSeparator}
                onClose={toggleFilterDropDown}  
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    dropdown : {
        height: 45,
        borderRadius : 20,
    },
    dropdownContainer : {
        backgroundColor: "#edebeb",
        borderColor : '#bababa',
    },
    selectedItemContainer : {
        backgroundColor: "#f0afaf"
    },
    selectedItemLabel : {
        fontWeight: "bold"
    },
    itemSeparator : {
        backgroundColor: "#a4a4a6"
    },
})

export default IBSDropDownMenu;
