import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { LifeCount, LifeCountReverse, Reset } from './components/LifeCount/LifeCount';
import { Nav } from './components/Nav/Nav';

export default function App() {
	function Reset() {
		const [count, countRev, setCount, setCountRev] = useState(20);
		setCount(20);
		setCountRev(20);
		console.log('test');
	}
	return (
		<>
			<LifeCountReverse CountRev={countRev} />
			<Button title="lll" onPress={Reset} />
			<LifeCount Count={count} />
		</>
	);
}
