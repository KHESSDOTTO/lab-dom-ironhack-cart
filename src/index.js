// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');
  const subtotalVal = Number(price.innerHTML) * quantity.value;

  subtotal.innerHTML = subtotalVal;
  return subtotalVal;
};

function calculateAll() {
  // ITERATION 2
  const selection = document.getElementsByClassName('product');
  const arr = [];

  for (let i = 0; i < selection.length; i++) {
    arr.push(updateSubtotal(selection[i]));
  };

  // ITERATION 3
  const sumArr = arr.reduce((count, curr) => count + curr, 0);
  const total = document.getElementById('total-value').querySelector('span');
  total.innerHTML = sumArr;
};

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
};

// ITERATION 5

function createProduct() {
  //... your code goes here
};

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let allRemoveBtns = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < allRemoveBtns.length; i++) {
    allRemoveBtns[i].addEventListener('click', removeProduct);
  };
});
