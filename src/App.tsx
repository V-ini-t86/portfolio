import { RouterProvider } from 'react-router'
import './App.css'
import { createBrowserRouter } from 'react-router'
import Portfolio from './pages/Portfolio.tsx';
import { ErrorBoundary } from "react-error-boundary";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Portfolio,
    loader: false,
  },
]);

function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  )
}

export default App
