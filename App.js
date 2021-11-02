import React from 'react';
import Store from './package/globalState/Store';
import BaseNavigator from './package/navigations/BaseNavigator';

const App = () => {

  return(
    <Store>
      <BaseNavigator/>
    </Store>
  )
};

export default App;
