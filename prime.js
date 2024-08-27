const locations = ['🏤', '🏥', '🏭', '🏢', '🏣'];

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

function drawLocations() {
  for (let i = 0; i < locations.length; ++i) {
    let location = locations[i];
    let filteredPeople = people.filter((person) => person.location === location);
    let pictures = filteredPeople.map((person) => person.picture);
    let pElem = document.getElementById(location);
    pElem.textContent = pictures.join(' ');
  }
}

drawLocations();
