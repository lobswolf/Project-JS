import * as cartServices from "./services/cart.js"
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your shopee cart!");

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborguini", 39.99, 3);

//Adicionei dois itens ao carrinho
await cartServices.addItem(myCart, item1);
await cartServices.addItem(myCart, item2);
await cartServices.displayCart(myCart);

//Remover item
await cartServices.removeItem(myCart, 2);

//Deletei dois itens do carrinho
//await cartServices.deleteItem(myCart, item2.name);
//await cartServices.deleteItem(myCart, item1.name);

await cartServices.calculateTotal(myCart);