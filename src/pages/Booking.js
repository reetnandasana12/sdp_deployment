
import React , {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import {Link} from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'
import { getAllHotels } from './redux/action/hotelActions';

import { Container } from "@mui/material";
import Gallery from "../components/Gallery";
import Description from "../components/Description";
import MobileGallery from "../components/MobileGallery";
import "../backdrop.css";
function Booking(props) {
  const { hotelid } = useParams();
  
  const {hotels} = useSelector(state=>state.hotelsReducer)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getAllHotels())
  }, [])

  
  const hotel = hotels.find(hotel=>hotel._id===hotelid);
  console.log(hotel);
  if(hotel){
    console.log(hotel.images);
  }
  
  return (
    <DefaultLayout>
      <br></br>
      {/* <CarDetails hotel={hotel}/> */}
      <main className="App">
      {hotel?
            <Container component="section" maxWidth={"lg"}>
                <section className="core">
                    <Gallery images={hotel.images} />
                    <MobileGallery IMAGES={hotel.images}/>
                    <Description hotel={hotel}/>
                </section>
            </Container>
      :<>loading</>}
        </main>
      {/* <button>

      <Link to={`/bookform/${hotelid}`}>book table</Link>
      </button> */}
     
    </DefaultLayout>
  );
}

export default Booking;
