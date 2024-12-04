import Header from '../Components/Navigation/Header'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <div>
      <Header/>
   <div>
    <Outlet></Outlet>
   </div>
   
     <Footer/>
    </div>
  )
}

export default Layout
