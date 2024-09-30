import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import AboutMe from './pages/AboutMe'
import Home from './pages/Home'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/about" element={<AboutMe />}></Route>
  </Route>,
)

export const router = createBrowserRouter(routes)
