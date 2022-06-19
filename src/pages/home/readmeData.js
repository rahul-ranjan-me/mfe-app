/* eslint-disable max-len */

const data = `<div>
  <div class="content">
    <div class="go-to-top">
      <a href="#">Go to top</a>
    </div>

    <h1>Micro front-end application</h1>
    <p>This is a sample micro front-end application generated through the create-mfa-app Command Line Interface (CLI). This app provides a reference implementation for consuming and adding various exposed components. It also gives an example of data sharing between different micro front-ends.</p>
    <h2>Adding a new route to the application</h2>
    <p><code>src/const/routes.jsx</code></p>
    <p>Add a new application route to the <code>defaultRoutes</code> array, referring the element to the respective page component.</p>
    <p>Example of <code>defaultRoutes</code> array:</p>
    <pre><code>
  const defaultRoutes = [
    { path: "payments", element: <Home /> },
    { path: "payments/about", element: <About /> },
  ];
    </code></pre>

    <h2>Exposing widgets components</h2>
    <p>Sometimes, instead of exposing the whole app as a micro front-end, you also want to expose a particular widget/component that can be built and exposed by one micro front-end app and re-used by other micro front-ends easily.</p>
    
    <h3>Exposing a widget as a module federated component</h3>
    <p>Create your component as a typical React component. To expose this component, we just need to add this component information in two files on the respective micro front-end application.</p>

    <h4>1) <code>{micro front-end app}/src/appRoutesComponentConfig.js</code></h4>
    <p>Add an entry just like <code> "./header": "./src/components/Header",</code> component to <code>allComponents</code> object is added on the line no. 4</p>

    <h4>2) <code>{micro front-end app}/src/exposedComponentsList.js</code></h4>
    <p>Add an entry just like <code>'./header'</code> to <code>componentsArray</code> on the line no. 1</p>

    <h2>Consuming the component</h2>
    <p>Now that we have exposed a component from our micro front-end app, we want to consume the same in other micro front-end apps.</p>
    <p>In order to consume a module federated widget, we have created a special component <code>MFAComponentLoader</code> that you can export from the shared component micro front-end like below.</p>
    <pre><code>
  import { MFAComponentLoader } from "shared/Components";
    </code></pre>
    <p>and consume the exposed component anywhere in your application by calling the component below</p>
    <pre><code>
  &lt;MFAComponentLoader componentName="./header" /&gt;
    </code></pre>
    <p>An example of the same is created for you and placed under <code><a href="#mfa-component-loader-example">{shell-container app}/src/pages/Home.jsx</a></code>.</p>
    
    <h2>Configuring shared-components micro front-end URL</h2>
    <p>The shared-components end point can be set in <code>/src/index.js</code> file.</p>
    <pre><code>
  window.sharedComponent = "http://localhost:6002";
    </code></pre>
    <p>You can update the endpoint to make it environment-specific by reading it through and exposing API, or by creating a .env file.</p>
    
    <h2>Share data between micro front-ends</h2>
    <p>A global react context is exposed from shared components that are being served as the parent component of the application. The context allows, to publish/consume data between different MFEs.</p>
    <p>An example can be found on the line no. 6 of <code>/src/pages/home/index.jsx</code></p>
    <pre><code>
  const { user, setUser } = useContext(GlobalContext);
    </code></pre>
    
    <h2>Available run scripts</h2>
    <p><code>start</code></p>
    <p>To run the app on the given port.</p>
    <p><code>build</code></p>
    <p>To create optimized assets for production servers.</p>
    <p><code>test</code></p>
    <p>To run the test cases.</p>
    `;

export default data;
