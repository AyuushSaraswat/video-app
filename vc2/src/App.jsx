import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './Components/HomePage'
import VideoPage from './Components/VideoPage'

function App() {
  
 const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/room/:id",
    element:<VideoPage/>
  }
 ])
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
