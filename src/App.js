import React from 'react';
// 
import Layout from './components/Layout/Layout'

function App() {
  return (
    <div>
      {/* it cant be self closing compoennt as whole idea is that it will have component which will be warrped in Layout */}
      {/* <Layout /> */}

      <Layout>
        <p>Test!!!</p>
      </Layout>
    </div>
  );
}

export default App;
