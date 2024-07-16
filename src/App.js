import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from './pages/about';
import Contact from './pages/contact';
import Menu from './pages/menu';
import Location from'./pages/location';
import Navigation from './components/Navigation';



function App() {
 
  return (
    <>
    <BrowserRouter>
    <Navigation/>
    
    
    <Routes>
      <Route path='/' element={<Menu/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/location' element={<Location/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      
      
      
      </Routes>
      
    </BrowserRouter>
    </>
    );
}
export default App;

