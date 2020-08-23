import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import {Searchbar} from 'react-native-elements';

export default class CollegeSearchScreen extends React.Component{
    constructor(){
        super()
        this.state={
            search:""
        }
    }

    UpdateSearch=search=>{
        this.setState({search})
    }

    componentDidMount(){
        this.UpdateSearch()
    }


    render(){
        return(
            <View>
             <Searchbar
             placeholder="Search here..."
             value={this.state.search}
             />   
            </View>    
        )
    }
}