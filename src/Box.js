/*
 * @Author: kerim selmi 
 * @Date: 2018-06-13 22:55:47 
 * @Last Modified by: kerim selmi
 * @Last Modified time: 2018-06-14 14:45:39
 */
import React, { Component } from 'react'
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'
import DisplayItems from './displayItems'

export default class Box extends Component {
    static propTypes = {
        data: PropTypes.array,
        input: PropTypes.string,
    }

    static defaultProps = {
        data: [],
        input: '',
    }

    _renderElement = (item, itemsStyles) => {
        let elements = []
        Object.entries(item).forEach(([key, value]) => {
            let delta = new Date().getTime()
            if (key !== 'key')
                elements.push(<Text  style={itemsStyles[key]} >{item[key]}</Text>)
        })
        if (true)
            return elements
        return null
    }
    _generateUniqueID = () => {
        return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)+ Date.now().toString()).toUpperCase();
    }
    _keyExtractor = (item, index) => {
        return index.toString(













            
        )
    }
    _onPressItem = (item) => {
        // updater functions are preferred for transactional updates
        console.log('click: ' + JSON.stringify(item))
    }
    _renderItem = ({ item }) => {
        return (
            <View style={this.props.itemsStyles.flatview} >
                {this._renderElement(item, this.props.itemsStyles)}
            </View>)

    }

    /** show when no result */
    _renderEmpty = () => (
        <View style={{ height: 40, alignItems: "center", justifyContent: "center" }}>
            <Text>No result</Text>
        </View>
    )


    render() {
        return (
            <ScrollView>
                <View >
                    <FlatList
                        data={this.props.data}
                        showsVerticalScrollIndicator={false}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                        ListEmptyComponent={this._renderEmpty}

                    />
                </View>
            </ScrollView>
        )
    }
}

