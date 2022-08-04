const items = document.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`)


// items.forEach(element =>
//     console.log(`Category: ${element
//         .firstElementChild
//         .textContent}`)
//     +
//     console.log(`Elements: ${element
//         .querySelectorAll('li')
//         .length}`)
    
// );

for (let item of items) {
    console.log(`Category: ${item
        .firstElementChild
        .textContent}`)
    
        console.log(`Elements: ${item
        .querySelectorAll('li')
        .length}`)
}