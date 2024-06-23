// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
function App() {

  return (
 <>
 <Nav />
 <Outlet />
 <Footer />
 </>
  )
}

export default App;
