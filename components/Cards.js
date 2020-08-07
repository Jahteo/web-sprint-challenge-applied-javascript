// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios.get("https://lambda-times-api.herokuapp.com/articles")
    .then((response) => {
        console.log(response.data.articles.javascript[0])
        let theCard = cardMaker(response.data.articles.javascript[0]);
        console.log(theCard)
        document.querySelector("div.cards-container").appendChild(theCard);
    })

function cardMaker (articleObj) {
    const cardDiv = document.createElement("div");
    const headlineDiv = document.createElement("div");
    const authorDiv = document.createElement("div");
    const imgContainerDiv = document.createElement("div");
    const authorImg = document.createElement("img");
    const authorNameSpan = document.createElement("span");

    cardDiv.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imgContainerDiv.classList.add("img-container");

    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgContainerDiv)
    imgContainerDiv.appendChild(authorImg)
    authorDiv.appendChild(authorNameSpan)

    headlineDiv.textContent = articleObj.headline;
    authorImg.src = articleObj.authorPhoto;
    authorNameSpan.textContent = `By ` + articleObj.authorName;

    cardDiv.addEventListener("click", () => {
        console.log(headlineDiv)
    })

    return cardDiv
    //append after the function
    //useful bc this only recieves the simple article, & not the topic.
}
