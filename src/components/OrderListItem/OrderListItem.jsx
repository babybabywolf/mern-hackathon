export function OrderListItem({order}){
    return (
        <div>
            Order Id:{order.orderId}
            Total:{order.orderTotal}
            {order.updatedAt}
            {order.totalQty}
        </div>
    )
}