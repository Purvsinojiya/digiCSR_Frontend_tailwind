import React from 'react';
import Home from "./image_company-componant/HOME.png";
import "./homepage.css"
import Navbar from './Navbar';
import about from "./image_company-componant/about.png"
import Rectangle from "./image_company-componant/Rectangle.png";
import aboutp from "./image_company-componant/about-photo.png"
import home3 from "./image_company-componant/home3.png"
import about2 from "./image_company-componant/about2.png"
import facebook from "./image_company-componant/facebook.png"
import instagram from "./image_company-componant/instagram.png"
import twitter from "./image_company-componant/twitter.png"
import Linkdin from "./image_company-componant/Linkdin.png"
import PieChart from './Piechart';
function Homepage() {
  return (
    <>
    <div className='home-page-container'>
      <img className="background-img" src={Home}></img>
      <div className='block-about-container'>
        <div className='main-header'>Corporate Social Responsibility</div>
        <div className='second-header'>with DigiCSR</div>
        <div className='font-header'>Digicsr will help companies to ease their companies by genrating annual report,project & auditor's report</div>
        <div className='buttonsss'>
            <button id='button-p'>Login</button>
            <button id='button-s'>FILL THE FORM</button>
        </div>
      </div>
    </div>
    <PieChart></PieChart>
    <div className='second-part'>
    <img src={Rectangle}></img>
    <div className='font'>
    <div className='font1'>CSR Expenditure:</div>
    <div className='font2'>Summary</div>
    </div>
    <div className='card'>
        <div className='card1'>
            <p className='text-cards'>20845</p>
            <p className='text-cards2'>Total no. of Companies</p>
        </div>
        <div className='card1'>
            <p className='text-cards'>20845</p>
            <p className='text-cards2'>Total no. of Companies</p>
        </div>
        <div className='card1'>
            <p className='text-cards'>20845</p>
            <p className='text-cards2'>Total no. of Companies</p>
        </div>
        <div className='card1'>
            <p className='text-cards'>20845</p>
            <p className='text-cards2'>Total no. of Companies</p>
        </div>
        <div className='card1'>
            <p className='text-cards'>20845</p>
            <p className='text-cards2'>Total no. of Companies</p>
        </div>
        

        
    </div>
   
    </div>
    <div className='section-3'>
        <img  className='about-img' src={about}></img>
        <img  className='about-img2' src={aboutp
        }></img>
        <div className='text-y'>
        <p className='textus'>About us</p>
       
        <p className='text-t'>At DigiCSR , we believe in the power of Corporate Social Responsibility (CSR) to make a positive impact on society and the environment. As a leading provider of CSR management solutions, we are dedicated to helping companies navigate the complex world of social and environmental responsibility.</p>
        </div>
    </div>


    <div className='section-4'>
    <img  className='about-img3' src={about}></img>
    <div className='about5'>
    <div className='about-first-part'>
    <img src={about2} className='about4'></img>
    </div>
    <div className='about-first-second'>
       <div className='about-third'>
        <p className='hj'>123 Market St. #22B 
Charlottesville, California 44635</p>
<p className='hj'>(434) 546-4356</p>
<p>contact@digicsr</p>
       </div>
       <div className='about-thirds'>
        <p>Home</p>
        <p>Track</p>
        <p>Review</p>
        <p>About us</p>
       </div>
       <div className='about-third-images2'>
       <div className='about-i'>
       <img src={facebook}></img>
       <p>facebook</p>
       </div>
       <div className='about-i'>
       <img src={twitter}></img>
       <p>Twitter</p>
       </div>
       <div className='about-i'>
       <img src={Linkdin}></img>
       <p>Linkdin</p>
       </div>
       <div className='about-i'>
       <img src={instagram}></img>
       <p>Instagram</p>
       </div>
       </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Homepage
