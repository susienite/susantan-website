import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Me</Link></li>
      <li><Link to="/projects">My Work</Link></li>
    </ul>
  </nav>
);

export default Navbar;
