# Micro front-end application

This is a sample micro front-end application generated through the create-mfa-app Command Line Interface (CLI). This app provides a reference implementation for consuming and adding various exposed components. It also gives an example of data sharing between different micro front-ends.

## Adding a new route to the application
`src/const/routes.jsx`

Add a new application route to the `defaultRoutes` array, referring the element to the respective page component.

Example of `defaultRoutes` array:

```
  const defaultRoutes = [
    { path: "payments", element: <Home /> },
    { path: "payments/about", element: <About /> },
  ];
```

## Exposing widgets components

Sometimes, instead of exposing the whole app as a micro front-end, you also want to expose a particular widget/component that can be built and exposed by one micro front-end app and re-used by other micro front-ends easily.

### Exposing a widget as a module federated component
Create your component as a typical React component. To expose this component, we just need to add this component information in two files on the respective micro front-end application.

1) `{micro front-end app}/src/appRoutesComponentConfig.js` 

    Add an entry just like ` "./header": "./src/components/Header",` component to `allComponents` object is added on the line no. 4

2) `{micro front-end app}/src/exposedComponentsList.js`

    Add an entry just like `'./header'` to `componentsArray` on the line no. 1

### Consuming the component
Now that we have exposed a component from our micro front-end app, we want to consume the same in other micro front-end apps.

To consume a module federated widget, we have created a special component `MFAComponentLoader` that you can export from the shared component micro front-end like below.


```
import { MFAComponentLoader } from "shared/Components";
```

and consume the exposed component anywhere in your application by calling the component below

```
 <MFAComponentLoader componentName="./header" />
```

## Configuring shared-components micro front-end URL

The shared-components end point can be set in `/src/index.js` file.

```
  window.sharedComponent = "http://localhost:6002";
```
You can update the endpoint to make it environment-specific by reading it through and exposing API, or by creating a .env file.

## Share data between micro front-ends

A global react context is exposed from shared components that are being served as the parent component of the application. The context allows, to publish/consume data between different MFEs.

An example can be found on the line no. 6 of `/src/pages/home/index.jsx`

```
  const { user, setUser } = useContext(GlobalContext);
```

## Available run scripts

`start`

To run the app on the given port.

`build`

To create optimized assets for production servers.

`test`

To run the test cases.

## Template repos:
- Shell container: [git@github.com:rahul-ranjan-me/mfe-shell-app.git](https://github.com/rahul-ranjan-me/mfe-shell-app)
- Shared components: [git@github.com:rahul-ranjan-me/mfe-shared-components.git](https://github.com/rahul-ranjan-me/mfe-shared-components)
- Micro front-end application: [git@github.com:rahul-ranjan-me/mfe-app.git](https://github.com/rahul-ranjan-me/mfe-app)
