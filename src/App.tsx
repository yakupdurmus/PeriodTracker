import React, {useCallback, useEffect} from 'react';
import * as Sentry from '@sentry/react-native';
import {SENTRY_KEY} from '../config';
import Router from 'router';
import I18n from 'i18n';
import {getLanguage} from 'helper';

//Redux
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from 'reducers';
import {setLanguage} from 'actions';
import {LANGUAGE} from 'interface/ISettings';

Sentry.init({
  dsn: SENTRY_KEY,
});

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  const selectLanguage = useCallback(async () => {
    const language = await getLanguage();
    I18n.locale = language;
    store.dispatch(setLanguage(language as LANGUAGE));
  }, [store]);

  useEffect(() => {
    selectLanguage();
  }, [selectLanguage]);

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default Sentry.wrap(App);
