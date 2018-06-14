/*
 * @Author: kerim selmi 
 * @Date: 2018-06-13 22:55:56 
 * @Last Modified by: kerim selmi
 * @Last Modified time: 2018-06-14 03:03:43
 */

import { StyleSheet, Dimensions, Platform } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 10,
        position: 'absolute',
        elevation: 2,
        shadowRadius: 5
    },
    navWrapper: {
        width: Dimensions.get('window').width
    },
    nav: {
        ...Platform.select({
            android: {
                borderBottomColor: 'lightgray',
                borderBottomWidth: StyleSheet.hairlineWidth
            }
        }),
        flex: 1,
        flexBasis: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        ...Platform.select({
            ios: { height: 30 },
            android: { height: 50 }
        }),
        width: Dimensions.get('window').width - 120
    }
});
module.exports = styles