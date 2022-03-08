import React from 'react';
import {View} from 'react-native';
import Spinner from 'react-native-spinkit';
import {COLOR} from 'constant';

export const Loader = (props: any) => {
  return (
    <View style={styles.container}>
      <Spinner
        size={50}
        color={props.color || COLOR.white}
        type="ArcAlt"
        {...props}
      />
    </View>
  );
};

const styles = {
  container: {flex: 1},
};
