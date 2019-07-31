import { hot } from 'react-hot-loader/root';
import React from 'react';

import AwardSection from './screens/AwardSection';
import './App.css';


const App: React.FC = () => {
  return (
    <div className='App'>
      <AwardSection />
    </div>
  );
};

export default hot(App);
