const additionalImages = [
    { src: '../assets/1.jpeg', alt: 'Imagem 5' },
    { src: '../assets/2.jpeg', alt: 'Imagem 6' },
    { src: '../assets/3.jpeg', alt: 'Imagem 7' },
    { src: '../assets/4.jpeg', alt: 'Imagem 8' }
];

// Remove imagens adicionais e mostra os textos
function hideAdditionalImagesAndShowText() {
    const imagesContainer = document.querySelector('.images');
    const textElements = document.querySelectorAll('.text-container'); // Seleciona todos os elementos de texto

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

    imagesContainer.classList.remove('expanded');

}

// Muda os textos ao clicar nas imagens
function changeText(imageNumber) {
    const sectionTitle = document.getElementById('section-title');
    const subtitle1 = document.getElementById('subtitle1');
    const subtitle2 = document.getElementById('subtitle2');
    const subtitle3 = document.getElementById('subtitle3');

    const additionalImagesDisplayed = additionalImages.some(image => {
        return document.querySelector(`img[src="${image.src}"]`);
    });


    if (additionalImagesDisplayed && imageNumber <= 4) {
        hideAdditionalImagesAndShowText();
        additionalImagesShown = false;
    } else {
        switch (imageNumber) {
            case 1:
                sectionTitle.textContent = 'O que o Spotify tem?';
                subtitle1.innerHTML = '<h3>Músicas</h3>' +
                    '<p>O Spotify tem milhões de músicas. Escute seus sons favoritos, descubra novas músicas e reúna seus favoritos em um só lugar.\n' +
                    '\n</p>';
                subtitle2.innerHTML = '<h3>Playlists</h3><p>No Spotify você encontra uma playlist para cada momento. Todas feitas por fanáticos e especialistas da música.</p>';
                subtitle3.innerHTML = '<h3>Novos lançamentos</h3><p>Escute os novos lançamentos de singles e álbuns da semana e veja o que está bombando no Top 50.</p>';
                sectionTitle.classList.remove('move-left'); // Remove a classe se estiver presente
                sectionTitle.classList.remove('centered-title'); // Remove a classe se estiver presente
                break;
            case 2:
                subtitle2.innerHTML = ''; // Limpa o conteúdo do subtitle2
                subtitle3.innerHTML = ''; // Limpa o conteúdo do subtitle3
                sectionTitle.textContent = 'Título da Seção 2';
                subtitle1.innerHTML = '<h3 class="image-text-2">Subtítulo</h3><p class="image-text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>';
                sectionTitle.classList.remove('move-left'); // Remove a classe se estiver presente
                sectionTitle.classList.add('centered-title');
                break;
            case 3:
                sectionTitle.classList.add('move-left'); // Adiciona a classe move-left para iniciar a animação
                sectionTitle.textContent = 'Título da Seção 2';
                subtitle1.innerHTML = '<h3>Subtítulo 1</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas..</p>';
                subtitle2.innerHTML = '<h3 class="move-left">Subtítulo 2</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>';
                subtitle3.innerHTML = '<h3>Subtítulo 3</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>';
                sectionTitle.classList.remove('centered-title'); // Remove a classe se estiver presente
                break;
            case 4:
                showOtherImages();
                break;
        }
    }
}

let additionalImagesShown = false;

//Mostra as outras imagens quando quarta for clicada
function showOtherImages() {
    if (additionalImagesShown) {
        return;
    }

    const imagesContainer = document.querySelector('.images');
    const textElements = document.querySelectorAll('.text-container');

    additionalImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imagesContainer.appendChild(imgElement);
    });

    textElements.forEach(element => {
        element.style.display = 'none';
    });
    imagesContainer.classList.add('expanded');
    additionalImagesShown = true;
}

