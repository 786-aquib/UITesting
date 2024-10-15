import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import TopHeader from './components/TopHeader';
import OverviewAndRepo from './components/OverviewAndRepo';
import TimelineAndCompliance from './components/TimelineAndCompliance';

function App() {
  return (
    <div style={{ display: 'flex', backgroundColor: '#FFFAF5' }}>
      <SideBar />
      <div style={{ flexGrow: 1 }}> {/* This allows TopHeader to take available space */}
        <TopHeader />
        <div style={{ flexGrow: 1,  marginTop: '10px', marginLeft:'10px', marginRight:'10px'}}>
          <OverviewAndRepo />
          <div style={{ flexGrow: 1, marginTop: '30px'}}>
          <TimelineAndCompliance />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
