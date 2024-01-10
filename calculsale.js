let sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
  ];
let data=[] ;
function calculateSalesTotals(){
   
    for(let i=0;i<sales.length;i++){
       if( sales[i].discount===undefined){
        obj={};
        obj.item=sales[i].item;
        obj.sale=sales[i].original;
        obj.total=(sales[i].original*sales[i].stock);
        obj.stock=sales[i].stock;
        obj.original=sales[i].original;
       data.push(obj)
       }else{
        obj={};
        obj.discount=sales[i].discount;
        obj.item=sales[i].item;
        obj.sale= sales[i].original - sales[i].original * sales[i].discount;
        obj.total=obj.sale*sales[i].stock;
        obj.stock=sales[i].stock;
        obj.original=sales[i].original;
       data.push(obj)
       }
       
}
console.log(data)
} 
   

calculateSalesTotals()