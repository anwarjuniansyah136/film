import { Link } from "react-router-dom";
import Cookies from "js-cookie";
const Home = () => {

  const role = Cookies.get("role");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Filmiverse!</h1>
        <p className="text-lg text-gray-600">
          Dive into the world of movies with Filmiverse. Explore the latest releases, classic hits, and everything in between. Enjoy a seamless cinematic experience right from your screen.
        </p>
      </div>
      <section className="max-w-4xl w-full mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Explore Our Features</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full sm:w-80 text-center">
            <svg className="w-12 h-12 mx-auto text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Feature 1 Icon">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Latest Releases</h3>
            <p className="text-gray-600">Stay updated with the newest films hitting the theaters and streaming platforms. Never miss out on the latest blockbusters and indie gems.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 w-full sm:w-80 text-center">
            <svg className="w-12 h-12 mx-auto text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Feature 2 Icon">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Recommendations</h3>
            <p className="text-gray-600">Get tailored movie suggestions based on your viewing history and preferences. Discover films that match your taste effortlessly.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 w-full sm:w-80 text-center">
            <svg className="w-12 h-12 mx-auto text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Feature 3 Icon">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 14l2 2 4-4" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Watchlists</h3>
            <p className="text-gray-600">Create and manage your own watchlists to keep track of movies you want to see. Organize your cinematic journey with ease.</p>
          </div>
        </div>
      </section>
      {!role && (
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join the Filmiverse Community</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to enhance your movie-watching experience? Sign up now to access exclusive features, personalized recommendations, and much more.
          </p>
          <Link to="/signin" className="inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-colors mb-4 sm:mb-0 sm:mr-4">
            Sign In
          </Link>
        </section>
      )}
    </div>
  );
};

export default Home;
