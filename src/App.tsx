import React from 'react';
import Layout from './components/views';
import { Provider } from './Context/Provider';

function App() {
  return (
    <Provider>
      <Layout />
    </Provider>
  );
}

export default App;
