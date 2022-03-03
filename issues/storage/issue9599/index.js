/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Amplify} from 'aws-amplify';
import awsconfig from './src/aws-exports';

Amplify.Logger.LOG_LEVEL = 'DEBUG';

Amplify.configure({
  ...awsconfig,
  Auth: {
    ...awsconfig,
    // authenticationFlowType: 'USER_PASSWORD_AUTH',
    mandatorySignIn: true,
  },
  Storage: {
    ...awsconfig,
    AWSS3: {
      customPrefix: {
        public: '/guest',
        protected: '/protected',
        private: '/secret',
      },
    },
  },
});

AppRegistry.registerComponent(appName, () => App);
