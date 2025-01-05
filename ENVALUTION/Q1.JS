const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];
function rearangeFruits(fruits){
    let removeFruits=fruits.splice(-4);
    fruits.unshift(...removeFruits);
    return fruits;
}
console.log(rearangeFruits(fruits))
