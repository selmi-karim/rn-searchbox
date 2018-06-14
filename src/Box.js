/*
 * @Author: kerim selmi 
 * @Date: 2018-06-13 22:55:47 
 * @Last Modified by: kerim selmi
 * @Last Modified time: 2018-06-14 03:03:30
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

    render() {
        console.log('styles: ' + JSON.stringify(this.props.itemsStyles.name))
        return (
            <ScrollView>
                <View >
                    <FlatList
                        data={this.props.data}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => {

                            return (
                                <View style={this.props.itemsStyles.flatview}>
                                    <Text style={{ fontSize: 18 }} >{item.name}</Text>
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

