import { type CourseGoalType } from './CourseGoalType';

export interface CourseGoalListType {
  goals: CourseGoalType[];
}

export interface CourseGoalListTypeProps extends CourseGoalListType {
  onDelete: (id: number) => void;
}
