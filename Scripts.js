const petList = document.querySelector(".pet-list");

// Sample pet data (you can replace this with your data from a database)
const pets = [
    {
        name: "Buddy",
        image: "Buddy.png",
        description: "Friendly Golden Retriever."
    },
    {
        name: "Whiskers",
        image: "Whisker.png",
        description: "Playful Siamese Cat."
    },
    {
        name: "Fluffy",
        image: "Rabit.png",
        description: "Adorable Dwarf Rabbit."
    }
];

// Function to create a pet card
function createPetCard(pet) {
    const petCard = document.createElement("div");
    petCard.classList.add("pet-card");

    const petImage = document.createElement("img");
    petImage.classList.add("pet-image");
    petImage.src = pet.image;
    petImage.alt = pet.name;

    const petName = document.createElement("h2");
    petName.classList.add("pet-name");
    petName.textContent = pet.name;

    const petDescription = document.createElement("p");
    petDescription.classList.add("pet-description");
    petDescription.textContent = pet.description;

    const adoptButton = document.createElement("a");
    adoptButton.classList.add("pet-button");
    adoptButton.textContent = "Adopt Me";
    adoptButton.href = "#"; // Add a link or functionality as needed

    petCard.appendChild(petImage);
    petCard.appendChild(petName);
    petCard.appendChild(petDescription);
    petCard.appendChild(adoptButton);

    return petCard;
}

// Function to display pet cards
function displayPets() {
    pets.forEach(pet => {
        const petCard = createPetCard(pet);
        petList.appendChild(petCard);
    });
}

// Call the function to display pet cards
displayPets();
