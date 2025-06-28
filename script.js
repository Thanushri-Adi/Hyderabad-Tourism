// ---------------- SEARCHBAR FUNCTION ----------------
function searchbar() {
  const query = document.getElementById('searchBar').value.toLowerCase().trim();
  if (!query) return;

  if (query.includes('charminar')) {
    window.location.href = 'attractions.html#charminar';
  } else if (query.includes('golconda') || query.includes('fort')) {
    window.location.href = 'attractions.html#golconda';
  } else if (query.includes('hussain') || query.includes('lake') || query.includes('sagar')) {
    window.location.href = 'attractions.html#hussainsagar';
  } else if (query.includes('ramoji') || query.includes('film city')) {
    window.location.href = 'attractions.html#ramoji';
  } else if (query.includes('statue') || query.includes('equality')) {
    window.location.href = 'attractions.html#statue-equality';
  } else if (query.includes('wonderla')) {
    window.location.href = 'attractions.html#wonderla';
  } else if (query.includes('zoo') || query.includes('nehru')) {
    window.location.href = 'attractions.html#zoo-park';
  } else if (query.includes('birla mandir') || query.includes('birla')) {
    window.location.href = 'attractions.html#birla-mandir';
  } else if (query.includes('planetarium')) {
    window.location.href = 'attractions.html#planetarium';
  } else if (query.includes('qutub') || query.includes('shahi')) {
    window.location.href = 'attractions.html#qutub-shahi';
  } else if (query.includes('snow') || query.includes('world')) {
    window.location.href = 'attractions.html#snow-world';
  } else if (query.includes('nizam') || query.includes('museum')) {
    window.location.href = 'attractions.html#nizam-museum';
  } else if (query.includes('jagannath') || query.includes('temple')) {
    window.location.href = 'attractions.html#jagannath-temple';
  } else if (query.includes('mecca') || query.includes('masjid')) {
    window.location.href = 'attractions.html#mecca-masjid';
  } else if (query.includes('iskcon') || query.includes('krishna')) {
    window.location.href = 'attractions.html#iskcon';
  } else if (query.includes('shilparamam')) {
    window.location.href = 'attractions.html#shilparamam';
  } else if (query.includes('salar') || query.includes('salarjung')) {
    window.location.href = 'attractions.html#salarjung';
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

// ---------------- SLIDESHOW FUNCTION ----------------
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) { showSlides(slideIndex += n); }
function currentSlide(n) { showSlides(slideIndex = n); }
function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
  for (let i = 0; i < dots.length; i++) dots[i].classList.remove("active");

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

// ---------------- CONTACT FORM ----------------
document.querySelector('.contact-form form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been received.`);
    this.reset();
  } else {
    alert("Please fill out all fields before submitting.");
  }
});

// ---------------- CHATBOT TOGGLE ----------------
function toggleChat() {
  const chatbox = document.getElementById('chatbotBox');
  chatbox.style.display = (chatbox.style.display === 'flex') ? 'none' : 'flex';
}

// ---------------- FUZZY BOT REPLY LOGIC ----------------
const keywords = [
  // Attractions & Landmarks
  "charminar", "golconda", "ramoji", "fort", "forts", "temple", "temples",
  "museum", "museums", "planetarium", "lake", "hussainsagar", "snow world",
  "wonderla", "salarjung", "nizam", "birla mandir", "jagannath", "iskcon",

  // General Tourist Queries
  "attractions", "places", "visit", "explore", "recommend", "suggest",

  // User Types & Experience Preferences
  "fun", "kids", "children", "family", "couple", "friends", "solo", "tourist", "local",

  // Activities & Vibes
  "adventure", "thrill", "relax", "calm", "quiet", "peaceful", "nature", "gardens", "parks",
  "romantic", "photography", "scenic", "view", "spiritual", "meditation", "heritage walk", "guided tour",

  //  Food & Culture
  "food", "biryani", "eat", "cuisine", "dishes", "vegetarian", "street food", "night food", 
  "culture", "tradition", "festivals", "celebration", "qawwali", "cultural show",

  //  Shopping
  "shopping", "markets", "souvenirs", "bazaar", "bangles", "pearls",

  // Navigation & Timing
  "how to reach", "map", "location", "directions", "route", "distance", "nearby",
  "entry", "fees", "open", "closed", "timing", "ticket", "booking",

  //  Time & Weather
  "season", "weather", "climate", "best time", "summer", "winter", "monsoon",

  //  Stays
  "hotel", "stay", "area", "accommodation", "budget", "luxury",

  // Transport
  "transport", "metro", "bus", "auto", "cab", "ola", "uber", "airport",

  // Itinerary Planning
  "itinerary", "plan", "schedule", "weekend", "day trip", "two day", "short trip",

  // Basic Interactions
  "hello", "hi", "bye", "contact"
];




