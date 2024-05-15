import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { LifeCount, LifeCountReverse, Reset } from './components/LifeCount/LifeCount';
import { Nav } from './components/Nav/Nav';

export default function App() {
	function Reset() {
		setCount(20);
		setCountRev(20);
		console.log('test');
	}
	return (
		<>
			<LifeCountReverse props />
			<Button title="lll" onPress={Reset} />
			<LifeCount />
		</>
	);
}
