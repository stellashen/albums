// import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// create a component, using JSX
const App = () => (
    <Header />
);

// render it to the device
AppRegistry.registerComponent('albums', () => App);