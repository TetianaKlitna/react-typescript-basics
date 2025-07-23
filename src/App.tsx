import './App.css';
import Header from './components/Header';
import GoalsImg from './assets/goals.jpg';
import CourseGoalList from './components/CourseGoalList';
import { type CourseGoalType } from './types/CourseGoalType';
import { useState } from 'react';

function App() {
  const [goals, setGoals] = useState<CourseGoalType[]>([]);
  const handleAddGoal = () => {
    const newGoal: CourseGoalType = {
      title: 'Learn React + TypeScript',
      description: 'Learn it from grown up',
      id: goals.length,
    };
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  return (
    <main>
      <Header
        image={{
          src: GoalsImg,
          alt: 'A list of goals',
          width: 200,
          height: 200,
        }}
      >
        <p>Your Course Goals:</p>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} />
    </main>
  );
}

export default App;
