import './leftBar.scss';
import { FaUserFriends } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import { FaShop } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { RiMemoriesFill } from 'react-icons/ri';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoGameControllerOutline } from 'react-icons/io5';
import { RiGalleryLine } from 'react-icons/ri';
import { BiSolidVideos } from 'react-icons/bi';
import { TbMessageStar } from 'react-icons/tb';
import { GiCash } from 'react-icons/gi';
import { FaBookReader } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src="/cat.jpg" alt="" />
            <span>Rainie</span>
          </div>
          <div className="item">
            <FaUserFriends />
            <span>Friends</span>
          </div>
          <div className="item">
            <MdGroups />
            <span>Groups</span>
          </div>
          <div className="item">
            <FaShop />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <FaYoutube />
            <span>Watch</span>
          </div>
          <div className="item">
            <RiMemoriesFill />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <FaRegCalendarAlt />
            <span>Events</span>
          </div>
          <div className="item">
            <IoGameControllerOutline />
            <span>Gaming</span>
          </div>
          <div className="item">
            <RiGalleryLine />
            <span>Gallery</span>
          </div>
          <div className="item">
            <BiSolidVideos />
            <span>Videos</span>
          </div>
          <div className="item">
            <TbMessageStar />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <GiCash />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <FaBookReader />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <ImBooks />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
