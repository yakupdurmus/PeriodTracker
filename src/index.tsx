import React from 'react';
import * as Sentry from '@sentry/react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SENTRY_KEY} from 'config';
import Router from 'router';

Sentry.init({
  dsn: SENTRY_KEY,
});

const Wrapper = () => {
  return (
    <GestureHandlerRootView>
      <Router />
    </GestureHandlerRootView>
  );
};

export default Sentry.wrap(Wrapper);
