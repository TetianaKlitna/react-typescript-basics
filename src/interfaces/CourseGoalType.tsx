import type { ReactNode } from 'react';

export interface CourseGoalType {
  id: number;
  title: string;
  description: string;
}

export interface CourseGoalTypeProps {
  goal: CourseGoalType;
  children: ReactNode;
  onDelete: (id: number) => void;
}
