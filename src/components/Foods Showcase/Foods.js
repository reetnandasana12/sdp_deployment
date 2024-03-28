// import useFetch from '../../hooks/useFetch';
import FoodItem from './FoodItem';
import Skeleton from './Skeleton';
import React , {useState,useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux'
// import DefaultLayout from '../components/DefaultLayout'
import { getAllHotels } from '../../pages/redux/action/hotelActions'
// import { Button, Col, Row } from 'antd'
// import {Link} from 'react-router-dom'
const Foods = () => {
    const [menuTab, setMenuTab] = useState('Breakfast')
    const [loading, setLoading] = useState(false)
    // const [foods] = useFetch();

    //loading 
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },1000)
    },[])

    //food menu tab 
    const handleMenuTabs = (type) => {
        setMenuTab(type)
    }
    //default end



    //change is here
    const {hotels} = useSelector(state=>state.hotelsReducer)
    const dispatch = useDispatch()
  
    useEffect(() => {
        dispatch(getAllHotels())
    }, [])



    return (
        <section className="my-12 max-w-screen-xl mx-auto px-6">
            {/* food Menu tab  */}
            <div className="flex items-center justify-center space-x-6">
                <p className={menuTab === 'Breakfast' ? "active_menu_tab active poppins bg-primary" : "menu_tab poppins passive"} onClick={() => handleMenuTabs('Breakfast')}>Breakfast</p>
                <p className={menuTab === 'Lunch' ? "active_menu_tab active poppins bg-primary" : "menu_tab poppins passive"} onClick={() => handleMenuTabs('Lunch')}>Lunch</p>
                <p className={menuTab === 'Dinner' ? "active_menu_tab active poppins bg-primary" : "menu_tab poppins passive"} onClick={() => handleMenuTabs('Dinner')}>Dinner</p>
            </div>

            {/* all foods  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            {/* .filter((item) => menuTab === item.foodType) paste this */}
                {hotels.map(item => (
                    loading ? <Skeleton key={item._id} /> : <FoodItem key={item._id} {...item} />
                ))}
            </div>
        </section>
    )
}

export default Foods
