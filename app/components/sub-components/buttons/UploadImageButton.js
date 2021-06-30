import React,{useState} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {authorizeRequestWithData} from '../../../services/authentication';
import {uploadUserImage} from '../../../services/api_requests';
//import ImagePicker from 'react-native-image-picker';
//import DocumentPicker from 'react-native-document-picker';
import * as ImagePicker from 'expo-image-picker';

let cameraIcon = '../../../assets/icons/Profile/camera.png';

const UploadImageButton =  (props) => {

    //const [image, setImage] = useState(null); 

      const getImagePermission = async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }else{
            uploadImage();
          }
        }
      }


    const uploadImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        props.setImage(result.uri);
      }
    };

    //-------------------------------------- screen ------------------------------------------------
    return (
        <TouchableOpacity onPress={()=>{getImagePermission()}} >
            <Image style={styles.icon} source={require(cameraIcon)} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon : {
        width : 30,
        height : 30
    },
})

export default UploadImageButton;
 