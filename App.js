import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { LifeCount } from './components/LifeCount/LifeCount';
import { LifeCountReverse } from "./components/LifeCount/LifeCountReverse";

export default function App() {
	const [count, setCount] = useState(20);
	const [countRev, setCountRev] = useState(20);
	function resetCounters() {
		setCount(20);
		setCountRev(20);
	}
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<LifeCount count={count} setCount={setCount} />
			<Button title="Reset" onPress={resetCounters} />
			<LifeCountReverse countRev={countRev} setCountRev={setCountRev} />
		</View>
	);
}
