import './navbar.scss';
import { RiHomeHeartLine } from 'react-icons/ri';
import { LuSun } from 'react-icons/lu';
import { FiMoon } from 'react-icons/fi';
import { RiAppsLine } from 'react-icons/ri';
import { IoSearch } from 'react-icons/io5';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { FaRegBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span>lamasocial</span>
        </Link>
        <RiHomeHeartLine />
        {darkMode ? <LuSun onClick={toggle} /> : <FiMoon onClick={toggle} />}
        <RiAppsLine />
        <div className="search">
          <IoSearch />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <BsPerson />
        <MdOutlineEmail />
        <FaRegBell />
        <div className="user">
          <img src="/cat.jpg" alt="" />
          <span>Rainie</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
