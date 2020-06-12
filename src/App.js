import React from 'react';
import Layout from './components/Layout/Layout'
// 
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div>
      <Layout>
        {/* layour comp. will be warpping all our components. */}
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
