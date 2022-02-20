import * as Sentry from '@sentry/react-native';
import App from './App';

Sentry.init({
  dsn: 'https://b299ec7a094146b0b21e7521d30d660f@o879340.ingest.sentry.io/6218010',
});
export default Sentry.wrap(App);
