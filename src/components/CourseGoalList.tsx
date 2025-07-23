import CourseGoal from './CourseGoal';
import type { CourseGoalListType } from '../interfaces/CourseGoalListType';
import type { CourseGoalType } from '../interfaces/CourseGoalType';
import type { FC } from 'react';

interface CourseGoalListTypeProps extends CourseGoalListType {
  onDelete: (id: number) => void;
}

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
