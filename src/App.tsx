import './App.css';
import CourseGoal from './components/CourseGoal';
import Header from './components/Header';
import GoalsImg from './assets/goals.jpg';

function App() {
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
      <CourseGoal title="Learn React + TypeScript">
        <p>Learn it from grown up</p>
      </CourseGoal>
    </main>
  );
}

export default App;
