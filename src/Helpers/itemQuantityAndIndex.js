//Creates an Array of independant Object with
//the Index, the quantity, the id and the title 
//of the items added to the Kart
// WITH THIS FUNCTION I CAN HAVE THE BASIC INFORMATION FROM 
// THE ITEMS WHICH ARE SELECTED BY THE USER AND NOT LOSE
// THEM IN THE USER NAVIGATION THORUGH THE APP

//EXAMPLE:
//[{quantity: 1, id: 1, title: "this is a Title"}, {quantity: 1, id: 2, title: "this is a Title"}, {quantity: 1, id: 3, title: "this is a Title"},]

const itemQuantityAndIndex = (kart) => {
    let quantityIndexTitleArray = [];
    if (kart.length === 0) {
      quantityIndexTitleArray = [{}];
    } else if (kart.length > 0) {
      kart.forEach((item, index) => {
        const title = item.title;
        const quantity = item.quantity;
        const theIndex = index;
        const id = item.id
        quantityIndexTitleArray = [
          ...quantityIndexTitleArray, {quantity: quantity, index: theIndex, title: title, id:id },
        ];
      });
    }
    return quantityIndexTitleArray;
  };


  export default itemQuantityAndIndex