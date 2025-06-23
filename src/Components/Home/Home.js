import "./home.css";
import mainimage from "../Images/mainimage.jpg";
import Introduction from "./SubComponents/Introduction";
import MidComponent from "./SubComponents/MidComponents";
import LastComponent from "./SubComponents/LastComponent";
function Home(){
    return (
       <div>
            <img className='main-image' src={mainimage} alt=""/>
            <Introduction/>
            <br></br>
            <MidComponent/>
            <br></br>
            <LastComponent/>
      
       </div>
    )
};

export default Home;