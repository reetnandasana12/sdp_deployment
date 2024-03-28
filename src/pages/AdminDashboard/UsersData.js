import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
// import useUser from '../getUser';
// import useSeller from '../getSeller';
import {
  getAllUsers,
  getAllOwners,
} from "../redux/action/userActions";

// import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// import { getAllUsers } from "../pages/redux/action/hotelActions";
function UsersData() {
  // const users = useUser();
  // const owners = useSeller();
  var dispatch = useDispatch();

  const { users } = useSelector((state) => state.userReducer);
  const { owners } = useSelector((state) => state.userReducer);
  // console.log(bookings);
  useEffect(() => {
      dispatch(getAllUsers());
      dispatch(getAllOwners());
  }, []);

  
  useEffect(() => {
    if (users && owners && users.length > 0 && owners.length > 0) {
      drawChart('distributionChart', users, owners);
    }
  }, [users, owners]);

  const drawChart = (canvasId, users, owners) => {
    if (!users || !owners) return;

    const totalUsers = users.length;
    const totalowners = owners.length;
    const existingChart = Chart.getChart(canvasId);
    if (existingChart) {
      existingChart.destroy();
    }
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: ['Users', 'owners'],
        datasets: [{
          label: 'Distribution',
          data: [totalUsers, totalowners],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1,
        }]
      },
      options: {
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: Math.max(totalUsers, totalowners)
          }
        }
      }
    });
  };

  return (
    <div style={{ width: '40%', margin: 'auto' }}>
      <center>User and Seller Distribution</center>
      <canvas id="distributionChart" width="100" height="50"></canvas>
    </div>
  );
}

export default UsersData;