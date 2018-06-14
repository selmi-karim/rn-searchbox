/*
 * @Author: kerim selmi 
 * @Date: 2018-06-13 22:55:47 
 * @Last Modified by: kerim selmi
 * @Last Modified time: 2018-06-14 03:15:32
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
    
    renderElement(item,itemsStyles){
        console.log('item: '+JSON.stringify(item))
        console.log('itemStyles: '+JSON.stringify(itemsStyles))
        /*
        <Text style={this.props.itemsStyles.name} >{item.name}</Text>
                                    <Text style={this.props.itemsStyles.email} >{item.name}</Text>*/
        if(true)
           return <Text>data</Text>;
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
                                    { this.renderElement(item,this.props.itemsStyles) }
                                    
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

