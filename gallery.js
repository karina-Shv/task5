const images = [
  {
    preview: 'https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg?w=300',
    original: 'https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg',
    description: 'Котик 1',
  },
  {
    preview: 'https://cdn.britannica.com/41/126641-050-E1CA0E61/cat-suns-hill-Parthenon-Athens-Greece-Acropolis.jpg?w=300',
    original: 'https://cdn.britannica.com/41/126641-050-E1CA0E61/cat-suns-hill-Parthenon-Athens-Greece-Acropolis.jpg',
    description: 'Котик 2',
  },
  {
    preview: 'https://cdn.britannica.com/93/181393-050-9FC2E61A/cat-Alison-Eldridge-orange-Calico.jpg?w=300',
    original: 'https://cdn.britannica.com/93/181393-050-9FC2E61A/cat-Alison-Eldridge-orange-Calico.jpg',
    description: 'Котик 3',
  },
  {
    preview: 'https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg?w=300',
    original: 'https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg',
    description: 'Котик 4',
  },
  {
    preview: 'https://cdn.britannica.com/39/226539-050-D21D7721/Portrait-of-a-cat-with-whiskers-visible.jpg?w=300',
    original: 'https://cdn.britannica.com/39/226539-050-D21D7721/Portrait-of-a-cat-with-whiskers-visible.jpg',
    description: 'Котик 5',
  },
  {
    preview: 'https://cdn.britannica.com/36/234736-050-4AC5B6D5/Scottish-fold-cat.jpg?w=300',
    original: 'https://cdn.britannica.com/36/234736-050-4AC5B6D5/Scottish-fold-cat.jpg',
    description: 'Котик 5',
  },
];

const gallery = document.querySelector('.gallery');

const markup = images
  .map(
    ({ preview, original, description }) => `
    <li>
      <img
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </li>
  `
  )
  .join('');

gallery.innerHTML = markup;

// Делегування подій
gallery.addEventListener('click', (event) => {
  event.preventDefault();

  const img = event.target.closest('img');
  if (!img) return;

  const largeImageURL = img.dataset.source;
  console.log('Велике зображення:', largeImageURL);
});
