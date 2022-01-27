// HERE I CRATED A FUNCTION THAT AD AND REMOVES ITEMS FROM THE KART
// 

const addRemoveFromKart = (valueOfButton, poster, kartItems, setKartItems) => {
  let copyKartItems;

  if (valueOfButton === "add") {
    const findTheItem = kartItems.find((item) => item.id === poster.id);

    if (findTheItem === undefined) {
      setKartItems([...kartItems, { ...poster, quantity: 1 }]);
    } else if (findTheItem !== undefined) {
      const index = kartItems.indexOf(findTheItem);

      findTheItem.quantity += 1;

      copyKartItems = [...kartItems];

      copyKartItems.splice(index, 1, findTheItem);

      setKartItems(copyKartItems);
    }
  }

  if (valueOfButton === "remove") {
    copyKartItems = kartItems.filter((item) =>
      item.quantity > 1 ? (item.quantity -= 1) : item.id !== poster.id
    );

    setKartItems(copyKartItems);
  }
};

export default addRemoveFromKart;
