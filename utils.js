export function findById(id, items){
    // loop through the items
    for (let item of items){
        // if the item's id is equal to the id argument, return the item
        if (item.id === id){
            return item;
        }
        // else continue the loop
    }
}