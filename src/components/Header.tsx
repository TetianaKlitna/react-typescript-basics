import { type FC, type ReactNode } from 'react';

type HeaderType = {
  image: { src: string; alt: string; width: number; height: number };
  children: ReactNode;
};

const Header: FC<HeaderType> = ({ image, children }) => {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;
