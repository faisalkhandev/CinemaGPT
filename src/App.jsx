import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { MainPage, SignUp } from './Pages';


function App() {

  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />
    },
    {
      path: "signup",
      element: <SignUp />
    },
  ]);


  return (
    <>

      <RouterProvider router={appRoute} />


    </>
  )
}

export default App
