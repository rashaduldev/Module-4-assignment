let cartItems=[];

export function addToCart(product,quantity=1){
    const hitItem =cartItems.find(item=>item.product.id===product.id);
    if(hitItem){
        hitItem.quantity+=quantity;
    } 
    else{
        cartItems.push({product,quantity});
    }
}