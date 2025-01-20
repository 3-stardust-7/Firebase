import { useEffect, useState } from "react";
import "./App.css";
import Auth from "./components/auth";
import { db } from "./config/firebase";
import { getDocs, collection } from "firebase/firestore";

function App() {
  const [movieList, setMovieList] = useState([]);

  const moviesCollectionRef = collection(db, "movies");

  useEffect(() => {
    const getMovie = async () => {
      //SET THE MOVIE LIST
      try {
        //READ THE DATA
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        //console.log(data);
        //console.log(filteredData);
        setMovieList(filteredData);
      } catch (error) {
        console.error(error);
      }
    };

    getMovie();
  }, []);

  return (
    <>
      <div className="App">
        <Auth />
        <div>
          {movieList.map((movie) => (
            <div key={movie.id}>
              <h1 style={{ color: movie.receivedAnOscar ? "green" : "red" }}>
                {movie.title}
              </h1>
              <p>Date: {movie.releaseDate}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );

}

export default App;
