const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsContainer = document.querySelector("#ingredients");

let totalList = []

ingredients.forEach((ing) => {
let elemLi
  elemLi = document.createElement('li')
  elemLi.textContent = ing
  elemLi.classList.add("item")
  totalList.push(elemLi)

})


ingredientsContainer.append(...totalList)


// OR:

// const ingredientsContainer = document.querySelector("#ingredients");

// ingredients.forEach((ing) => {
// let elemLi
//   elemLi = document.createElement('li')
//   elemLi.textContent = ing
//   elemLi.classList.add("item")
//   // ingredientsContainer.append(elemLi)
// })




