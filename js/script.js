// JavaScript para controle do carrossel
const carouselItems = document.querySelectorAll('.carousel .carousel-item');
let currentItem = 0;
const totalItems = carouselItems.length;
let autoplayInterval;

// Função para mostrar o item atual do carrossel
function showCarouselItem(index) {
    // Certifique-se de que o índice esteja dentro dos limites
    if (index < 0) {
        index = totalItems - 1;
    } else if (index >= totalItems) {
        index = 0;
    }

    // Oculta todos os itens do carrossel
    carouselItems.forEach(item => {
        item.classList.remove('active', 'next', 'exit');
    });

    // Define classes para os itens ativo, próximo e saindo
    carouselItems[index].classList.add('active');
    if (index === totalItems - 1) {
        carouselItems[0].classList.add('next');
    } else {
        carouselItems[index + 1].classList.add('next');
    }
    carouselItems[index].classList.add('exit');

    // Atualiza o índice do item atual
    currentItem = index;
}

// Função para avançar para o próximo item
function nextCarouselItem() {
    showCarouselItem(currentItem + 1);
}

// Função para voltar para o item anterior
function prevCarouselItem() {
    showCarouselItem(currentItem - 1);
}

// Função para iniciar o autoplay
function startAutoplay() {
    autoplayInterval = setInterval(nextCarouselItem, 5000); // Avança a cada 5 segundos (5000 milissegundos)
}

// Função para parar o autoplay
function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Event listeners para os botões de controle do carrossel
document.getElementById('nextBtn').addEventListener('click', () => {
    stopAutoplay();
    nextCarouselItem();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    stopAutoplay();
    prevCarouselItem();
});

// Inicia o autoplay ao carregar a página
startAutoplay();

// Mostra o primeiro item inicialmente
showCarouselItem(currentItem);

// Array de imagens adicionais que serão exibidas ao clicar na quarta imagem
const additionalImages = [
    { src: '../assets/1.jpeg', alt: 'Imagem 5' },
    { src: '../assets/2.jpeg', alt: 'Imagem 6' },
    { src: '../assets/3.jpeg', alt: 'Imagem 7' },
    { src: '../assets/4.jpeg', alt: 'Imagem 8' }
];

// Função para remover as imagens adicionais e mostrar os textos
function hideAdditionalImagesAndShowText() {
    const imagesContainer = document.querySelector('.images');
    const textElements = document.querySelectorAll('.text'); // Seleciona todos os elementos de texto

    // Remover as imagens adicionais
    additionalImages.forEach(image => {
        const imgElement = document.querySelector(`img[src="${image.src}"]`);
        if (imgElement) {
            imagesContainer.removeChild(imgElement);
        }
    });

    // Mostrar os elementos de texto
    textElements.forEach(element => {
        element.style.display = '';
    });
}

// Função para mudar os textos ao clicar nas imagens
function changeText(imageNumber) {
    const sectionTitle = document.getElementById('section-title');
    const subtitle1 = document.getElementById('subtitle1');
    const subtitle2 = document.getElementById('subtitle2');
    const subtitle3 = document.getElementById('subtitle3');
    const textElements = document.querySelectorAll('.text'); // Seleciona todos os elementos de texto

    // Verifica se as imagens adicionais estão sendo exibidas
    const additionalImagesDisplayed = additionalImages.some(image => {
        return document.querySelector(`img[src="${image.src}"]`);
    });

    // Se as imagens adicionais estiverem sendo exibidas e uma das quatro primeiras imagens for clicada, ocultar as imagens adicionais e mostrar os textos
    if (additionalImagesDisplayed && imageNumber <= 4) {
        hideAdditionalImagesAndShowText();
        additionalImagesShown = false; // Redefine o estado para permitir que as imagens adicionais sejam mostradas novamente
    } else {
        // Lógica para atualizar os textos conforme o número da imagem
        switch (imageNumber) {
            case 1:
                sectionTitle.textContent = 'Título da Seção 2 - Imagem 1';
                subtitle1.innerHTML = '<h3>Subtítulo 1 - Imagem 1</h3><p>Texto explicativo 1 - Imagem 1.</p>';
                subtitle2.innerHTML = '<h3>Subtítulo 2 - Imagem 1</h3><p>Texto explicativo 2 - Imagem 1.</p>';
                subtitle3.innerHTML = '<h3>Subtítulo 3 - Imagem 1</h3><p>Texto explicativo 3 - Imagem 1.</p>';
                break;
            case 2:
                sectionTitle.textContent = 'Título da Seção 2 - Imagem 2';
                subtitle1.innerHTML = '<h3>Subtítulo 1 - Imagem 2</h3><p>Texto explicativo 1 - Imagem 2.</p>';
                subtitle2.innerHTML = '<h3>Subtítulo 2 - Imagem 2</h3><p>Texto explicativo 2 - Imagem 2.</p>';
                subtitle3.innerHTML = '<h3>Subtítulo 3 - Imagem 2</h3><p>Texto explicativo 3 - Imagem 2.</p>';
                break;
            case 3:
                sectionTitle.textContent = 'Título da Seção 2 - Imagem 3';
                subtitle1.innerHTML = '<h3>Subtítulo 1 - Imagem 3</h3><p>Texto explicativo 1 - Imagem 3.</p>';
                subtitle2.innerHTML = '<h3>Subtítulo 2 - Imagem 3</h3><p>Texto explicativo 2 - Imagem 3.</p>';
                subtitle3.innerHTML = '<h3>Subtítulo 3 - Imagem 3</h3><p>Texto explicativo 3 - Imagem 3.</p>';
                break;
            case 4:
                // Caso a quarta imagem seja clicada, mostrar outras imagens ao lado
                showOtherImages();
                break;
        }
    }
}

let additionalImagesShown = false; // Estado para rastrear se as imagens adicionais foram mostradas

// Função para mostrar outras imagens ao lado ao clicar na quarta imagem
function showOtherImages() {
    if (additionalImagesShown) {
        return; // Se as imagens adicionais já foram mostradas, não faça nada
    }

    const imagesContainer = document.querySelector('.images');
    const textElements = document.querySelectorAll('.text'); // Seleciona todos os elementos de texto que deseja ocultar

    // Adicionar as novas imagens ao container existente
    additionalImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imagesContainer.appendChild(imgElement);
    });

    // Ocultar os elementos de texto
    textElements.forEach(element => {
        element.style.display = 'none';
    });
// Ajustar a classe do container de imagens para expandir a grade
    imagesContainer.classList.add('expanded');
    additionalImagesShown = true; // Atualiza o estado para refletir que as imagens adicionais foram mostradas
}

