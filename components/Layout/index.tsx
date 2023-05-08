import { ReactNode } from 'react';
import Header from '../Header/index';

interface LayoutProps {
  children: ReactNode;
}
export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
