import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import './App.css'
import { MainPage, SignUp } from './Pages';
import { useEffect } from 'react';
import { auth } from './utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './Redux/userSlice';


function App() {

  const dispatch = useDispatch();

  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />
    },
    {
      path: "/browser",
      element: <MainPage />
    }
  ]);


  useEffect(() => {
    auth
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email } = user;
        console.log("uId::", uid, displayName, email)
        dispatch(addUser({ uid, displayName, email }))

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
