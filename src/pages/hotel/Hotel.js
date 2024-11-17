import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
 
   const photos = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8d51H4TwxQwMIEYChnsgpFbILb1A8PWN0Gw&s"
    },
    {
      src: "https://5.imimg.com/data5/UQ/YU/MY-51450958/complete-washroom-design-and-interior.jpg"
    },
    {
      src: "https://birdeco.com/cdn/shop/files/Flat-Design-Wall-Molding-TV-Unit-Desing-Ready-to-Assemble-Wall-Moulding-Kit-Highest-Quality-Wall-Moldings-and-Decor-Products-at-Birdeco-7987_24a70eb2-248f-45a3-b54a-c458ffb4eba4_533x.webp?v=1731680466"
    },
    {
      src: "https://cdn.prod.website-files.com/601ca16f0bb27e965ee867a0/63d1a435eaa9f70379d8ee34_AUSTIN%20ALAMO%20HEIGHTS_Modern%20Farmhouse_Black%20NIGHT%2001.webp"
    },
    {
      src: "https://media.designcafe.com/wp-content/uploads/2023/05/11214519/pvc-wall-moulding-frame-in-beige-grey.jpg"
    },
    {
      src: "https://www.georgepanel.com/wp-content/uploads/sites/174/brizy/imgs/00-living-room-wall-molding-789x524x0x18x789x488x1686647940.jpg"
    },
   
   ]

    const handleOpen = (i)=>{
      setSlideNumber(i);
      setOpen(true)
    }

    const handleMove=(direction)=>{
      let newSlideNumber;

      if(direction==="l"){
        newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1;
      }else{
        newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1; 
      }
      setSlideNumber(newSlideNumber)
    }
  return (
    <div>
      <Navbar />
      <Header type="List" />
      <div className="hotelContainer">
        {open  && <div className="slider">
         <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
         <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
         <div className="slideWrapper">
          <img src={photos[slideNumber].src} alt="" className="sliderImg"/>
         </div>
         <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
              
        </div>
        
        
        }
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAdress">

            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton St  125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>

          <div className="hotelImages">
            {photos.map((photo,i) =>(
              <div className="hotelImgWrapper">
                  <img 
                  onClick={()=> handleOpen(i)} 
                  src={photo.src} 
                  alt="" 
                  className="hotelImg"/>
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Located a  5-minute walk  from St. Florians Gate in Krakow, Tower Street
                Apartments has accommodations with air conditioning and free WiFi. The units
                come with hardwood floors and features a fully equiped kitchenette with a microwave,
                a flat scren TV, and a private bathroom with shower and a hairdryer.
              </p>
            </div>
            <div className="hotelDetailsPrice">
                    <h1>Perfect for a 9-night stay!</h1>
                    <span>
                      <h2>
                        <b>$945</b> (9 nights)
                      </h2>
                      <button>Reserve or Book Now!</button>
                    </span>
            </div>
          </div>
        </div>
      <MailList/>
      <Footer/>
      </div>
    </div>
  );
}

export default Hotel;
