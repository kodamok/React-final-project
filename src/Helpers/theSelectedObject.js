// HERE THIS FUNCTION SELECTS A SPECFIC OBJECT SELCTED 
// BY THE USER IN ORDER TO EXTACT THE NECESSARY INFORMATION
// THIS FUNCTION INTERACTS WITH THE OTHER FUNCTIONS
// SO I CAN POPULATE THE KART

const specificObject = function onlyTheObject(input, id) {
  let object;
  let getArrayWithItem = input.filter((selectedItem) => selectedItem.id === id);
  
  if (getArrayWithItem.length === 0) {
    object = { quantity: 0, index: 0, title: "", id: 0 };
  } else if(getArrayWithItem.length > 0){
    object = getArrayWithItem[0];
  } 

  return object;
};

export default specificObject;
