import type { FC } from 'react';
import type { CourseGoalTypeProps } from '../interfaces/CourseGoalType';

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
