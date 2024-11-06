
  function calculateTotal() {
    let cartItems = document.querySelectorAll('.cart-item');
    let total = 0;

    cartItems.forEach(item => {
      let price = parseInt(item.getAttribute('data-price'));
      let quantity = parseInt(item.querySelector('.quantity').textContent);
      total += price * quantity;
    });

    document.getElementById('total-cost').textContent = total;
  }

  function changeQuantity(button, change) {
    let quantityElement = button.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);

    quantity += change;
    if (quantity < 1) quantity = 0;

    quantityElement.textContent = quantity;
    calculateTotal();
  }
  calculateTotal();

  
