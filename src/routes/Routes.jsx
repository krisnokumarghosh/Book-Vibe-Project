import { createBrowserRouter } from 'react-router'
import MainLayout from '../Layout/MainLayout'
import Homepage from '../pages/Homepage/Homepage'
import ListedBooks from '../pages/ListedBooks/ListedBooks'
import ErrorPage from '../pages/ErrorPage/ErrorPage'




export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        index: true,
        element: <Homepage></Homepage>
      },
      {
        path: "/ListedBooks",
        element: <ListedBooks></ListedBooks>
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])
