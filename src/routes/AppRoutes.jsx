import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import MyActivities from '../pages/MyActivities'
import AboutMe from '../pages/AboutMe'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-activities" element={<MyActivities />} />
      <Route path="/about-me" element={<AboutMe />} />
    </Routes>
  )
}
export default AppRoutes