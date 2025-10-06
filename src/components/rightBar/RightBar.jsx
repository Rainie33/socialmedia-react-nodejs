import './rightBar.scss';

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="/Suggestions.avif" alt="" />
              <span>Alice</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/Suggestions.avif" alt="" />
              <span>Ellie</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="/friend-1.avif" alt="" />
              <p>
                <span>Alan</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/friend-2.avif" alt="" />
              <p>
                <span>Wayne</span> liked a post
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/friend-3.avif" alt="" />
              <p>
                <span>Arthur</span> liked a comment
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/friend-4.avif" alt="" />
              <p>
                <span>Shan</span> posted
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="/friend-1.avif" alt="" />
              <div className="online"></div>
              <span>Alan</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/friend-2.avif" alt="" />
              <div className="online"></div>
              <span>Wayne</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/friend-3.avif" alt="" />
              <div className="online"></div>
              <span>Arthur</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/friend-4.avif" alt="" />
              <div className="online"></div>
              <span>Shan</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/friend-5.avif" alt="" />
              <div className="online"></div>
              <span>Chloe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/friend-6.avif" alt="" />
              <div className="online"></div>
              <span>Sandy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
