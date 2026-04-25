import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import MyActivities from '../pages/MyActivities'
import AboutMe from '../pages/AboutMe'
import PassionPlan from '../pages/PassionPlan'
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-activities" element={<MyActivities />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/my-passion-plan" element={<PassionPlan />} />
    </Routes>
  )
}
export default AppRoutes