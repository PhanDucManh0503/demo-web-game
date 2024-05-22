import { useRoutes } from "react-router-dom"
import { router } from "./router"
import './index.css';

function App() {
  return <div>{useRoutes(router)}</div>
}

export default App
