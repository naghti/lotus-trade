import React from 'react';
import styles from './App.module.scss';
import BiddingRoom from "./pages/BiddingRoom/BiddingRoom";

function App() {
  return (
    <div>
      <BiddingRoom
        title="Тестовые торги на аппарат ЛОТОС № 2033564 (09.11.2020) 7:00"/>
    </div>
  );
}

export default App;