const fuse = new Fuse(keywords, {
  includeScore: true,
  threshold: 0.4,
});

// ---------------- SMART BOT RESPONSE ----------------

function getBotReply(userInput) {
  const input = userInput.toLowerCase().trim();
  const fuzzyMatch = fuse.search(input);
  const matchedKeyword = fuzzyMatch.length > 0 ? fuzzyMatch[0].item : input;

  if (matchedKeyword.includes("hello") || matchedKeyword.includes("hi") || matchedKeyword.includes("hey")) {
    return "Hello! Ask me about Hyderabad’s attractions, places to visit, or fun things to do!";
  }
  if (matchedKeyword.includes("charminar")) {
    return "Charminar is one of Hyderabad’s most famous historical attractions. You can know more details from the attractions page.";
  }
  if (matchedKeyword.includes("golconda") || matchedKeyword.includes("fort")) {
    return "You’ll love exploring attractions like Golconda Fort and Qutub Shahi Tombs! You can know more details from the attractions page.";
  }
  if (matchedKeyword.includes("temple")) {
    return "Top temple attractions include Birla Mandir, Jagannath Temple, and ISKCON. You can know more details from the attractions page.";
  }
  if (matchedKeyword.includes("museum")) {
    return "You can visit Salar Jung Museum and The Nizam’s Museum — both are cultural gems! You can know more details from the attractions page.";
  }
  if (matchedKeyword.includes("lake") || matchedKeyword.includes("hussainsagar")) {
    return "Hussain Sagar Lake is a relaxing water-based attraction in Hyderabad. You can know more details from the attractions page.";
  }
  if (matchedKeyword.includes("planetarium")) {
    return "Birla Planetarium is a great science attraction for kids and adults! You can know more details from the attractions page.";
  }
  if (matchedKeyword.includes("ramoji")) {
    return "Ramoji Film City is the perfect blend of cinema and adventure! You can know more details from the attractions page.";
  }
  if (matchedKeyword.includes("wonderla")) {
    return "Wonderla Hyderabad is a top-rated amusement park for all ages! You can know more details from the attractions page.";
  }
  if (matchedKeyword.includes("snow")) {
    return "Snow World gives you a snowy experience even in Hyderabad! You can know more details from the attractions page.";
  }
  if (matchedKeyword.includes("salarjung")) {
    return "Salar Jung Museum holds one of the largest antique collections in the world! You can know more details from the attractions page.";
  }
  if (matchedKeyword.includes("nizam")) {
    return "Nizam’s Museum gives you a glimpse into Hyderabad’s royal legacy. You can know more details from the attractions page.";
  }
  if (matchedKeyword.includes("jagannath")) {
    return "Shri Jagannath Temple is known for its colorful architecture and peaceful vibe. You can know more details from the attractions page.";
  }
  if (matchedKeyword.includes("iskcon") || matchedKeyword.includes("krishna")) {
    return "ISKCON Temple is a serene spiritual center in Hyderabad. You can know more details from the attractions page.";
  }

  if (matchedKeyword.includes("recommend") || matchedKeyword.includes("suggest")) {
    return "I'd recommend Charminar, Ramoji Film City, and Golconda Fort for first-time visitors. You can know more details from the attractions page.";
  }

  if (matchedKeyword.includes("ticket") || matchedKeyword.includes("timing") || matchedKeyword.includes("entry") || matchedKeyword.includes("fees")) {
    return "Timings and ticket prices vary by attraction — check the 'Know More' buttons for each on the site.";
  }

  if (matchedKeyword.includes("fun") || matchedKeyword.includes("adventure") || matchedKeyword.includes("thrill")) {
    return "Looking for fun? Try Wonderla, Snow World, Ramoji Film City, or Laser Tag at Smaaash!";
  }

  if (matchedKeyword.includes("kids") || matchedKeyword.includes("children") || matchedKeyword.includes("family")) {
    return "Great family spots include Birla Planetarium, Nehru Zoo Park, and Ramoji Film City.";
  }

  if (matchedKeyword.includes("romantic") || matchedKeyword.includes("couple") || matchedKeyword.includes("romance")) {
    return "Romantic spots include Necklace Road, Shilparamam, and sunset views at Hussain Sagar.";
  }

  if (matchedKeyword.includes("shopping") || matchedKeyword.includes("market") || matchedKeyword.includes("bazaar")) {
    return "For shopping, explore Laad Bazaar, Shilparamam, and Begum Bazaar for authentic items.";
  }

  if (matchedKeyword.includes("nature") || matchedKeyword.includes("park") || matchedKeyword.includes("garden")) {
    return "Love nature? Visit KBR Park, Botanical Gardens, or Shamirpet Lake for greenery and peace.";
  }

  if (matchedKeyword.includes("relax") || matchedKeyword.includes("calm") || matchedKeyword.includes("peaceful") || matchedKeyword.includes("quiet")) {
    return "Unwind at Hussain Sagar, Lumbini Park, or the calm of Jagannath Temple.";
  }

  if (matchedKeyword.includes("photos") || matchedKeyword.includes("instagram") || matchedKeyword.includes("photography") || matchedKeyword.includes("pictures")) {
    return "Top photo spots: Charminar, Qutub Shahi Tombs, Necklace Road, and Shilparamam for colorful shots.";
  }

  if (matchedKeyword.includes("food") || matchedKeyword.includes("eat") || matchedKeyword.includes("biryani") || matchedKeyword.includes("cuisine")) {
    return "Try Hyderabadi biryani at Paradise, Shah Ghouse, or Hotel Shadab. Also explore street food at Charminar!";
  }

  if (matchedKeyword.includes("festival") || matchedKeyword.includes("celebration")) {
    return "Hyderabad lights up during Bonalu, Bathukamma, Diwali, and Eid! Ask me about them!";
  }

  if (matchedKeyword.includes("weather") || matchedKeyword.includes("climate") || matchedKeyword.includes("season") || matchedKeyword.includes("best time")) {
    return "The best time to visit Hyderabad is October to February — cool weather and festive vibes!";
  }

  if (matchedKeyword.includes("map") || matchedKeyword.includes("location") || matchedKeyword.includes("how to reach") || matchedKeyword.includes("directions") || matchedKeyword.includes("route") || matchedKeyword.includes("nearby")) {
    return "You can locate Hyderabad and its attractions using the map section on our About page.";
  }
if (matchedKeyword.includes("vegetarian")) {
  return "Try vegetarian delights at Chutneys, Bikanervala, or Santosh Dhaba in Hyderabad!";
}
if (matchedKeyword.includes("street food") || matchedKeyword.includes("night food")) {
  return "Explore Charminar area for night street food — kebabs, dosas, and Irani chai!";
}
if (matchedKeyword.includes("qawwali") || matchedKeyword.includes("cultural show")) {
  return "Try Dargah near Charminar for qawwali nights or cultural shows during Bonalu and Bathukamma!";
}
if (matchedKeyword.includes("heritage walk") || matchedKeyword.includes("guided tour")) {
  return "Heritage walks around Old City and Charminar are available — check local tourism groups or the Telangana Tourism site.";
}
if (matchedKeyword.includes("metro") || matchedKeyword.includes("auto") || matchedKeyword.includes("transport")) {
  return "Hyderabad has a good metro network, buses, autos, and cabs like Ola/Uber. Metro is fast and convenient!";
}
if (matchedKeyword.includes("airport") && matchedKeyword.includes("ramoji")) {
  return "You can take a cab or TSRTC bus from the airport to Ramoji Film City — around 1.5 hrs drive.";
}
if (matchedKeyword.includes("stay") || matchedKeyword.includes("hotel") || matchedKeyword.includes("area")) {
  return "Banjara Hills, Jubilee Hills, and Gachibowli are great for comfort and access. For heritage, stay near Charminar.";
}

  if (matchedKeyword.includes("contact")) {
    return "You can reach us via explore@hyderabadtour.com or check the Contact page.";
  }
 if (matchedKeyword.includes("attraction") || matchedKeyword.includes("visit") || matchedKeyword.includes("places") || matchedKeyword.includes("explore")) {
    return "There are attractions for every type of visitor — ask me about forts, museums, or temples!";
  }

  if (matchedKeyword.includes("bye")) {
    return "Goodbye! Hope you enjoy your Hyderabad exploration!";
  }

  return `I'm not sure about that. You can ask about:
- Historical places (like forts or museums)
- Fun spots (like amusement parks)
- Family-friendly or kid activities
- Romantic places
- Shopping markets
- Food recommendations
- Best season or directions
Try asking about any of these! 😊`;
}


// ---------------- SEND MESSAGE TO CHATBOT ----------------
function sendMessage() {
  const input = document.getElementById('userInput');
  const message = input.value.trim();
  if (!message) return;

  const chat = document.getElementById('chatbotMessages');

  const userDiv = document.createElement('div');
  userDiv.className = 'user-message';
  userDiv.textContent = message;
  chat.appendChild(userDiv);

  const botDiv = document.createElement('div');
  botDiv.className = 'bot-message';
  chat.appendChild(botDiv);

  setTimeout(() => {
    botDiv.textContent = getBotReply(message);
    chat.scrollTop = chat.scrollHeight;
  }, 400);

  input.value = '';
}
