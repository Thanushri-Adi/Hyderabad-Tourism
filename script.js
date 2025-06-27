function searchbar() {
  const query = document.getElementById('searchBar').value.toLowerCase().trim();

  if (!query) return;

  if (query.includes('charminar')) {
    window.location.href = 'attractions.html#charminar';
  } else if (query.includes('golconda') || query.includes('fort')) {
    window.location.href = 'attractions.html#golconda';
  } else if (query.includes('hussain') || query.includes('lake') || query.includes('sagar')) {
    window.location.href = 'attractions.html#hussainsagar';
  } else if (query.includes('ramoji')) {
    window.location.href = 'attractions.html#ramoji';
  } else if (query.includes('statue') || query.includes('equality')) {
    window.location.href = 'attractions.html#statue-equality';
  } else if (query.includes('wonderla')) {
    window.location.href = 'attractions.html#wonderla';
  } else if (query.includes('zoo') || query.includes('nehru')) {
    window.location.href = 'attractions.html#zoo-park';
  } else if (query.includes('birla mandir')) {
    window.location.href = 'attractions.html#birla-mandir';
  } else if (query.includes('planetarium') || query.includes('birla planetarium')) {
    window.location.href = 'attractions.html#planetarium';
  } else if (query.includes('qutub') || query.includes('shahi')) {
    window.location.href = 'attractions.html#qutub-shahi';
  } else if (query.includes('snow')) {
    window.location.href = 'attractions.html#snow-world';
  } else if (query.includes('nizam')) {
    window.location.href = 'attractions.html#nizam-museum';
  } else if (query.includes('jagannath')) {
    window.location.href = 'attractions.html#jagannath-temple';
  } else if (query.includes('mecca') || query.includes('masjid')) {
    window.location.href = 'attractions.html#mecca-masjid';
  } else if (query.includes('iskcon') || query.includes('krishna')) {
    window.location.href = 'attractions.html#iskcon';
  } else if (query.includes('shilparamam')) {
    window.location.href = 'attractions.html#shilparamam';
  } else if (query.includes('home')) {
    window.location.href = 'index.html';
  } else if (query.includes('about')) {
    window.location.href = 'about.html';
  } else if (query.includes('contact')) {
    window.location.href = 'contact.html';
  } else if (query.includes('attraction') || query.includes('places')) {
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


document.querySelector('.contact-form form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been received.`);
    this.reset(); // Clear form
  } else {
    alert("Please fill out all fields before submitting.");
  }
});

