import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllMenus,
} from "../pages/redux/action/menuAction";
const Menu = () => {

  
  const { menus:menuItems } = useSelector((state) => state.menuReducer);

  var dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMenus());
}, []);


  // const [menuItems] = useState([
  //   { name: "Item 1", price: 10 },
  //   { name: "Item 2", price: 12 },
  //   { name: "Item 3", price: 15 },
  // ]);

  const [counter, setCounter] = useState(0);

  const handleCheckboxClick = (price, checked) => {
    if (checked) {
      setCounter(counter + Number(price));
    } else {
      setCounter(counter - Number(price));
    }
  };

  return (
    
    <div
      style={{
        marginTop: "100px",
        textAlign: "center",
        backgroundColor: "hsl(26, 100%, 55%)", // Set the lighter dark background color
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Add a subtle box shadow
      }}
    >
      <h2 style={{ color: "#fff" }}>Total Items: {menuItems.length}</h2>
      <ul style={{ padding: 0, margin: 0 }}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center", // Align items vertically
              padding: "10px",
              borderBottom: "1px solid #ccc",
              transition: "background-color 0.3s", // Add transition effect
              cursor: "pointer", // Add pointer cursor on hover
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#444"; // Change background color on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent"; // Revert background color on mouse leave
            }}
          >
            <span
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "16px",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              {item.name}
            </span>
            <span
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "16px",
                color: "#ccc",
              }}
            >
              ${item.price}
            </span>
            <input
              type="checkbox"
              style={{ marginLeft: "10px" }} // Add space between price and checkbox
              onClick={(e) => handleCheckboxClick(item.price, e.target.checked)} // Increment or decrement counter based on checkbox state
            />
          </li>
        ))}
      </ul>
      <h3 style={{ color: "#fff", fontSize: "24px", marginTop: "20px" }}>Total Price: ${counter}</h3>
    </div>
  );
};

export default Menu;
