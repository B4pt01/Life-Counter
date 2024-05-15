import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { s } from './LifeCount.style';

export function LifeCount({ count, setCount }) {


	function increment() {
		setCount((prevCount) => prevCount + 1);
	}

	function decrement() {
		setCount((prevCount) => prevCount - 1);
	}

	return (
		<>
			<View style={s.buttonContainer}>
				<Button title="+" onPress={increment} />
				<Text style={s.text}>{count}</Text>
				<Button title="-" onPress={decrement} />
			</View>
		</>
	);
}
