import CourseGoal from './CourseGoal';
import { type CourseGoalListType } from '../types/CourseGoalListType';
import { type CourseGoalType } from '../types/CourseGoalType';
import type { FC } from 'react';

const CourseGoalList: FC<CourseGoalListType> = ({ goals }) => {
  return (
    <ul>
      {goals.map((goal: CourseGoalType) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
