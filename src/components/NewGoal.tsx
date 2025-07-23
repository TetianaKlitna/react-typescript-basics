import { useRef, type FC, type FormEvent } from 'react';
import type { CourseGoalType } from '../interfaces/CourseGoalType';

type CourseGoalTypeProps = { onAddGoal: (goal: CourseGoalType) => void };

const NewGoal: FC<CourseGoalTypeProps> = ({ onAddGoal }) => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const eneteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
    e.currentTarget.reset();
    const newGoal: CourseGoalType = {
      title: eneteredGoal,
      description: enteredSummary,
      id: new Date().getTime(),
    };
    onAddGoal(newGoal);
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal:</label>
        <input id="goal" type="text" name="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short summary:</label>
        <input id="summary" type="text" name="summary" ref={summary} />
      </p>
      <button type="submit">Add goal</button>
    </form>
  );
};

export default NewGoal;
