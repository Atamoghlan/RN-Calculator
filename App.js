
import React, { Component } from 'react';

import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export default class App extends Component {
    firstNUm = 0.0;
    secondNum = 0.0;
    mathSign = false;
    str = '';
    operation = 0;
    zeroExist = false;
    dotExist = true;
    plusExist = false;
    minusExist = false;
    divisionExist = false;
    multiplyExist = false
    numExist = false;
    nulAndDot = false
    equalWork = false
    dividedByZero = false
    text = ''


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
    }
    else if (text === '' && button === '-'){
        this.setState({
            resultText: text+button
        })
    }
    else if (text !== '')
    {
        this.setState({
            resultText: text+button
        })
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
}
}
if (text[0] == 0){
    text = this.state.resultText.split('')
    text.shift();
    text = text.join('');
    this.setState({
        resultText: text+button
    })
    
}
else if(button == '.' && !this.dotExist){
    this.setState({
        resultText: text+button
    })
    this.dotExist = true;
}
else if(button != '.'){
    this.setState({
        resultText: this.state.resultText+button
    })
    this.dotExist = true
}


            // if(button === '.' && this.dotExist === false && this.numExist === true
            //     && this.zeroExist === false){
            //         this.setState({
            //             resultText: this.state.resultText+button
            //         })
            //         this.dotExist = true
            //         this.numExist = true
            //     }
            // else if (button === '.' && this.dotExist === false && this.numExist === true && this.zeroExist === true){
            //         this.setState({
            //             resultText: this.state.resultText+button
            //         })
            //         this.dotExist = true;
            //         this.numExist = false
            //         this.zeroExist = false
            //         this.nulAndDot = true   
            //     }
            // else if (button === '0' && this.zeroExist === false){
            //     this.setState({
            //         resultText: this.state.resultText+button
            //     })
            //         this.zeroExist = true;
            //         this.numExist = true;
            //         this.dotExist = false;
            // }
            // else if (button !== '.' && this.nulAndDot === true){
            //     this.setState({
            //         resultText: this.state.resultText+button
            //     })
            //     this.numExist = true
            //     this.dotExist = false
            // }
            // else if (button !== '.' && button !== 0){
            //     this.setState({
            //         resultText: this.state.resultText+button
            //     })
            //     this.numExist = true
            //     this.mathSign = false
            // }
}
calculateResult = (button) =>{
    if(this.state.resultText !== ''){
        this.setState({
            resultText: Number(eval(this.state.resultText).toFixed(4))
    })
}
}

OnClick = (button) => {
    switch(button){
        case '=':
            
            this.calculateResult(button)
        break;
        case '+':
        case '-':
        case'/':
        case'*':
            console.log('case of +-*/')
            this.operations(button)
            break;
        case '<-':
            let text = this.state.resultText.split('')
            text.pop()
            this.setState({
                resultText: text.join('')
            })
            break;
        case 'C':
            this.text = ''
            this.setState({
                resultText: this.text
            })
            break;
        default:
            this.buttons(button)
            break;
        }
    /*this.setState({
        resultText: this.state.resultText+button})*/
}

render() {
const buttonsArray = ['C','<-','/',7,8,9,'*',4,5,6,'-',1,2,3,'+',0,'.','='];
return (
<View style={styles.Container}>
    <View style={styles.Result}>
        <Text style={styles.resultText}>{this.state.resultText}</Text>
    </View>
    <View style={{flexDirection: 'row',margin: 5, flexWrap: 'wrap', width: '100%'}}>
     {buttonsArray.map((item, index) => <TouchableOpacity onPress={() => this.OnClick(item)} style={{width: item == 0 || item == 'C'? '48%':'23.5%' , height: '18.2%' , backgroundColor: item == '*' || item == '-' || item == '+' || item == '=' || item == '/' || item == 'C' || item == '<-'? '#FFA500' : '#808080' , justifyContent: 'center', alignItems: 'center', margin: 2, borderRadius: 50}}><Text style={{color: 'white', fontSize: 60}}>{item}</Text></TouchableOpacity>)}
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