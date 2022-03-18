import React from 'react';
import * as Sentry from '@sentry/react-native';
import {SENTRY_KEY} from '../config';
import Router from 'router';

Sentry.init({
  dsn: SENTRY_KEY,
});

const Wrapper = () => {
  return <Router />;
};

export default Sentry.wrap(Wrapper);
