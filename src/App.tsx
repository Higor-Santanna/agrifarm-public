import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
//import { Footer } from './components/footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
      {/* <Footer></Footer> */}
    </>
  )
}

export default App