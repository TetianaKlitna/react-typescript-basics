import type { FC, ReactNode } from 'react';
import type { CourseGoalType } from '../interfaces/CourseGoalType';

interface CourseGoalTypeProps {
  goal: CourseGoalType;
  children: ReactNode;
  onDelete: (id: number) => void;
}

const CourseGoal: FC<CourseGoalTypeProps> = ({ goal, onDelete, children }) => {
  return (
    <article>
      <div>
        <h2>{goal.title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(goal.id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
