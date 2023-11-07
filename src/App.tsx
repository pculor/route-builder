import React from 'react';
import Map from './components/molecules/Map';
import { Provider } from './Context/Provider';

function App() {
  return (
    <Provider>
      <Map />
    </Provider>
  );
}

export default App;
