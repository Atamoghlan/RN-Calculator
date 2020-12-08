/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//import block

import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// const block (like a CSS)
const styles = StyleSheet.create({
bigBlue: {
color: 'blue',
fontWeight: 'bold',
fontSize: 30,
},
red: {
color: 'red',
fontSize: 0,
},
});
export default class App extends Component {
GetButton = () =>{
console.log("Button pressed")
}
render() {

//return block

return (

<View>
<Text style={styles.red}>just Hello</Text>
<Text style={styles.bigBlue}>just bigBlue</Text>
<Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
<Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
<Button title="Clickme" onPress={this.GetButton}/>

</View>

);

//end of return block

} } //end of export default class