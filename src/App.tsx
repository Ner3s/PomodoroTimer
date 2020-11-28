import React from 'react';
import PomodoroTimer from './components/pomodoro-timer';

function App() {
  return (
    <div>
      <PomodoroTimer defaultPomodoroTime={1500} />
    </div>
  );
}

export default App;
