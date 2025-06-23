import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Home from './Components/Home/Home';
import ContactUs from './Components/ContactUs/ContactUs';
import Layout from './Components/Layout/Layout';
function App() {
  return (
    <>
        <BrowserRouter>
           <Routes>
            <Route path ="/" element={<Layout/>}>
                 <Route index element = {<Home />} />
              
                 <Route path= "contactus" element = {<ContactUs />} />
            </Route>    
           </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
