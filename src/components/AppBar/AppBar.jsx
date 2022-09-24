import Navigator from '../Navigator/Navigator';
import { Outlet } from 'react-router-dom';
import { Header, Container } from './AppBar.styled';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';

export default function AppBar() {
  return (
    <Container>
      <Header>
        <Navigator />
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
