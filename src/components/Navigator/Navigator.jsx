import { NavigLink } from './Navigator.styled';

export default function Navigator() {
  return (
    <nav>
      <NavigLink exact to="/">
        Home
      </NavigLink>
      <NavigLink to="/movies">Movies</NavigLink>
    </nav>
  );
}
