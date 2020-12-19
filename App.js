
import React, { Component } from 'react';

import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export default class App extends Component {
    dotExist = false;
    equalWork = false;
    isEqualExist = false;
    dividedByZero = false;
    isForbidden = false;
    text = ''


    Booleans = () => {
    this.dotExist = false;
    this.equalWork = false;
    this.isEqualExist = false;
    this.dividedByZero = false;
    this.isForbidden = false;
    this.text = ''}
    
constructor(){
    super()
    this.state = {
        resultText: ""
    }
}
operations = (button) => {
    let text = this.state.resultText
    if(text[text.length-1] === '+' || text[text.length-1] === '-' || text[text.length-1] === '/' || text[text.length-1] === '*'){
    this.dotExist = false;
    text = this.state.resultText.split('')
    text.pop();
    text = text.join('');
       this.setState({
           resultText: text+button
       })
       this.equalWork = false;
    }
    else if (text === '' && button === '-'){
        this.setState({
            resultText: text+button
        })
        this.equalWork = false;
    }
    else if (text !== '' && !this.isForbidden)
    {
        console.log('5')
        this.setState({
            resultText: text+button
        })
        this.equalWork = false;
    }
}
buttons = (button) => {
let text = this.state.resultText
switch(text[text.length-2]){
    case '+':
    case '-':
    case '*':
    case '/':
        if (text[text.length-1] == 0){
        text = this.state.resultText.split('')
text.pop();
text = text.join('');
this.setState({
    resultText: text+button
})
this.equalWork = true;
}
}
if (text[0] == 0 && button != '.' && text[1] != '+' && text[1] != '-' && text[1] != '/' && text[1] != '*'){
    console.log('if')
    text = this.state.resultText.split('')
    text.shift();
    text = text.join('');
    this.setState({
        resultText: text+button.toString()
    })
    this.equalWork = true;
}
else if(button === '.' && this.dotExist === false){
    console.log('2')
    if(this.isEqualExist){
        let text = ''
        this.setState({
            resultText: text + button.toString()
        })
        this.isEqualExist = false
        this.dotExist = true;
    this.equalWork = false;
    }
    else{
    this.setState({
        resultText: text+button.toString()
        })
    this.dotExist = true;
    this.equalWork = false;
    }
}
else if(button != '.'){
    if (this.isEqualExist){
        console.log('comes in isEqualExist')
        let text = ''
        this.setState({
            resultText: text + button.toString()
        })
        this.isEqualExist = false
        this.isForbidden=false
    }
    else {
    console.log('else if')
    this.setState({
        resultText: this.state.resultText + button.toString()
    })
    this.equalWork = true;
}
}
}
divideOnZero = () => {
    let text = this.state.resultText;
    for (let i = 0; i < text.length; i ++)
    {
        if(text[i] == '/' && text[i+1] == '0' && text[i+2] != '.'){
          return this.isForbidden = true;
        }
        else if(text[i] == '/' && text[i+1] == '.' && text[i+2] == '0'){
            return this.isForbidden = true;
        }
    }
}
calculateResult = (button) =>{
    if(this.state.resultText !== '' && this.equalWork){
        let text = Number(eval(this.state.resultText).toFixed(4))
        this.setState({
            resultText: text.toString()
    })
    if (this.divideOnZero()){
        this.setState({
            resultText: "Forbidden Action"
        })
        this.equalWork = false;

    }
}
}
OnClick = (button) => {
    switch(button){
        case '=':
            this.dotExist = false;
            this.calculateResult(button)
            this.isEqualExist = true;
        break;
        case '+':
        case '-':
        case'/':
        case'*':
            console.log('case of +-*/')
            this.isEqualExist = false
            this.operations(button)
            this.dotExist = false;
            break;
        case '<-':
            if(!this.isForbidden){
            let text = this.state.resultText.split('')
            let dot = text.pop()
            console.log(text)
            if(dot==='.'){
                this.dotExist = false
            }
            this.setState({
                resultText: text.join('')
            })
        }
        else {
            this.Booleans();
            this.setState({
                resultText: ''
                })
            }
            break;
        case 'C':
            this.Booleans();
            this.setState({
                resultText: ''
            })
            break;
        default:
            this.buttons(button)
            break;
        }
}
render() {
const buttonsArray = ['C','<-','/',7,8,9,'*',4,5,6,'-',1,2,3,'+',0,'.','='];
return (
<View style={styles.Container}>
    <View style={styles.Result}>
        <Text style={styles.resultText}>{this.state.resultText}</Text>
    </View>
    <View style={{flexDirection: 'row',margin: 5, flexWrap: 'wrap', width: '100%'}}>
     {buttonsArray.map((item, index) => <TouchableOpacity key={index} onPress={() => this.OnClick(item)} style={{width: item == 0 || item == 'C'? '48%':'23.5%' , height: '18.2%' , backgroundColor: item == '*' || item == '-' || item == '+' || item == '=' || item == '/' || item == 'C' || item == '<-'? '#FFA500' : '#808080' , justifyContent: 'center', alignItems: 'center', margin: 2, borderRadius: 50}}><Text style={{color: 'white', fontSize: 60}}>{item}</Text></TouchableOpacity>)}
    </View>
</View>
);
} } 
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'black'
    },
    resultText:{
        margin: 10,
        fontSize: 75,
        color : 'white',
    },
    Result: {
        
        height: '30%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: 'black'
    },
    });