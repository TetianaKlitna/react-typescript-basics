import CourseGoal from './CourseGoal';
import type { CourseGoalListTypeProps } from '../interfaces/CourseGoalListType';
import type { CourseGoalType } from '../interfaces/CourseGoalType';
import type { FC } from 'react';

const CourseGoalList: FC<CourseGoalListTypeProps> = ({ goals, onDelete }) => {
  return (
    <ul>
      {goals.map((goal: CourseGoalType) => (
        <li key={goal.id}>
          <CourseGoal goal={goal} onDelete={onDelete}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
