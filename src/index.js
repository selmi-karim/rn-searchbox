/*
 * @Author: kerim selmi 
 * @Date: 2018-06-13 22:56:02 
 * @Last Modified by: kerim selmi
 * @Last Modified time: 2018-06-15 01:15:50
 */
import React, { Component } from 'react';
import {
  Platform,
  View,
  TextInput,
  TouchableOpacity,
  Animated,
  ScrollView
} from 'react-native';
import Box from './box'
import styles from './styles'
import StringMatching from './stringMatching'
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { filter, some, includes } from 'lodash/collection';
import { debounce } from 'lodash/function';

const INITIAL_TOP = -60;

export default class Search extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    data: PropTypes.array,
    itemsStyles: PropTypes.object,
    placeholder: PropTypes.string,
    handleChangeText: PropTypes.func,
    handleSearch: PropTypes.func,
    handleResults: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onBack: PropTypes.func,
    onX: PropTypes.func,
    backButton: PropTypes.object,
    backButtonAccessibilityLabel: PropTypes.string,
    closeButton: PropTypes.object,
    closeButtonAccessibilityLabel: PropTypes.string,
    backCloseSize: PropTypes.number,
    fontSize: PropTypes.number,
    heightAdjust: PropTypes.number,
    backgroundColor: PropTypes.string,
    iconColor: PropTypes.string,
    textColor: PropTypes.string,
    selectionColor: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    animate: PropTypes.bool,
    animationDuration: PropTypes.number,
    showOnLoad: PropTypes.bool,
    hideX: PropTypes.bool,
    iOSPadding: PropTypes.bool,
    iOSPaddingBackgroundColor: PropTypes.string,
    iOSHideShadow: PropTypes.bool,
    clearOnShow: PropTypes.bool,
    clearOnHide: PropTypes.bool,
    clearOnBlur: PropTypes.bool,
    focusOnLayout: PropTypes.bool,
    autoCorrect: PropTypes.bool,
    autoCapitalize: PropTypes.string,
    keyboardAppearance: PropTypes.string,
    fontFamily: PropTypes.string,
    allDataOnEmptySearch: PropTypes.bool,
    editable: PropTypes.bool
  };

  static defaultProps = {
    onClick: () => { },
    data: [],
    placeholder: 'Search',
    backButtonAccessibilityLabel: 'Navigate up',
    closeButtonAccessibilityLabel: 'Clear search text',
    heightAdjust: 0,
    backgroundColor: 'white',
    iconColor: 'gray',
    textColor: 'gray',
    selectionColor: 'lightskyblue',
    placeholderTextColor: 'lightgray',
    animate: true,
    animationDuration: 200,
    showOnLoad: false,
    hideX: false,
    iOSPadding: true,
    iOSPaddingBackgroundColor: 'transparent',
    iOSHideShadow: false,
    clearOnShow: false,
    clearOnHide: true,
    clearOnBlur: false,
    focusOnLayout: true,
    autoCorrect: true,
    autoCapitalize: 'sentences',
    keyboardAppearance: 'default',
    fontFamily: 'System',
    allDataOnEmptySearch: false,
    backCloseSize: 28,
    fontSize: 20,
    editable: true
  };

  constructor(props) {
    super(props);
    this.state = {
      dataToBox: props.data,
      input: '',
      show: props.showOnLoad,
      top: new Animated.Value(
        props.showOnLoad ? 0 : INITIAL_TOP + props.heightAdjust
      )
    };
  }



  show = () => {
    const { animate, animationDuration, clearOnShow } = this.props;
    if (clearOnShow) {
      this.setState({ input: '' });
    }
    this.setState({ show: true });
    if (animate) {
      Animated.timing(this.state.top, {
        toValue: 0,
        duration: animationDuration,
        useNativeDriver: true,
      }).start();
    } else {
      this.setState({ top: new Animated.Value(0) });
    }
  };


  _handleX = () => {
    const { onX } = this.props;
    this._clearInput();
    if (onX) onX();
  };

  _handleBlur = () => {
    const { onBlur, clearOnBlur } = this.props;
    if (onBlur) {
      onBlur();
    }
    if (clearOnBlur) {
      this._clearInput();
    }
  };

  _clearInput = () => {
    this.setState({ input: '' });
    this._onChangeText('');
  };
  /** we would filter the JSON array according to given value pass as argument. 
   * After filtering data we would set the newly data in dataSource state. */

  _onChangeText = input => {
    //TODO add string matching algorithm 
    const { data } = this.props;
    const newData = data.filter(function (item) {
      //console.log('item: '+JSON.stringify(item))
      const itemData = item.name.toUpperCase();
      const inputData = input.toUpperCase()
      return itemData.indexOf(inputData) > -1
    })
    this.setState({ input: input, dataToBox: newData });
  };

  itemResponse(item) {
    this.props.onClick(item)
  }


  render = () => {
    const {
      placeholder,
      heightAdjust,
      backgroundColor,
      iconColor,
      textColor,
      selectionColor,
      placeholderTextColor,
      onBack,
      hideX,
      iOSPadding,
      iOSPaddingBackgroundColor,
      iOSHideShadow,
      onSubmitEditing,
      onFocus,
      focusOnLayout,
      autoCorrect,
      autoCapitalize,
      keyboardAppearance,
      fontFamily,
      backButton,
      backButtonAccessibilityLabel,
      closeButton,
      closeButtonAccessibilityLabel,
      backCloseSize,
      fontSize,
      editable
    } = this.props;


    return (
      <ScrollView>
        <Animated.View
          style={[
            styles.container,
            {
              transform: [
                {
                  translateY: this.state.top
                }
              ],
              shadowOpacity: iOSHideShadow ? 0 : 0.7
            }
          ]}>
          {this.state.show && (
            <View style={[styles.navWrapper, { backgroundColor }]}>
              {Platform.OS === 'ios' &&
                iOSPadding && <View style={{ height: 20, backgroundColor: iOSPaddingBackgroundColor }} />}
              <View
                style={[
                  styles.nav,
                  { height: (Platform.OS === 'ios' ? 52 : 62) + heightAdjust }
                ]}>

                <TextInput
                  ref={ref => (this.textInput = ref)}
                  onLayout={() => focusOnLayout && this.textInput.focus()}
                  style={[
                    styles.input,
                    {
                      fontSize: fontSize,
                      color: textColor,
                      fontFamily: fontFamily,
                      marginLeft: 10,
                      marginTop: Platform.OS === 'ios' ? heightAdjust / 2 + 10 : 0
                    }
                  ]}
                  selectionColor={selectionColor}
                  onChangeText={input => this._onChangeText(input)}
                  onSubmitEditing={() =>
                    onSubmitEditing ? onSubmitEditing() : null}
                  onFocus={() => (onFocus ? onFocus() : null)}
                  onBlur={this._handleBlur}
                  placeholder={placeholder}
                  placeholderTextColor={placeholderTextColor}
                  value={this.state.input}
                  underlineColorAndroid="transparent"
                  returnKeyType="search"
                  autoCorrect={autoCorrect}
                  autoCapitalize={autoCapitalize}
                  keyboardAppearance={keyboardAppearance}
                  editable={editable}
                />
                <TouchableOpacity
                  accessible={true}
                  accessibilityComponentType="button"
                  accessibilityLabel={closeButtonAccessibilityLabel}
                  onPress={
                    hideX || this.state.input === '' ? null : this._handleX
                  }>
                  {closeButton ? (
                    <View style={{ width: backCloseSize, height: backCloseSize }}>
                      {closeButton}
                    </View>
                  ) : (
                      <Icon
                        name={'close'}
                        size={backCloseSize}
                        style={{
                          color:
                            hideX || this.state.input == ''
                              ? backgroundColor
                              : iconColor,
                          padding: heightAdjust / 2 + 10
                        }}
                      />
                    )}
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Animated.View>
        <View style={{ marginTop: 50 }}>
          <Box
            data={this.state.dataToBox}
            itemsStyles={this.props.itemsStyles}
            getItem={(item) => this.itemResponse(item)}
          />
        </View>
      </ScrollView>

    );
  };
}
