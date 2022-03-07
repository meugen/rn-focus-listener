import React from 'react';
import { View, Button, Text } from 'react-native';

const Screen1 = ({ navigation }) => {
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Screen #1</Text>
            </View>
            <Button title='Next' onPress={() => navigation.navigate('Screen2')} />
        </View>
    );
}

export default Screen1;