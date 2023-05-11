import React from 'react';
import './App.css';
import TraineeProfile from './Components/TraineeProfile';
import CardClass3 from './Components/CardClass3';


function App() {
  const famousTrainer = {
    name: 'Roger Federer',
    imageURL: 'https://i.pinimg.com/originals/91/35/4e/91354ecf558e06b1e62a26807f3b3b56.jpg',
  };
// alternative image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Federer_WM16_%2837%29_%2828136155830%29.jpg/220px-Federer_WM16_%2837%29_%2828136155830%29.jpg
  return (
    <div className="App">
      <TraineeProfile />
      <CardClass3 trainer={famousTrainer} />
    </div>
  );
}

export default App;