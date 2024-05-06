const janela = document.getElementById('janela');
const status = document.getElementById('status');

janela.addEventListener('mouseenter', () => {
  janela.src = 'janela-aberta.avif';
  status.textContent = 'Janela Aberta';
});

janela.addEventListener('mouseleave', () => {
  janela.src = 'janela-fechada.webp';
  status.textContent = 'Janela Fechada';
});

janela.addEventListener('click', () => {
  janela.src = 'janela-quebrada.webp';
  status.textContent = 'Janela Quebrada';
});