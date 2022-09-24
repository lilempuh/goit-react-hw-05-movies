import { Link } from './Navigator.styled';

export default function Navigator() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </nav>
  );
}
