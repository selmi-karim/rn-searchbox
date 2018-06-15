/*
 * @Author: kerim selmi 
 * @Date: 2018-06-13 22:55:47 
 * @Last Modified by: kerim selmi
 * @Last Modified time: 2018-06-15 16:48:46
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
        item: PropTypes.array,
        itemsStyles: PropTypes.object,
        getItem: PropTypes.func,
    }

    static defaultProps = {
        item: [],
        itemsStyles: {},
        getItem: () => { },
    }

    constructor(props) {
        super(props)
        this.itemSelected = this.itemSelected.bind(this)
    }

    itemSelected(item) {
        //Alert.alert('Double Click Succeed') 
        //console.log('itemClicked'+JSON.stringify(item))
        this.props.getItem(item)
        // this.props.onItemClick()
    }

    _renderItem = ({ item }) => (
        <DisplayItems
            key={item.key}
            item={item}
            itemsStyles={this.props.itemsStyles}
            onClick={(item) => this.itemSelected(item)}
        />
    )

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
                        keyExtractor={item => item.key}
                        ListEmptyComponent={this._renderEmpty}
                    />
                </View>
            </ScrollView>
        )
    }
}

