import React, { useEffect } from "react";
import { View, Button, Text } from "react-native";
import { AppState } from "react-native";

const Screen2 = ({ navigation }) => {
    useEffect(() => {
        const listener = () => {
            console.log('Got focus');
        }
        const subscription = AppState.addEventListener('change', listener);
        console.log('effect, subscription = ' + subscription);
        return () => {
            console.log('Before remove');
            console.log('subscription = ' + subscription);
            console.log('subscription.remove = ' + subscription.remove);
            subscription.remove();
            //AppState.removeEventListener('change', listener);
        }
    }, [navigation]);

    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Screen #2</Text>
            </View>
            <Button title="Back" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default Screen2;