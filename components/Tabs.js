// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios.get("https://lambda-times-api.herokuapp.com/topics")
    .then((response) => {
        response.data.topics.forEach((topic) => {
            const tabDiv = document.createElement("div");
            tabDiv.classList.add("tab");
            tabDiv.textContent = topic;
            document.querySelector("div.topics").appendChild(tabDiv)
            // console.lg(`trynabreaksumit`)
        })
    }
    )
    .catch((err) => {
        console.log(err);
        let errorMsg = document.createElement("div");
        //hmm if I want to add a breakpoint, here's my starting point:
        // let br = document.createElement("br");
        // console.log(br)
        // errorMsg.textContent = `Uh oh, there's a booboo with the tabs.js get: ` + br + err;
        errorMsg.textContent = `Uh oh, there's a booboo with the tabs.js get... ` + err;
        document.querySelector("div.errors-container").appendChild(errorMsg)
    })