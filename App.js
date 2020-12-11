import React, { Component } from 'react';

import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export default class App extends Component {

constructor(){
    super()
    this.state = {}
}

setNumber = (button) => {
    console.log(button);
}

render() {
/*let rows = []
let nums = [[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
for (let i=0; i<=3; i++){
    let row = []
    for(let j=0; j <= 2; j++){
        row.push(<TouchableOpacity style= {styles.btn}>
            <Text style={styles.btntext}>{nums[i][j]}</Text>
        </TouchableOpacity>)
    }
    rows.push(<View style={styles.row}>{row}</View>)
}*/

const buttonsArray = ['C','+/-','%','/',7,8,9,'x',4,5,6,'-',1,2,3,'+',0,'.','='];
return (
<View style={styles.Container}>
    <View style={styles.Result}>
        <Text style={styles.resultText}>10/5</Text>
    </View>
    <View style={{flexDirection: 'row',margin: 5, flexWrap: 'wrap', width: '100%'}}>
     {buttonsArray.map((item, index) => <TouchableOpacity onPress={() => this.setNumber(item)} style={{width: index === 16? '48%':'23.5%' , height: '18.2%' , backgroundColor: index === 3 || index === 0|| index === 1|| index === 2|| index === 7 || index === 11 || index === 15|| index === 18? '#FFA500' : '#808080' , justifyContent: 'center', alignItems: 'center', margin: 2, borderRadius: 50}}><Text style={{color: 'white', fontSize: 60}}>{item}</Text></TouchableOpacity>)}
    </View>
        {/* <View style={styles.Result}>
            <Text style={styles.resultText}>10/5</Text>
        </View>
        <View style={styles.Calculation}>
            <Text style={styles.calculationText}>50</Text>
        </View>
        <View style={styles.Buttons}>
            <View style={styles.Numbers}>
                <View style = {styles.Row}>

                </View>
                <View style = {styles.Row}>
                <TouchableOpacity style={styles.btn}>
                    <Text style = {styles.btntext} >.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style = {styles.btntext} >0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style = {styles.btntext} >=</Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.Operations}>
                {ops}      
            </View>
        </View> */}
</View>

);

} } 
// const block (like a CSS)
const styles = StyleSheet.create({

    Container: {
        flex: 1,
        backgroundColor: 'black'
    },
    resultText:{
        margin: 10,
        fontSize: 55,
        color : 'white',
    },
    Result: {
        
        height: '30%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: '#8B8B8B'
    },
    });