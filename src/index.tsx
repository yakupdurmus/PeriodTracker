import * as Sentry from '@sentry/react-native';
import {SENTRY_KEY} from '../config';
import Router from './router';

Sentry.init({
  dsn: SENTRY_KEY,
});

export default Sentry.wrap(Router);
