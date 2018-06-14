/*
 * @Author: kerim selmi 
 * @Date: 2018-06-13 22:55:47 
 * @Last Modified by: kerim selmi
 * @Last Modified time: 2018-06-14 03:41:26
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    ScrollView
} from 'react-native';
import PropTypes from 'prop-types';

export default class Box extends Component {
    static propTypes = {
        data: PropTypes.array,
        input: PropTypes.string,
    };

    static defaultProps = {
        data: [],
        input: '',
    };

    renderElement(item, itemsStyles) {
        //console.log('item: ' + JSON.stringify(item))
        //console.log('itemStyles: ' + JSON.stringify(itemsStyles))
        /*
        <Text style={this.props.itemsStyles.name} >{item.name}</Text>
                                    <Text style={this.props.itemsStyles.email} >{item.name}</Text>*/

        console.log('0: ' + Object.keys(item))
        console.log('1: ' + item['name'])
        Object.entries(item).forEach(([key, value]) => { 
            console.log(`${key}: ${value}`);
            return     <Text style={itemsStyles[{key}]} >{item[{key}]}</Text>
        });
    if(true)
    return(
                <View>
    <Text style={itemsStyles.name} >{item.name}</Text>
    <Text style={itemsStyles.email} >{item.email}</Text>
                </View >
            );
return null;
    }

render() {
    return (
        <ScrollView>
            <View >
                <FlatList
                    data={this.props.data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <View style={this.props.itemsStyles.flatview}>
                                {this.renderElement(item, this.props.itemsStyles)}
                            </View>
                        )
                    }
                    }
                    keyExtractor={item => item.email}
                />
            </View>
        </ScrollView>
    );
}
}

