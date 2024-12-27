import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import FractalRenderer, {ErrorBoundary} from './features';
import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<FractalRenderer />} errorElement={<ErrorBoundary/>}/>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
