import router from './controller/Router';
import { RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
