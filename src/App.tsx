import { RouterProvider } from 'react-router'
import './App.css'
import { createBrowserRouter } from 'react-router'
import Portfolio from './pages/Portfolio.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Portfolio,
    loader: false,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
