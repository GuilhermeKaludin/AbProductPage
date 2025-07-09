(function () {
  // Pega os dados do localStorage
  const clicksA = Number(localStorage.getItem('clicks-A')) || 0;
  const clicksB = Number(localStorage.getItem('clicks-B')) || 0;

  // Cria o container do dashboard
  const dashboard = document.createElement('div');
  dashboard.style.marginTop = '40px';
  dashboard.style.padding = '20px';
  dashboard.style.background = '#fff';
  dashboard.style.borderRadius = '12px';
  dashboard.style.boxShadow = '0 0 15px rgba(0,0,0,0.1)';
  dashboard.style.maxWidth = '400px';
  dashboard.style.fontFamily = 'Arial, sans-serif';

  dashboard.innerHTML = `
    <h3 style="margin-bottom: 20px; font-size: 1.5rem;">Dashboard de Cliques - CRO</h3>
    <p><strong>Variação A:</strong> ${clicksA} cliques</p>
    <p><strong>Variação B:</strong> ${clicksB} cliques</p>
  `;

  // Insere o dashboard na página (logo após o produto)
  const productCard = document.getElementById('product-card');
  productCard.parentNode.insertBefore(dashboard, productCard.nextSibling);
})();
