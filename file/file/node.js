// JavaScript for my webpage

// Getting the elements from the HTML page
const contentContainer = document.querySelector(".content-container");
const yourSpace = document.querySelector(".your-space");
const searchInput = document.querySelector(".searchbox input");
const searchButton = document.querySelector(".searchbox button");
const exploreButton = document.querySelector(".welcome button");


// Add the topic cards to the page
function addContentCard(title, description) {
    const card = document.createElement("article");
    card.className = "content-card";

    const heading = document.createElement("h3");
    heading.textContent = title;

    const paragraph = document.createElement("p");
    paragraph.textContent = description;

    const readButton = document.createElement("button");
    readButton.textContent = "Read More";

    readButton.addEventListener("click", function () {
        alert("You selected: " + title);
    });

    card.append(heading, paragraph, readButton);
    contentContainer.appendChild(card);
}


// Topics shown in the Popular section
addContentCard("Artificial Intelligence", "Explore AI tools and modern innovations.");
addContentCard("Web Development", "Learn how to create modern websites.");
addContentCard("Cyber Security", "Discover how to protect digital information.");
addContentCard("Data Science", "Understand how data helps businesses.");


// Add a message inside Your Space
function addMessage(message) {
    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    yourSpace.appendChild(paragraph);
}

addMessage("Welcome to your personal space!");
addMessage("Your recently viewed topics will appear here.");


// Search through the topic cards
function searchContent() {
    const searchValue = searchInput.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".content-card");
    let found = false;

    cards.forEach(function (card) {
        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchValue)) {
            card.style.display = "block";
            found = true;
        } else {
            card.style.display = "none";
        }
    });

    let message = document.querySelector(".no-results");

    if (!message) {
        message = document.createElement("p");
        message.className = "no-results";
        contentContainer.appendChild(message);
    }

    if (found) {
        message.textContent = "";
    } else {
        message.textContent = "No matching content found.";
    }
}


// Search when the button is clicked
searchButton.addEventListener("click", searchContent);

// Also search when Enter is pressed
searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchContent();
    }
});


// Move to the Popular section using Explore Now
exploreButton.addEventListener("click", function () {
    document.querySelector(".popular").scrollIntoView({
        behavior: "smooth"
    });
});


// Sidebar links
const navigationLinks = document.querySelectorAll(".sidebar a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        const sectionName = link.textContent.trim();

        if (sectionName === "Popular") {
            document.querySelector(".popular").scrollIntoView({
                behavior: "smooth"
            });
        } else if (sectionName === "Your Space") {
            yourSpace.scrollIntoView({
                behavior: "smooth"
            });
        } else if (sectionName === "Mainpage") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    });
});


// Get user details from the sample API
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function (response) {
        return response.json();
    })
    .then(function (user) {
        console.log(user);

        const userName = document.createElement("h3");
        userName.textContent = "User Name: " + user.name;

        const userEmail = document.createElement("p");
        userEmail.textContent = "Email: " + user.email;

        yourSpace.append(userName, userEmail);
    })
    .catch(function (error) {
        console.log("Something went wrong:", error);
    });


// Practice task: try fetching a post from this API
/*
API URL:
https://jsonplaceholder.typicode.com/posts/1

Steps:
1. Fetch the data from the API.
2. Convert the response into JSON.
3. Show the post title on the webpage.
4. Show the post body on the webpage.
5. Use catch() to handle errors.

Hint: fetch(), then(), response.json(), catch()
*/