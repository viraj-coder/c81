import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,StyleSheet,TouchableOpacity,KeyboardAvoidingView,Alert } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';
export default class BookRequestScreen extends Component{
    constructor(){
        super();
        this.state={
            userId:firebase.auth().currentUser.email,
            bookName:"",
            reasonToRequest:""
        }
    }
    render(){
        return(
            <View style={{flex:1}}>
<MyHeader title="request book"/>
<KeyBoardAvoidingView style={style.keyBoardStyle}>
    <TextInput style={style.formTextInput} placeholder={"enter book name"}>
        onChangeText={(text)=>{
        this.setState({
            BookName:text
        })})
        value={this.state.bookName}>
    </TextInput>
    <TextInput style={style.formTextInput} placeholder={"reason"}>
    onChangeText={(text)=>{
    this.setState({
    description:text
    })})
    value={this.state.description}>
</TextInput>
</KeyBoardAvoidingView>
  
            </View>
        );
    }
}