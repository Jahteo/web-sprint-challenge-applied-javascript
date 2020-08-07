// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const headerDiv = document.createElement("div");
    const dateSpan = document.createElement("span");
    const mainTitleH1 = document.createElement("h1");
    const tempSpan = document.createElement("span");
    headerDiv.classList.add("header");
    dateSpan.classList.add("date");
    tempSpan.classList.add("temp");
    headerDiv.appendChild(dateSpan);
    headerDiv.appendChild(mainTitleH1);
    headerDiv.appendChild(tempSpan);
//instructions say to hardcode the following, might change later?
    dateSpan.textContent = "MARCH 28, 2020";
    mainTitleH1.textContent = "Lambda Times"
    tempSpan.textContent = "98°"
    document.querySelector("div.header-container").appendChild(headerDiv)
    //return something? or does above do it?
}
