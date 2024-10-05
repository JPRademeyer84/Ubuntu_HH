"use client";
import Image from "next/image";
import Link from "next/link";
import team_obj from "/public/images/elements/team-obj.png";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from 'next/navigation';
import { showToast } from '../Toast/Toast';

const LeftSideMenu = () => {
  const { setIsLoggedIn } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    const token = localStorage.getItem('token');
    localStorage.removeItem('token');
    
    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setIsLoggedIn(false); // Update login state
        showToast(data.message); // Show logout success message
        router.push('/'); // Redirect after logout
      } 
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <div className="col-lg-4">
      <div className="user-card">
        <div className="avatar-upload">
          <div className="obj-el">
            <Image src={team_obj} alt="team obj" />
          </div>
          <div className="avatar-edit">
            <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
            <label htmlFor="imageUpload"></label>
          </div>
          <div className="avatar-preview">
            <div id="imagePreview"></div>
          </div>
        </div>
        <h3 className="user-card__name">Albert Owens</h3>
        <span className="user-card__id">ID : 19535909</span>
      </div>
      <div className="user-action-card">
        <ul className="user-action-list">
          {[
            ["My Tickets", "/user"],
            ["Personal Information", "/user-info"],
            ["Transactions", "/user-transaction"],
            ["Referral Program", "/user-referral"],
            ["Favorite Lotteries", "/user-lottery"],
            ["Help Center", "/contact"],
            ["Log Out", "/#"],
          ].map(([item, url], i) => (
            <li
              key={item}
              className={`${router.pathname === url && "active"} `}
            >
              {item === "Log Out" ? (
                <Link onClick={handleLogout} href="#0">
                {item}
                {i === 0 ? <span className="badge">04</span> : ""}
              </Link>
              ) : (
                <Link href={url}>
                  {item}
                  {i === 0 ? <span className="badge">04</span> : ""}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftSideMenu;
