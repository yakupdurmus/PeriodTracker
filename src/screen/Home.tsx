import {setUser} from 'actions';
import {Button} from 'common/Button';
import {IRootState} from 'interface/IBase';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const HomeScreen = () => {
  const dispatch = useDispatch();
  let user = useSelector((state: IRootState) => state);

  return (
    <View style={style.container}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => {
          dispatch(setUser('TEST'));
        }}>
        Tıkla
      </Button>
      <Button
        onPress={() => {
          console.log(user);
        }}>
        Tıkla
      </Button>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
});

export default HomeScreen;
