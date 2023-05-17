import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "./assets/phone.png"
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';




function App() {
  let newPageIndex = 0
  const [text,setText] = useState('')
  const handlePageChange = (newPageIndex) => {
    console.log(newPageIndex)
   if(newPageIndex === 1){
    setText('It involves identifying a need or desire, researching available options, evaluating their features  and prices, and ultimately')
   }
   else if(newPageIndex === 2){
    setText('considering their attributes, performance, suitability, and aligning them with the desired requirements or objectives.')
   }

   else if(newPageIndex === 3){
    setText('Effective selling often requires understanding customer needs, communicating the value proposition of the offering')
   }

}
  return (
    <>

      <div className='title '>HOW TO INVEST?</div>
      <div className='titleBody'>It is one of the most important asset classes to own and to build long term</div>
      
      <div style={{"width":"40%"}}>
          <div className='split left'>
          <Carousel className='carousel' slide={false} onSlide={handlePageChange} variant='dark' >
            <Carousel.Item >
              <h5>Browse</h5>
              <p>Sign up in less than 3 minutes and browse <br />our collection of properties</p>
            </Carousel.Item>
            <Carousel.Item>
            <h5>Filter</h5>
                <p>Buy a piece of the ones you love,<br />starting from only AED500</p>
            </Carousel.Item>
            <Carousel.Item>
            <h5>Select</h5>
                <p>Buy a piece of the ones you love,<br />starting from only AED500</p>
            </Carousel.Item>
          </Carousel>
            </div> 
            <div className='split right'>
              <div id = "parent">
                <div className='messages shadow p-3 mb-5 bg-white rounded border'>
                <p style={{"textSizeAdjust":"10px"}}>{text}</p>
                </div>
                <div className='phone'><Image src={img} style={{"height":"60%","width":"55%"}}/> </div>
               </div>
            </div>
      </div>
    </>
  );
}

export default App;
