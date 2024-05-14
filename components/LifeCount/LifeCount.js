import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { s } from './LifeCount.style';

export function LifeCount() {
	const [count, setCount] = useState(20);

	function increment() {
		setCount(count + 1);
	}

	function decrement() {
		setCount(count - 1);
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

export function LifeCountReverse() {
	const [count, setCount] = useState(20);

	function increment() {
		setCount(count + 1);
	}

	function decrement() {
		setCount(count - 1);
	}

	return (
		<>
			<View style={s.buttonContainerReverse}>
				<Button title="+" onPress={increment} />
				<Text style={s.text}>{count}</Text>
				<Button title="-" onPress={decrement} />
			</View>
		</>
	);
}

// export function Reset() {
// 	setCount(20);
// 	<Button title="lll" onPress={console.log('test')} />;
// }
