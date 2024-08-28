const locations = ['🏤', '🏥', '🏭', '🏢', '🏣'];
let timeLeft = 30;

const people = [
  {
    name: 'Jimbo',
    picture: '🤵',
    location: '🏤',
  },
  {
    name: 'Sammy',
    picture: '🙆‍♀️',
    location: '🏤',
  },
  {
    name: 'Michael',
    picture: '👷',
    location: '🏤',
  },
  {
    name: 'Robert',
    picture: '👷',
    location: '🏥',
  },
  {
    name: 'Terry',
    picture: '🤴',
    location: '🏥',
  },
  {
    name: 'Bill',
    picture: '🕵️',
    location: '🏥',
  },
  {
    name: 'Marie',
    picture: '👩‍🍳',
    location: '🏭',
  },
  {
    name: 'Mykeal',
    picture: '💂',
    location: '🏭',
  },
  {
    name: 'Phil',
    picture: '🧜‍♂️',
    location: '🏭',
  },
  {
    name: 'Wilson',
    picture: '🏐',
    location: '🏢',
  },
  {
    name: 'Wendy',
    picture: '👩‍⚕️',
    location: '🏢',
  },
  {
    name: 'Jeremy',
    picture: '🦹',
    location: '🏢',
  },
];

const postOffice = document.getElementById('post-office');
const hospital = document.getElementById('hospital');
const factory = document.getElementById('factory');
const officeBuilding = document.getElementById('office-building');
const japanesePostOffice = document.getElementById('japanese-post-office');
postOffice?.addEventListener('click', () => attack('🏤'));
hospital?.addEventListener('click', () => attack('🏥'));
factory?.addEventListener('click', () => attack('🏭'));
officeBuilding?.addEventListener('click', () => attack('🏢'));
japanesePostOffice?.addEventListener('click', () => attack('🏣'));

drawLocations();

function drawLocations() {
  for (let i = 0; i < locations.length; ++i) {
    let location = locations[i];
    let filteredPeople = people.filter((person) => person.location === location);
    let pictures = filteredPeople.map((person) => person.picture);
    let pElem = document.getElementById(location);
    pElem.textContent = pictures.join(' ');
  }
}

function attack(selectedLoaction) {
  timeLeft -= 5;
  const timeLeftElem = document.getElementById('time');
  timeLeftElem.textContent = timeLeft;
  let foundPeople = people.filter((person) => person.location === selectedLoaction);
  foundPeople.forEach((person) => (person.picture = '🦇'));
  movePeople();
  drawLocations();
  endGame();
}

function movePeople() {
  people.forEach((person) => {
    let newLocationIndex = Math.floor(Math.random() * locations.length);
    person.location = locations[newLocationIndex];
  });
}

function endGame() {
  if (timeLeft === 0) {
    alert('YOU LOSE!');
    location.reload();
  }

  const allBats = people.every((person) => person.picture === '🦇');
  if (!allBats) return;
  setTimeout(() => {
    alert('YOU WIN!');
    location.reload();
  }, 1000);
}
