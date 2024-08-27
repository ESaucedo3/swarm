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
    let currentLocation = locations[i];
    console.log(currentLocation);
    let filteredPeople = people.filter((person) => person.location === currentLocation);
    for (let person of filteredPeople) {
      console.log(person);
    }
  }
}

drawLocations();
