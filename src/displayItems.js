/*
 * @Author: kerim selmi 
 * @Date: 2018-06-14 14:39:22 
 * @Last Modified by: kerim selmi
 * @Last Modified time: 2018-06-14 21:48:25
 */

import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import PropTypes from 'prop-types';


export default class DisplayItems extends Component {
    /*  static propTypes = {
        onItemClick: PropTypes.func
    }
    
    static defaultProps = {
        onItemClick: () => Alert.alert('item Clicked'),
    }*/

    /*
    * details 
    */
    _renderElement = (item, itemsStyles) => {
        console.log('item: ' + item)
        let elements = []
        Object.entries(item).forEach(([key, value]) => {
            let delta = new Date().getTime()
            if (key !== 'key')
                elements.push(<Text style={itemsStyles[key]} >{item[key]}</Text>)
        })
        if (true)
            return elements
        return null
    }
    onPress = () => {
        //this.props.onItemClick()
        console.log('clicked');
    }
    render() {
        return (
            <TouchableOpacity onPress={this.onPress} >
                <View style={this.props.itemsStyles.flatview} >
                    {this._renderElement(this.props.item, this.props.itemsStyles)}
                </View>
            </TouchableOpacity>
        )


    }

}