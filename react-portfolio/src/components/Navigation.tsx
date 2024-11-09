import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul className="flex space-x-6 text-sm sm:text-base md:text-lg">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white'}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white'}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white'}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white'}>
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
