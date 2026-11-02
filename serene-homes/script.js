const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navigation.classList.toggle('open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('open');
  });
});

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.filter').forEach((item) => item.classList.toggle('active', item === button));
    document.querySelectorAll('.property-card').forEach((card) => {
      card.hidden = filter !== 'all' && card.dataset.type !== filter;
    });
  });
});

document.querySelectorAll('.save').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    const saved = button.classList.toggle('saved');
    button.textContent = saved ? '♥' : '♡';
    button.setAttribute('aria-pressed', String(saved));
  });
});

const clientQuotes = [
  '“They understood what we were looking for before we had the words for it.”',
  '“From the first viewing, it felt like they were helping us find our home.”',
  '“Thoughtful, patient, and always one step ahead. We couldn’t have asked for more.”'
];
let quoteIndex = 0;
const quote = document.querySelector('.quote-content blockquote');
const quoteButtons = document.querySelectorAll('.quote-arrows button');
quoteButtons[0].addEventListener('click', () => {
  quoteIndex = (quoteIndex - 1 + clientQuotes.length) % clientQuotes.length;
  quote.textContent = clientQuotes[quoteIndex];
});
quoteButtons[1].addEventListener('click', () => {
  quoteIndex = (quoteIndex + 1) % clientQuotes.length;
  quote.textContent = clientQuotes[quoteIndex];
});

