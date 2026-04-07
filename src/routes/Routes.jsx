import { createBrowserRouter } from 'react-router'
import MainLayout from '../Layout/MainLayout'
import Homepage from '../pages/Homepage/Homepage'
import ListedBooks from '../pages/ListedBooks/ListedBooks'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import BookDetails from '../pages/BookDetails/BookDetails'





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
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/booksData.json')
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])
