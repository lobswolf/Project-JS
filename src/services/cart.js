//quais ações meu carrinho pode fazer

//dados de uso
// ->adionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);  
  }
  
  // ->deletar item do carrinho
  async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    
    if(index !== -1){
      userCart.splice(index, 1);
    }
  }
  
  // ->remover um item
  async function removeItem(userCart, item, index) {
    //transforma o indice visual do usuario, para o indice do backend
    const deleteIndex = index -1;
  
    //é maior do que zero e se é menor do que o tamanho do carrinho
    if(index >= 0 && index < userCart.length) {
      userCart.splice(deleteIndex, 1);
    } 
  
  //1. encontrar o indice do item
     const indexFound = userCart.findIndex((p) => p.name === item.name)
  
     //2. Caso não encontre o item 
     if (indexFound == -1){
      console.log("item não encontrado");
      return;
     }
  
     //3. item > 1 subtrair um item
     if (userCart [indexFound].quantity > 1) {
      userCart [indexFound].quantity -= 1;
     }
  
     //4. caso item = 1 deletar item
     if(userCart[indexFound].quantity ==1) {
      userCart.splice(indexFound, 1);
     }
    }
  
  //Display
  async function displayCart(userCart) {
    console.log("\nShopee cart list:")
    userCart.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal ${item.subtotal()} `);
    });
    
  }
  
  // ->calcular o total 
  async function calculateTotal(userCart) {
    console.log("\n🛒 Shopee Cart TOTAL IS:");
    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0);  
    console.log(`Total: ${result}`);
  }
  
  export {
      addItem, 
      calculateTotal, 
      deleteItem, 
      removeItem,
      displayCart
  };