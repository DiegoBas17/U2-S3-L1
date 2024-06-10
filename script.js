class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  isSameAge(ageToCompare) {
    if (this.age === ageToCompare.age) {
      return `${this.firstName} ha la stessa età di ${ageToCompare.firstName}`;
    } else if (this.age > ageToCompare.age) {
      return `${this.firstName} è più grande di ${ageToCompare.firstName}`;
    } else if (this.age < ageToCompare.age) {
      return `${this.firstName} è più piccolo di ${ageToCompare.firstName}`;
    }
  }
}

const utente1 = new User("aldo", "baglio", "65", "monza");
console.log(utente1);

const utente2 = new User("giovanni", "storti", "67", "monferrato");
console.log(utente2);

const utente3 = new User("giacomo", "poretti", "68", "milano");
console.log(utente3);

const utente4 = new User("giorgio", "zachini", "67", "roma");
console.log(utente4);

console.log(utente1.isSameAge(utente2));
console.log(utente1.isSameAge(utente3));
console.log(utente1.isSameAge(utente4));
console.log(utente2.isSameAge(utente1));
console.log(utente2.isSameAge(utente4));

/*creazione del form */
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  isSameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

const form = document.getElementById("petForm");
const petList = document.getElementById("petList");
const pets = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);
  pets.push(newPet);

  visualizzatoreDiPets();
  form.reset();
});

function visualizzatoreDiPets() {
  petList.innerHTML = "";
  pets.forEach((pet, index) => {
    /* const petItem = document.createElement("div");
    petItem.innerHTML = `Nome: ${pet.petName}<br>Proprietario: ${pet.ownerName}<br>Specie: ${pet.species}<br>Razza: ${pet.breed}`;
    petList.appendChild(petItem); */
    /* creato una card cpn bootstrap */
    const petItem = document.createElement("div");
    petItem.classList.add("card", "m-2", "w-25");
    const petCardBody = document.createElement("div");
    petCardBody.classList.add("card-body");
    const petTitleName = document.createElement("h5");
    petTitleName.classList.add("card-title");
    petTitleName.textContent = pet.petName;
    petCardBody.appendChild(petTitleName);

    const ownerParagrafo = document.createElement("p");
    ownerParagrafo.classList.add("card-text");
    ownerParagrafo.textContent = `Proprietario: ${pet.ownerName}`;
    petCardBody.appendChild(ownerParagrafo);

    const speciesParagrafo = document.createElement("p");
    speciesParagrafo.classList.add("card-text");
    speciesParagrafo.textContent = `Specie: ${pet.species}`;
    petCardBody.appendChild(speciesParagrafo);

    const breedParagrafo = document.createElement("p");
    breedParagrafo.classList.add("card-text");
    breedParagrafo.textContent = `Razza: ${pet.breed}`;
    petCardBody.appendChild(breedParagrafo);

    petItem.appendChild(petCardBody);
    petList.appendChild(petItem);

    // Verifico se ci sono altri animali con lo stesso proprietario
    for (let i = 0; i < index; i++) {
      const otherPet = pets[i];
      if (pet.isSameOwner(otherPet)) {
        console.log(
          `${pet.ownerName} è il proprietario di ${pet.petName} e ${otherPet.petName}`
        );
      }
    }
  });
}
