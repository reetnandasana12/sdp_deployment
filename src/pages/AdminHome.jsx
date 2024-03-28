import React , {useEffect} from 'react'
import UsersData from './AdminDashboard/UsersData';
import HotelData from './AdminDashboard/HotelData';
import UserBookings from './AdminDashboard/UserBookings';
// import { useSelector , useDispatch } from 'react-redux'
// import { getAllHotels } from './redux/action/hotelActions'

const AdminHome = () => {

  // const {hotels} = useSelector(state=>state.hotelsReducer)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //     dispatch(getAllHotels())
  // }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginTop:'100px' }}>
      {/* First Row */}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
        <div style={{ width: '50%' }}>
          <UserBookings />
        </div>
        <div style={{ width: '45%' }}>
          {/* <Revenue /> */}
        </div>
      </div>
      {/* Second Row */}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
        <div style={{ width: '50%' }}>
          <HotelData />
        </div>
        <div style={{ width: '45%' }}>
          <UsersData />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;