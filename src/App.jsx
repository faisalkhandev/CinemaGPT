import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import './App.css'
import { useEffect } from 'react';
import { auth } from './utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './Redux/userSlice';
import { useNowPlayingMovie } from './hooks/useNowPlayingMovie';
import { useTopRatedMovies } from './hooks/useTopRatedMovies';
import { appRoute } from './Routes/Route';


function App() {

  useNowPlayingMovie();
  useTopRatedMovies();


  const dispatch = useDispatch();




  useEffect(() => {
    auth
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email, photoURL } = user;

        dispatch(addUser({
          uid: uid,
          displayName: displayName,
          email: email,
          photoURL: photoURL,
        }))

      } else {
        // User is signed out
        dispatch(removeUser())
      }
    });

  }, [])




  return (
    <>

      <RouterProvider router={appRoute} />


    </>
  )
}

export default App
