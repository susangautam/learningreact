import Header from '../Components/Navigation/Header'
import Footer from '../Components/Footer'



// eslint-disable-next-line react/prop-types
function Layout({children}) {
  return (
    <div>
      <Header/>
   <div>
    {children}
   </div>
   
     <Footer/>
    </div>
  )
}

export default Layout
