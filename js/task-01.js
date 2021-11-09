const list = document.querySelector('#categories');

const allItems = list.querySelectorAll('.item');
console.log(`Numbers of categories: ${allItems.length}`);

const allEl = allItems.forEach(item => {
  const categoryElem = item.querySelector('h2').textContent;
  console.log(`Category: ${categoryElem}`);
  const elementsCount = item.querySelectorAll('li');
  console.log(`Elements: ${elementsCount.length}`);
});