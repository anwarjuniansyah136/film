import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Cookies from 'js-cookie'; 

const Search = () => {
  const { param } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const token = Cookies.get("token");

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/search/${param}`,
          {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          }
        );
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearch();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-10">Search Results for: {param}</h1>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {searchResults.length > 0 ? (
          searchResults.map((film) => (
            <Link
              to={`/watch/${film.id_film}`}
              key={film.id_film}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={film.image}
                  alt={film.judul_film}
                  className="w-full h-64 object-cover"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-2">{film.judul_film}</h2>
              <p className="text-gray-400 mb-1">Artist: {film.artist}</p>
              <p className="text-gray-400">Release Date: {film.rilis}</p>
            </Link>
          ))
        ) : (
          <p className="text-gray-400">No results found for {param}.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
