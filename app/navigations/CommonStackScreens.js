import * as React from 'react';
import AboutUs from '../screens/home/AboutUs';
import VisitUs from '../screens/home/VisitUs';
import BackButton from '../components/sub-components/buttons/BackButton';


export const getCommon = (Stack) => {
    return [
        <Stack.Screen
            name="AboutUs" 
            component={AboutUs}
            options={{
            title: 'About Us',
            headerStyle: {
                backgroundColor: "#D8D8D8",
                borderBottomRightRadius : 20,
                borderBottomLeftRadius : 20
            },
                headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerBackImage : () =>( <BackButton /> )
        }}
        />,

      <Stack.Screen
        name="VisitUs" 
        component={VisitUs}
        options={{
            title: 'Visit Us',
            headerStyle: {
                backgroundColor: "#D8D8D8",
                borderBottomRightRadius : 20,
                borderBottomLeftRadius : 20
            },
            headerTitleStyle: {
            fontWeight: 'bold',
            },
            headerBackImage : () =>( <BackButton /> )
        }} 
    />
    ];
};