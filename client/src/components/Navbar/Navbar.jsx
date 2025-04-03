import React from 'react'
import { Heart, Menu, X, User, LogOut, ChevronDown, Edit } from 'lucide-react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = React.useState(false);
  const profileDropdownRef = React.useRef(null);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  const handleProfileClick = () => {
    navigate('/profile');
    setProfileDropdownOpen(false);
  };

  const handleUpdateInfoClick = () => {
    navigate('/sos');
    setProfileDropdownOpen(false);
  };

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
    setProfileDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-red-600" />
          <span className="text-xl font-bold">MedAI</span>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#features" className="text-sm font-medium hover:text-red-600 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-red-600 transition-colors">
            How It Works
          </a>
          <Link to="/first-aid" className="text-sm font-medium hover:text-red-600 transition-colors">
            Guide
          </Link>
          <Link to="/hospitals" className="text-sm font-medium hover:text-red-600 transition-colors">
            Nearby Hospitals
          </Link>

          {!isAuthenticated ? (
            <button onClick={() => loginWithRedirect()} className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors">
              Login
            </button>
          ) : (
            <div className="relative" ref={profileDropdownRef}>
              <button
                onClick={toggleProfileDropdown}
                className="flex items-center gap-2 focus:outline-none"
              >
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center overflow-hidden">
                  {user?.picture ? (
                    <img
                      src={user.picture}
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="h-5 w-5 text-red-600" />
                  )}
                </div>
                <span className="text-sm font-medium">{user.name}</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>

              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                  <button
                    onClick={handleProfileClick}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    <User className="h-4 w-4" />
                    My Profile
                  </button>
                  <button
                    onClick={handleUpdateInfoClick}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    <Edit className="h-4 w-4" />
                    Update Information
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#features" className="text-sm font-medium hover:text-red-600 transition-colors py-2">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-red-600 transition-colors py-2">
              How It Works
            </a>
            <Link to="/first-aid" className="text-sm font-medium hover:text-red-600 transition-colors py-2">
              Guide
            </Link>
            <Link to="/hospitals" className="text-sm font-medium hover:text-red-600 transition-colors py-2">
              Nearby Hospitals
            </Link>

            {!isAuthenticated ? (
              <button onClick={() => loginWithRedirect()} className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors w-full">
                Login
              </button>
            ) : (
              <>
                <div className="flex items-center gap-2 py-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center overflow-hidden">
                    {user?.picture ? (
                      <img
                        src={user.picture}
                        alt={user.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                  <span className="text-sm font-medium">{user.name}</span>
                </div>
                <button
                  onClick={handleProfileClick}
                  className="text-sm font-medium hover:text-red-600 transition-colors py-2 flex items-center gap-2 w-full text-left"
                >
                  <User className="h-4 w-4" />
                  My Profile
                </button>
                <button
                  onClick={handleUpdateInfoClick}
                  className="text-sm font-medium hover:text-red-600 transition-colors py-2 flex items-center gap-2 w-full text-left"
                >
                  <Edit className="h-4 w-4" />
                  Update Information
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors w-full"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}