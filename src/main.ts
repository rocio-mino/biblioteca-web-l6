import { bootstrapApplication } from '@angular/platform-browser';
import { Amplify } from 'aws-amplify';
import 'aws-amplify/auth/enable-oauth-listener';

import { App } from './app/app';
import { appConfig } from './app/app.config';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_blu5gEaOI',
      userPoolClientId: '2rpcmeemt63kkn575dlmpplguc',
      loginWith: {
        oauth: {
          domain: 'us-east-1blu5geaoi.auth.us-east-1.amazoncognito.com',
          scopes: [
            'openid',
            'profile',
            'biblioteca/libros.leer',
          ],
          redirectSignIn: ['http://localhost:4200/callback'],
          redirectSignOut: ['http://localhost:4200'],
          responseType: 'code',
        },
      },
    },
  },
});

bootstrapApplication(App, appConfig).catch((err) => console.error(err));