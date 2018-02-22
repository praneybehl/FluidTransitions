import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { FluidNavigator, Transition } from './../lib/';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 80,
	},
	screen: {
		flex: 1,
		flexDirection: 'row',
		padding: 20,
    },
    circle: {
		width: 40,
		height: 40,
        borderRadius: 40,
        margin: 10,
		backgroundColor: '#EF4444'
	},
	text: {
		textAlign: 'center',
		paddingBottom: 40,
	},
	text2: {
		backgroundColor: '#FF0000',
		padding: 20,
	}
});

const InitialScreen = (props) => (
		<View style={styles.container}>
			<Transition appear='horizontal'>
				<Text style={styles.text}>Click toggle to see appearance animations.</Text>
			</Transition>
			<Transition shared='button' appear='top'>
				<Button title='Toggle' onPress={() => props.navigation.navigate('screen')} />
			</Transition>
		</View>
);

const Screen = (props) => (
	<View style={styles.container}>
        <Transition appear='scale'>
		    <Text style={styles.text2}>Screen</Text>
        </Transition>
		<View style={styles.screen}>
            <Transition appear='left'>
				<View style={styles.circle}/>
            </Transition>
            <Transition appear='left'>
                <View style={styles.circle}/>
            </Transition>
            <Transition appear='right'>
                <View style={styles.circle}/>
            </Transition>
			<Transition appear='right'>
                <View style={styles.circle}/>
            </Transition>
		</View>
        <Transition shared='button'>
			<Button title='Toggle' onPress={() => props.navigation.goBack()} />
        </Transition>
	</View>
);

const Navigator = FluidNavigator({
    home: { screen: InitialScreen },
    screen: { screen: Screen },
});

export default () => (
	<Navigator />
);