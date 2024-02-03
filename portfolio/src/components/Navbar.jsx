// @ts-nocheck
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-100 h-10 rounded-lg bg-white items-center
        justify-center flex px-2 font-bold shadow-md"
      >
        <p className="red-gradient-text">XeNn</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-red-500' : 'text-slate-800')}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'text-red-500' : 'text-slate-800')}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
