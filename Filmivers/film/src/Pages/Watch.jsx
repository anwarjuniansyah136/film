import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'; 

const Watch = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [genre, setGenre] = useState(null);
  const token = Cookies.get('token');
  const role = Cookies.get("role");

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/get-film/${id}`, {
            headers: { "Authorization": `Bearer ${token}` },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFilm(data);
      } catch (error) {
        console.error("Failed to fetch film:", error);
      }
    };
    fetchFilm();
  }, [id, token]);

  useEffect(() => {
    if (film) {
      const fetchGenre = async () => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_BASE_URL}/api/get-genre-by-id/${film.id_type}`, {
              headers: { "Authorization": `Bearer ${token}` },
            }
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setGenre(data);
        } catch (error) {
          console.error("Failed to fetch genre:", error);
        }
      };
      fetchGenre();
    }
  }, [film, token]);

  if (!role) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h1 className="text-2xl font-semibold mb-4 text-center text-gray-800">
            Please Sign in
          </h1>
          <p className="text-gray-600 text-center mb-6">
            You need to be logged in to access this content.
          </p>
          <div className="flex justify-center">
            <Link to="/signin"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
      <div className="relative max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <div className="absolute inset-0 bg-black opacity-90 rounded-lg"></div> {/* Dark overlay */}
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold mb-4 text-white text-center">{film?.judul_film}</h1>
          <div className="mb-6">
            {film?.video && (
              <video controls width="100%" height="auto" className="rounded-lg shadow-md">
                <source
                  src={`${import.meta.env.VITE_API_BASE_URL}/uploads/${film.video}`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          <div className="flex text-center space-x-9 text-white">
            <p className="text-lg"><strong>Released:</strong> {new Date(film?.rilis).toLocaleDateString()}</p>
            <p className="text-lg"><strong>Director/Actor:</strong> {film?.artist}</p>
            <p className="text-lg"><strong>Genre:</strong> {genre ? genre[0].genre : 'Loading...'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
