(function () {
  const experimentName = 'produto-page';

  let variation = 'A';

  if (!variation) {
    variation = Math.random() < 0.5 ? 'A' : 'B';
    localStorage.setItem('ab-' + experimentName, variation);
  }

  const config = {
    A: {
      title: "Tênis Esportivo Pro X",
      image: "img/tenisa.jpg", 
      buttonText: "Compre agora",
      buttonClass: "button",
      description: "O tênis ideal para sua performance."
    },
    B: {
      title: "Super Tênis para Atletas",
      image: "img/tenisb.jpg", 
      buttonText: "Garanta o seu!",
      buttonClass: "button green",
      description: "A escolha dos campeões de corrida."
    }
  };

  const product = config[variation];

  const productCard = document.getElementById('product-card');

  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.title}" class="product-image" />
    <h2 class="product-title">${product.title}</h2>
    <p class="product-description">${product.description}</p>
    <button class="${product.buttonClass}" id="buy-button">${product.buttonText}</button>
  `;

  document.getElementById('buy-button').addEventListener('click', () => {
    const key = 'clicks-' + variation;
    const current = Number(localStorage.getItem(key)) || 0;
    localStorage.setItem(key, current + 1);
    alert(`Você clicou na variação ${variation}`);
    
  });
})();
