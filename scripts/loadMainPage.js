const imageNames = ['Gatos.jpeg', 'Tatuagem.jpg', 'Paisagens.jpeg'];


function createCards() {
    const gridContainer = document.getElementById('imageGrid');

    imageNames.forEach(imageName => {
        const card = document.createElement('div');
        card.classList.add('card');

        const link = document.createElement('a')
        link.href = imageName.split('.')[0]

        const img = document.createElement('img');
        img.src = 'imgs/' + imageName; 
        img.alt = imageName;
        img.width = 350

        const text = document.createElement('div')
        text.classList.add('card-text')
        text.innerText = (imageName.split('.')[0]);

        link.appendChild(text);
        link.appendChild(img);

        card.appendChild(link)

        gridContainer.appendChild(card);})
        
    }

createCards();