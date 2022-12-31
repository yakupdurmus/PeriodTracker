// import React from 'react';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
// import 'react-native-gesture-handler/jestSetup';
// import thunk from 'redux-thunk';
// import {View as mockView, Animated} from 'react-native';
// import creditcardutils from 'creditcardutils';
// import axiosResponses, {diverseResponses} from './axiosResponses';
// import '@testing-library/jest-native/extend-expect';
// import mockSocketOperationResponses from './constants/mockSocketOperationResponses';
// require('react-native-reanimated/lib/reanimated2/jestUtils').setUpTests();

// const mock = jest.fn(() => ({
//   delay: () => jest.fn(),
//   interpolate: () => jest.fn(),
//   timing: () => jest.fn(),
//   start: () => jest.fn(),
//   stop: () => jest.fn(),
//   reset: () => jest.fn(),
// }));

// Animated.parallel = mock;
// Animated.loop = mock;

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

// jest.mock('@react-native-firebase/app', () => ({
//   messaging: jest.fn(() => ({
//     hasPermission: jest.fn(() => Promise.resolve(true)),
//     subscribeToTopic: jest.fn(),
//     unsubscribeFromTopic: jest.fn(),
//     requestPermission: jest.fn(() => Promise.resolve(true)),
//     getToken: jest.fn(() => Promise.resolve('myMockToken')),
//   })),
//   notifications: jest.fn(() => ({
//     onNotification: jest.fn(),
//     onNotificationDisplayed: jest.fn(),
//   })),
//   analytics: jest.fn(() => ({
//     logEvent: jest.fn(),
//   })),
// }));

// jest.mock('@react-native-firebase/analytics', () =>
//   jest.fn(() => ({
//     logEvent: jest.fn(() => Promise.resolve()),
//     setUserProperties: jest.fn(),
//     setUserId: jest.fn(),
//     setCurrentScreen: jest.fn(),
//   })),
// );

// jest.mock('@react-native-firebase/messaging', () =>
//   jest.fn(() => ({
//     requestPermission: jest.fn(),
//     AuthorizationStatus: {},
//   })),
// );

// jest.mock('../src/helper/socketIO.ts', () => ({
//   init: jest.fn(),
//   clearSocket: jest.fn(),
//   getSocket: () => ({
//     on: jest.fn(mockSocketOperationResponses.on),
//     off: jest.fn(),
//     emit: jest.fn,
//     close: jest.fn(),
//   }),
// }));

// jest.mock('@react-native-firebase/remote-config', () => {});
// jest.mock('react-native-modal-datetime-picker', () => {
//   return 'DateTimePickerModal';
// });
// jest.mock('react-native-walkthrough-tooltip', () => {
//   return 'Tooltip';
// });
// jest.mock('@logrocket/react-native', () => ({
//   reduxMiddleware: () => thunk,
// }));

// jest.mock('react-native-skeleton-content-nonexpo', () => {
//   return 'ICustomViewStyle';
// });

// jest.mock('react-native-adjust', () => ({}));
// jest.mock('creditcardutils', () => ({
//   // eslint-disable-next-line no-unused-vars
//   validateCardExpiry: (val1, val2) => true,
//   // eslint-disable-next-line no-unused-vars
//   parseCardExpiry: text => '',
//   // eslint-disable-next-line no-unused-vars
//   validateCardCVC: cvv => true,
//   // eslint-disable-next-line no-unused-vars
//   validateCardNumber: text => creditcardutils.validateCardNumber(text),
//   // eslint-disable-next-line no-unused-vars
//   parseCardType: text => creditcardutils.parseCardType(text),
// }));
// jest.mock('react-native-keyboard-manager', () => ({}));
// jest.mock('react-native-freshchat-sdk', () => {
//   return {
//     Freshchat: {
//       removeEventListeners: jest.fn(() => {}),
//       setUserProperties: jest.fn(),
//       addEventListener: jest.fn(),
//     },
//   };
// });
// jest.mock('react-native-safe-area', () => ({
//   getSafeAreaInsetsForRootView: jest.fn(() =>
//     Promise.resolve({
//       safeAreaInsets: {top: 0, bottom: 0, left: 0, right: 0},
//     }),
//   ),
// }));

// jest.mock('react-native-gesture-handler', () => ({}));
// jest.mock('react-native-view-pdf', () => ({}));
// jest.mock('react-native-share', () => ({
//   open: jest.fn(() => Promise.resolve(true)),
// }));

// jest.mock('react-native-svg-uri', () => {});
// jest.mock('react-native-permissions', () => {
//   return {
//     PERMISSIONS: {
//       ANDROID: {ACCESS_FINE_LOCATION: ''},
//       IOS: {LOCATION_WHEN_IN_USE: ''},
//     },
//     check: jest.fn(() => Promise.resolve()),
//     checkNotifications: jest.fn(() => Promise.resolve()),
//   };
// });

