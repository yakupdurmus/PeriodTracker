import React from 'react';
import {TextInput, View} from 'react-native';
import {Label} from './Label';
import {TextInputMask} from 'react-native-masked-text';
import {COLOR, INPUTMASK} from '../constant';

interface InputProps {
  require?: any;
  title?: any;
  error?: any;
  errorMessage?: any;
  contentStyle?: any;
  style?: any;
  isPhone?: any;
  value?: any;
  onChangeText?: any;
}
export const Input = (props: InputProps) => {
  const {
    require,
    title,
    error,
    errorMessage,
    contentStyle,
    style,
    isPhone,
    value,
    onChangeText,
  } = props;
  return (
    <View style={[styles.content, contentStyle]}>
      {title && (
        <Label style={styles.titleStlye}>
          {title}
          {require && <Label style={styles.requireStar}>*</Label>}
        </Label>
      )}
      {isPhone ? (
        <TextInputMask
          {...props}
          type={'custom'}
          options={INPUTMASK}
          keyboardType="number-pad"
          value={value}
          onChangeText={onChangeText}
          style={styles.phoneInput}
          placeholder="Telefon Numarası"
          placeholderTextColor={COLOR.lightGray}
        />
      ) : (
        <TextInput
          {...props}
          placeholderTextColor={COLOR.lightGray}
          style={[
            styles.textInput,
            error ? styles.errorBorderStyle : {},
            style,
          ]}
        />
      )}
      {errorMessage ? (
        error ? (
          <Label style={styles.errorTextStyle}>{errorMessage}</Label>
        ) : (
          <Label />
        )
      ) : null}
    </View>
  );
};

const styles = {
  content: {},
  errorBorderStyle: {
    borderBottomWidth: 1,
    borderColor: 'red',
  },
  errorTextStyle: {
    fontSize: 12,
    opacity: 0.6,
    color: 'red',
  },
  textInput: {
    height: 40,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderColor: COLOR.lightGray,
    borderRadius: 5,
  },
  titleStlye: {},
  requireStar: {
    color: 'red',
  },
  phoneInput: {
    borderBottomWidth: 1,
    borderColor: COLOR.lightGray,
    padding: 10,
    fontSize: 14,

    height: 40,
    paddingLeft: 10,
    borderRadius: 5,
  },
};
