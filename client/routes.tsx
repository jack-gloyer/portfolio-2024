import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import AboutMe from './pages/AboutMe'
import Home from './pages/Home'
// import ProjectInfo from './pages/ProjectInfo'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/about" element={<AboutMe />}></Route>
    {/* <Route path="projects/1" element={<ProjectInfo />}></Route>
    <Route path="projects/2" element={<ProjectInfo />}></Route>
    <Route path="projects/3" element={<ProjectInfo />}></Route> */}
  </Route>,
)

export const router = createBrowserRouter(routes)
