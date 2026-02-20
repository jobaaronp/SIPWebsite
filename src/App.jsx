import Navbar from './components/layout/navbar/Navbar'
import Footer from './components/layout/footer/Footer'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  )
}

export default App