import './App.css';
import Header from './components/Header';
import GoalsImg from './assets/goals.jpg';
import CourseGoalList from './components/CourseGoalList';
import type { CourseGoalType } from './interfaces/CourseGoalType';
import { useState } from 'react';

function App() {
  const [goals, setGoals] = useState<CourseGoalType[]>([]);
  const handleAddGoal = () => {
    const newGoal: CourseGoalType = {
      title: 'Learn React + TypeScript',
      description: 'Learn it from grown up',
      id: new Date().getTime(),
    };
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };
  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
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
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}

export default App;
