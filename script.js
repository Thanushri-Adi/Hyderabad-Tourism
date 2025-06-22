function searchbar() {
  const query = document.getElementById('searchBar').value.toLowerCase();

  if (!query.trim()) return;

  if (query.includes('charminar')) {
    window.location.href = 'attractions.html#charminar';
  } else if (query.includes('golconda')) {
    window.location.href = 'attractions.html#golconda';
  } else if (query.includes('hussain') || query.includes('lake')) {
    window.location.href = 'attractions.html#hussainsagar';
  } else if (query.includes('ramoji')) {
    window.location.href = 'attractions.html#ramoji';
  } else if (query.includes('home')) {
    window.location.href = 'index.html';
  } else if (query.includes('about')) {
    window.location.href = 'about.html';
  } else if (query.includes('contact')) {
    window.location.href = 'contact.html';
  } else if (query.includes('attraction')) {
    window.location.href = 'attractions.html';
  } else {
    alert('Sorry, no match found.');
  }
}
