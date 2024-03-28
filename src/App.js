import { Routes, Route, Navigate } from "react-router-dom";
import AddHotel from "./pages/AddHotel";
import "./App.css";
import EditHotel from "./pages/EditHotel";
import AdminHome from "./pages/AdminHome";
import SignInScreen from "./pages/SignInScreen";
import Booking from "./pages/Booking";
import SignUpScreen from "./pages/SignUpScreen";
import HomeScreen from "./pages/HomeScreen";
import PlaceOrderScreen from "./pages/PlaceOrderScreen";
import OrderSuccessfulScreen from "./pages/OrderSuccessfulScreen";
import SelectUser from "./pages/SelectUser";
import AdminDashBoard from "./pages/AdminDashBoard";
import BookingForm from "./pages/BookingForm";
import SortableTable from "./pages/Sortabletable";
import TableResevation from "./pages/TableResevation";
import Navbar from "./pages/Navbar/Navbar";
import BookingHistory from "./pages/BookingHistory";
import CheckPage from "./components/CheckPage";
import OwnerHomePage from "./pages/OwnerHomePage";
import AddMenu from "./pages/AddMenu";
import ShowMenu from "./pages/ShowMenu";
import EditMenu from "./pages/EditMenu";
import GalleryView from "./pages/GalleryView";
import Menu from "./pages/Menu";

function App() {

    const user = localStorage.getItem("type");
    const verify = localStorage.getItem("verify");
    
    return (
        <div>
            <Navbar />
            <Routes>
                {/* <Route
					exact
					path="/auth/login/success"
					element={user ? <Home user={user} /> : <Navigate to="/login" />}
				/> */}
                <Route exact path="/" element=<SelectUser /> />

                <Route exact path="/selectUser" element=<SelectUser /> />

                <Route exact path="/login" element=<SignInScreen /> />
                <Route exact path="/signup" element={user!=="admin"?<SignUpScreen />: <SignInScreen /> }/>
                <Route path="/CheckPage" exact element=<CheckPage /> />

                {/* user */}
                
                <Route
                    exact
                    path="/home"
                    element={(user==="user" && verify) ? <HomeScreen /> : <SelectUser />}
                />

                <Route
                    path="/booking/:hotelid"
                    exact
                    element={(user==="user" && verify) ? <Booking /> : <SelectUser />}
                />

                <Route exact path="/menu/:id" element={(user==="user" && verify) ?<Menu />: <SelectUser />} />
                
                <Route exact path="/bookform/:id" element={(user==="user" && verify) ?<BookingForm />: <SelectUser />} />

                <Route
                    path="/ordersuccess"
                    exact
                    element={(user==="user" && verify) ? <OrderSuccessfulScreen /> : <SelectUser />}
                />
                <Route
                    exact
                    path="/bookinghistory"
                    element={(user==="user" && verify) ?<BookingHistory />: <SelectUser />}
                />

                {/* owner */}
                <Route exact path="/ownerhome" element=<OwnerHomePage /> />

                <Route exact path="/addhotel" element=<AddHotel /> />
                <Route exact path="/addmenu/:id" element=<AddMenu /> />
                <Route exact path="/editmenu/:id" element=<EditMenu /> />
                <Route exact path="/showmenu/:hotelid" element=<ShowMenu /> />

                <Route exact path="/edithotel/:hotelid" element=<EditHotel /> />

                <Route exact path="/backdrop" element=<GalleryView /> />

                
                <Route exact path="/sort/:hotelid" element=<SortableTable /> />
                

                <Route
                    exact
                    path="/admindashboard"
                    element=<AdminDashBoard />
                />
                <Route exact path="/edithotel" element=<EditHotel /> />

                
                <Route exact path="/table" element=<TableResevation /> />

                <Route path="/placeorder" exact element=<PlaceOrderScreen /> />

                {/* Admin */}
                <Route exact path="/adminhome" element={(user==="admin" && verify) ?<AdminHome />:<SignInScreen/> } />

            </Routes>
        </div>
    );
}

export default App;
