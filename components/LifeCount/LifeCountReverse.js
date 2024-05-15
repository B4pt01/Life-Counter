import { View, Text, Button } from 'react-native';
import { s } from './LifeCount.style';

export function LifeCountReverse({ countRev, setCountRev }) {

    function incrementRev() {
        setCountRev((prevCount) => prevCount + 1);
    }

    function decrementRev() {
        setCountRev((prevCount) => prevCount - 1);
    }

    return (
        <>
            <View style={s.buttonContainerReverse}>
                <Button title="+" onPress={incrementRev} />
                <Text style={s.text}>{countRev}</Text>
                <Button title="-" onPress={decrementRev} />
            </View>
        </>
    );
}