// Selecionando o botão e o menu
const burgerButton = document.getElementById('burguer');
const menu = document.getElementById('navbarTogglerDemo01');

// Adicionando o evento de clique
burgerButton.addEventListener('click', function() {
    menu.classList.toggle('show');
});
