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

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

// Optional: Auto-play
setInterval(() => plusSlides(1), 5000);