// export const useRouteMock = jest.fn();

// jest.mock('@react-navigation/native', () => {
//   const actualNavigation = jest.requireActual('@react-navigation/native');

//   return {
//     ...actualNavigation,
//     useFocusEffect: () => jest.fn(),
//     useIsFocused: () => ({
//       navigation: () => jest.fn(),
//     }),
//     useNavigation: () => ({
//       goBack: jest.fn(),
//       navigate: jest.fn(),
//       addListener: jest.fn(),
//     }),
//     useRoute: useRouteMock,
//   };
// });

// jest.mock('../src/services/NavigationService', () => {
//   return {
//     navigate: jest.fn(),
//   };
// });

// jest.mock('../src/helper/navigation', () => {
//   return {
//     __esModule: true,
//     default: Comp => props => <Comp navigation={() => {}} {...props} />,
//     withRoute: Comp => props => <Comp route={{name: 'test'}} {...props} />,
//   };
// });

// jest.mock('react-native/Libraries/Utilities/Dimensions', () => {
//   return {
//     get: jest.fn().mockReturnValue({
//       fontScale: 1,
//       height: 684,
//       scale: 2.625,
//       width: 412,
//     }),
//   };
// });

// jest.mock('../src/components/CoreComponents/ScaledImage', () => {
//   return 'Image';
// });

// jest.mock('../src/screens/WelcomePage/components/BannerImage', () => {
//   return 'Image';
// });

// jest.mock('react-native-tab-view', () => ({
//   TabBar: mockView,
//   TabView: mockView,
// }));

// jest.mock('react-native-adjust', () => ({
//   Adjust: {
//     getGoogleAdId: jest.fn(),
//     getIdfa: jest.fn(),
//   },
// }));

// jest.mock('react-native-version-number', () => ({
//   appVersion: '1.2.3',
// }));

// jest.mock('../src/helper/constants', () => {
//   const actualConstants = jest.requireActual('../src/helper/constants');

//   return {
//     ...actualConstants,
//     version: '1.2.3',
//   };
// });

// jest.mock('react-native-keyboard-manager', () => ({
//   setEnable: jest.fn(),
// }));

// jest.mock('axios', () => {
//   return Object.assign(jest.fn(), {
//     create: jest.fn(() => ({
//       get: jest.fn(url => {
//         return Promise.resolve({data: axiosResponses[url] || {}});
//       }),
//       interceptors: {
//         request: {use: jest.fn(), eject: jest.fn()},
//         response: {use: jest.fn(), eject: jest.fn()},
//       },
//       post: (() => {
//         const jestFn = jest.fn(url =>
//           Promise.resolve(axiosResponses[url] || {}),
//         );
//         diverseResponses.forEach(response =>
//           jestFn.mockImplementationOnce(url =>
//             Promise.resolve(response[url] || {}),
//           ),
//         );

//         return jestFn;
//       })(),
//     })),
//     // eslint-disable-next-line no-unused-vars
//     post: jest.fn((url, data) => {
//       return Promise.resolve({data: axiosResponses[url] || {}});
//     }),
//   });
// });

// jest.mock('react-native-maps', () => {
//   const MapView = jest.requireActual('react-native-maps');

//   class MockMapView extends React.Component {
//     render() {
//       return React.createElement('MapView', this.props, this.props.children);
//     }
//   }
//   MockMapView.propTypes = MapView.propTypes;

//   class MockCallout extends React.Component {
//     render() {
//       return React.createElement('Callout', this.props, this.props.children);
//     }
//   }
//   MockCallout.propTypes = MapView.Callout.propTypes;
//   MockMapView.Callout = MockCallout;

//   class MockMarker extends React.Component {
//     render() {
//       return React.createElement('Marker', this.props, this.props.children);
//     }
//   }
//   MockMarker.propTypes = MapView.Marker.propTypes;
//   MockMapView.Marker = MockMarker;

//   class MockPolyline extends React.Component {
//     render() {
//       return React.createElement('Polyline', this.props, this.props.children);
//     }
//   }
//   MockPolyline.propTypes = MapView.Polyline.propTypes;
//   MockMapView.Polyline = MockPolyline;

//   return MockMapView;
// });

// jest.mock('react-native-freshchat-sdk/components/freshchatUser', () => {});

// jest.mock('react-native-freshchat-sdk', () => {
//   return {
//     FreshchatUser: jest.fn(),
//     Freshchat: {
//       setUserProperties: jest.fn(),
//       removeEventListeners: jest.fn(),
//       addEventListener: jest.fn(),
//       setUser: jest.fn(),
//       sendMessage: jest.fn(),
//       showConversations: jest.fn(),
//     },
//     ConversationOptions: jest.fn(),
//     FreshchatMessage: jest.fn(),
//   };
// });

// jest.mock('react-native-video-cache', () => ({
//   __esModule: true,
//   default: url => url,
// }));
