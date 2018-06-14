/*
 * @Author: kerim selmi 
 * @Date: 2018-06-14 14:39:22 
 * @Last Modified by: kerim selmi
 * @Last Modified time: 2018-06-15 00:51:28
 */

import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import PropTypes from 'prop-types';


export default class DisplayItems extends Component {
    constructor(props) {
        super(props);
    }
    /* key={item.key}
     item={item}
     itemsStyles={this.props.itemsStyles}
     onClick= {this.onClick()}*/
    static propTypes = {
        item: PropTypes.object,
        itemsStyles: PropTypes.object,
        onBlick: PropTypes.func
    }

    static defaultProps = {
        item: {},
        itemsStyles: {},
        onBlick: () => { },
    }

    /*
    * details 
    */
    renderElement = (item, itemsStyles) => {
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

    render() {
        return (
            <TouchableOpacity onPress={() => this.props.onBlick(this.props.item)} >
                <View style={this.props.itemsStyles.flatview} >
                    {this.renderElement(this.props.item, this.props.itemsStyles)}
                </View>
            </TouchableOpacity>
        )


    }

}