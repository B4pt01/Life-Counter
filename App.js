import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { LifeCount, LifeCountReverse, reset } from './components/LifeCount/LifeCount';
import { Nav } from './components/Nav/Nav';

export default function App() {
	return (
		<>
			<LifeCountReverse />
			<Nav />
			<LifeCount />
		</>
	);
}
