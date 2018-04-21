// import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// create a component, using JSX
const App = () => (
    <Text>Some Text</Text>
);

// render it to the device
AppRegistry.registerComponent('albums', () => App);