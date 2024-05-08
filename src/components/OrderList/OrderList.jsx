import { OrderListItem } from "../OrderListItem/OrderListItem";
import './OrderList.css'

export default function OrderList({orderHistory, handleOrderClick}){



    const orders = orderHistory.map((order, index)=>(<OrderListItem key={index} order={order} onClick={()=>handleOrderClick(order)}/>));
    
    return (
        <div className="OrderList" >
            
            {orders}
        
        </div>
        
    )}


  
