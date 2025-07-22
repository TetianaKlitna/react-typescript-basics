import type { PropsWithChildren } from 'react';

// type CourseGoalType = {
//   title: string;
//   children: ReactNode;
// };

// const CourseGoal:FC<CourseGoalType> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

type CourseGoalType = PropsWithChildren<{ title: string }>;

function CourseGoal({ title, children }: CourseGoalType) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}

export default CourseGoal;
