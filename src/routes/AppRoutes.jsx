import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import MyActivities from '../pages/MyActivities'
import AboutMe from '../pages/AboutMe'
import PassionPlan from '../pages/PassionPlan'
import JourneyMap from '../pages/JourneyMap'
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-activities" element={<MyActivities />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/my-passion-plan" element={<PassionPlan />} />
      <Route path="/my-journey-map" element={<JourneyMap />} />
    </Routes>
  )
}
export default AppRoutes