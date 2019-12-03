# GuestBook SPA in React

In development mode, the backend API is assumed to be at http://localhost:8080.
The `proxy` setting can be changed in package.jon. During remote debugging, if
you see an error "Invalid Host Header", create a .env.local file and put in:

`DANGEROUSLY_DISABLE_HOST_CHECK=true`

This sets Webpack Dev Server's `disableHostCheck` option to true
(see node_modules/react-scripts/config/webpackDevServer.config.js).
