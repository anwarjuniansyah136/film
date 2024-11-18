import { Play, UserRoundPlus, SearchIcon, FileVideo, ScrollText, House, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const role = Cookies.get("role");
  const navigate = useNavigate();

  const handleSearchSubmit = async () => {
      navigate(`/search/${searchQuery}`);
  };

  const handleLogout = () => {
    Cookies.remove("role");
    localStorage.clear();
    sessionStorage.clear();
    navigate("/signin");
  };

  return (
    <header className="flex w-full items-center justify-between bg-gray-800 text-white p-4 shadow-lg">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-semibold cursor-pointer hover:text-blue-400 transition-colors">
          <Link to="/" className="flex items-center">
            <Play className="w-5 h-5 mr-2" aria-hidden="true" />
            Filmivers
          </Link>
        </h1>
      </div>
      <nav className="flex flex-grow items-center justify-end space-x-8 mr-5">
        {role && (
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center space-x-2 border border-gray-600 rounded-lg bg-gray-700"
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-1.5 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-3 py-1.5 text-blue-400 hover:text-blue-300"
            >
              <SearchIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </form>
        )}
        <ul className="flex space-x-16 text-lg">
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors font-semibold text-sm"
            >
              <House className="w-6 h-6" aria-hidden="true" />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/list-film"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors font-semibold text-sm"
            >
              <ScrollText className="w-6 h-6" aria-hidden="true" />
              Film
            </Link>
          </li>
          <li>
            <Link
              to="/genre"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors font-semibold text-sm"
            >
              <FileVideo className="w-6 h-6" aria-hidden="true" />
              Genre
            </Link>
          </li>
          {!role && (
            <li>
              <Link
                to="/create-account"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors font-semibold text-sm"
              >
                <UserRoundPlus className="w-6 h-6" aria-hidden="true" />
                Sign up
              </Link>
            </li>
          )}
          {role && (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 hover:text-blue-400 transition-colors font-semibold text-sm"
            >
              <LogOut className="w-6 h-6" aria-hidden="true" />
              LogOut
            </button>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
