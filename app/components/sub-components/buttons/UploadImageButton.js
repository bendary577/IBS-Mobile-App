import React,{useState} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {authorizeRequestWithData} from '../../../services/authentication';
import {uploadUserImage} from '../../../services/api_requests';
//import ImagePicker from 'react-native-image-picker';

let cameraIcon = '../../../assets/icons/Profile/camera.png';

const UploadImageButton =  () => {

    const [image, setImage] = useState(null); 

    //--------------- upload image ---------------------------------------
    const uploadImage = async () => {
     
      /* 
      const options = {
        title: 'Select Photo',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };

      ImagePicker.showImagePicker(options, (response) => {

        console.log('Response = ', response);
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          let photo = {
            uri: response.uri,
            type: response.type,
            name: response.fileName,
          };

          let form = new FormData();
          form.append("ProfilePicture", photo);
          let data = authorizeRequestWithData(uploadUserImage, form);
          console.log("upload image")
        }
        
      });
      */
     console.log("upload image");
    }

    //-------------------------------------- screen ------------------------------------------------
    return (
        <TouchableOpacity /*onPress={()=>{uploadImage()}}*/ >
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
 