import React from 'react';
import {Text, TextStyle, TextProps} from 'react-native';
import {COLOR} from '../constant';

interface ILabel extends TextProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'normal';
  bold?: boolean;
  style?: TextStyle;
  children?: any;
}

export const Label = (props: ILabel) => {
  const {type, bold, style} = props;
  return (
    <Text
      {...props}
      style={[
        styles.textStyle,
        styles[type || 'normal'],
        bold && styles.bold,
        style,
      ]}>
      {props.children}
    </Text>
  );
};

const styles = {
  textStyle: {
    color: COLOR.lightGrayishCyan,
  },
  h1: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 7,
  },
  h3: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  h4: {
    fontSize: 44,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  normal: {},
};
