import { OrderListItem } from "../OrderListItem/OrderListItem";

export default function OrderList({orderHistory}){
    
    return (
        <div>
            
            {orderHistory.map((order, index)=>(<OrderListItem key={index} order={order} />))}
        
        </div>
        
    )}


  
