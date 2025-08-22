import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import * as Icon from 'react-feather';
import { set_is_mobile_sidebar } from '../../../core/data/redux/action';
import { useDispatch } from 'react-redux';
import { all_routes } from '../../../core/data/routes/all_routes';
import supabase from "../../../supabaseClient";

type UserInfo = {
  name: string | null;
  email: string | null;
  avatar?: string | null;
  role?: string | null;
};

const AdminHeader = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [user, setUser] = useState<UserInfo | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const { data, error } = await supabase
        .from("rd_users")
        .select("name, email, role")
        .eq("user_id", session.user.id)
        .single();

      if (!error && data) {
        setUser({
          name: data.name,
          email: data.email,
          role: data.role,
        });
      }
    };

    fetchUser();
  }, []);

  // ... keep your fullscreen + sidebar logic

  return (
    <div className="admin-header">
      {/* left logo ... */}

      <ul className="nav admin-user-menu">
        <li className="nav-item dropdown">
          <Link to="#" className="user-link nav-link" data-bs-toggle="dropdown">
            <span className="user-img">
              <ImageWithBasePath
                className="rounded-circle"
                src="assets/admin/img/user.jpg"
                width={40}
                alt="Admin"
              />
              <span className="animate-circle" />
            </span>
            <span className="user-content">
              <span
                className="user-name"
                style={{ textTransform: "capitalize" }}
              >
                {user?.name || "Guest"}
              </span>
              <span className="user-details">
                {user?.role === "A1"
                  ? "Super Admin"
                  : user?.role === "A2"
                    ? "Admin"
                    : "User"}
              </span>

            </span>
          </Link>
          <div className="dropdown-menu menu-drop-user">
            <div className="profilemenu">
              <div className="user-detials">
                <Link to="account">
                  <span className="profile-content">
                    <span>{user?.name}<br /></span>
                    <span>{user?.email}</span>
                  </span>
                </Link>
              </div>
              <div className="subscription-logout">
                <Link to="logout">Log Out</Link>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};


export default AdminHeader;
