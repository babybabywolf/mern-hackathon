import { getToken } from '../../utilities/users-service';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OrderHistoryPage.css';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderList from '../../components/OrderList/OrderList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import * as ordersAPI from '../../utilities/orders-api';
import { OrderListItem } from '../../components/OrderListItem/OrderListItem';

export default function OrderHistoryPage({ user, setUser }) {
  
  const [orderHistory, setOrderHistory] = useState([]);
  const [activeOrder, setActiveOrder] = useState('')

  useEffect(function(){
    async function getOrders(){
      const Orders = await ordersAPI.getAll();
      setOrderHistory(Orders)
      
    }
    getOrders();
  }, [])

  // console.log(orderHistory)

  function handleOrderClick(order){
    setActiveOrder(order)
  }
  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <OrderList orderHistory={orderHistory} handleOrderClick={handleOrderClick}/>

      <OrderDetail order={activeOrder}/>

    </main>
  );
}