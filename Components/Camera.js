import React from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { useCamera } from 'react-native-camera-hooks'
import RNFS from 'react-native-fs';
import CustomButton from './utils/CustomButton';

export default function Camera({navigation}) {

    const [{ cameraRef }, {takePicture}] = useCamera(null);
    const options = {base64: true, pauseAfterCapture: true};

    /*const ConfirmFunc = () => {
        Alert.alert(
            "Analyize this photo?", "Click confirm or cancel",
            [
                {text: "Confirm", onPress: () => console.log("Done")},
                {text: "Cancel", onPress: () => cameraRef.resumePreview()}
            ]
        )
      };*/

    const captureHandle = async () => {
        try {
            const data = await takePicture(options);
            console.log(data.base64);
            //await ConfirmFunc();
            navigation.navigate('Tabs');
            //wait for info from api
            //pass on to confirm view


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.body}>
            <RNCamera ref={cameraRef} type={RNCamera.Constants.Type.back} style={styles.preview}>

            <CustomButton
                    title="Capture"
                    color='#dddddd'
                    onPressFunction={() => captureHandle()}
                />
            </RNCamera>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    preview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
});
