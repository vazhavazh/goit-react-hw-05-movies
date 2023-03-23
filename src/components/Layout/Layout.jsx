import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header/Header';

import { LayoutStyled } from './LayoutStyled';

export const Layout = () => {
  return (
    <LayoutStyled>
      <Header />

      <Suspense fallback={<h1>Loading ...</h1>}>
        <Outlet />
      </Suspense>
    </LayoutStyled>
  );
};
