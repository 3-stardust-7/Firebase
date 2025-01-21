import { useEffect, useState } from "react";
import "./App.css";
import Auth from "./components/auth";
import { db } from "./config/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";

function App() {
  const [movieList, setMovieList] = useState([]);

  //New Movie States
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState(0);
  const [oscar, setOscar] = useState(false);

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

  const onSubmitMovie = async () => {
    try {
      await addDoc(moviesCollectionRef, {
        title: newMovieTitle,
        releaseDate: newReleaseDate,
        receiveaAnOscar: oscar,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="App">
        <Auth />

        {/* UI to create new movie */}
        <div>
          <input
            placeholder="Movie title.."
            onChange={(e) => setNewMovieTitle(e.target.value)}
          />
          <input
            placeholder="Release date.."
            type="number"
            onChange={(e) => setNewReleaseDate(Number(e.target.value))}
          />
          <input
            type="checkbox"
            checked={oscar}
            onChange={(e) => setOscar(e.target.checked)}
          />
          <label>Received an Oscar</label>
          <button onClick={onSubmitMovie}>Submit Movie</button>
        </div>

        {/* UI to read and display movie */}
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
