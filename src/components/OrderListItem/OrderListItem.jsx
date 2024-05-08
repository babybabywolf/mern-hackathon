import "./OrderListItem.css"
export function OrderListItem({order, onClick}){
    return (
        <div className = "OrderListItem" onClick={onClick}>

            <div className = "head-section">
               <span>Order Id:{order.orderId}</span>
            <span>${order.orderTotal.toFixed(2)}</span>
            </div>
            <div className ="body-section">
            <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
            <span>{order.totalQty} Items</span>
            </div>   
            
            
            
        </div>
    )
}