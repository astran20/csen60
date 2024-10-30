// Tags
const searchTags = [];

// Individual elements
let parentElement = null;
const tagLists = Array.from(document.querySelectorAll("article .tags"));

// Search Functions
/**Initialize Search is the URL functionality, which filters the articles by typing in the url rather than the search bar.
 * It does this by using URLSearchParams to iterate through the URL to find a tag if you type it in
  */
function initializeSearch(newParentElement) {
  const params = new URLSearchParams(window.location.search);
  if (newParentElement === null) {
    console.error(
      "Cannot insert tags, parent element is null",
      params.getAll("tag")
    );
    return;
  }

  parentElement = newParentElement;
  for (const tag of params.getAll("tag")) {
    addSearchTerm(tag);
  }
}

/**
 * This function isolates the articles with the searched tag by making an array
 * articlesWithTags and adding any article with that searched tag into it. It then hides
 * the other articles that do not have the searched tag.
 */
function hideArticles() {
  if (searchTags.length === 0) {
    for (const article of document.querySelectorAll("article")) {
      article.classList.remove("hidden");
    }
    return;
  }

  const articlesWithTags = [];
  for (const tag of searchTags) {
    articlesWithTags.push(...findArticlesWithTag(tag));
  }

  /**
   * use querySelectorAll to select all articles
   * iterate over them in a for loop
   * check if articlesWithTags array does not include the current article being iterated over,
   * then add "hidden" to that article's classList
   * else, remove "hidden" from that article's classList
   */
  // write your code here
  for (const tag of document.querySelectorAll("article")) {
    if(articlesWithTags.includes(tag)){
      tag.classList.remove("hidden");
    } else{
      tag.classList.add("hidden");
    }
  }
}

/**
 * Creates a clickable tag button for a given search term (text). When clicked,
 * the button will remove the corresponding tag from both the DOM and the searchTags array.
 * This function also calls hideArticles to update the articles displayed after removal.
 */
function createTag(text) {
  /**
   * create a new element called button
   * add the class "tag" to its classList
   * set the button's textContent property to text (the passed in argument)
   */
  // write your code here
  const button = document.createElement("button");
  button.classList.add("tag");
  button.textContent = text;

  /**
   * This function is in charge of removing the generated button after searching by using button.remove()
   */
  function remove() {
    button.remove();
    const index = searchTags.indexOf(text);
    if (index !== -1) {
      searchTags.splice(index, 1);
    }

    hideArticles();
  }

  /**
   * add a click event listener to the button, and set the listener to the remove function.
   * return the button element 
   */
  // write your code here
  button.addEventListener("click", remove);
  return button;

}

/**
 * This function takes the searched phrase and finds which articles have that phrase and adds it to 
 * the articles array, then returning the array articles. 
 */
function findArticlesWithTag(phrase) {
  const articles = [];
  const sanitizedPhrase = phrase.toLowerCase().trim();
  for (const tl of tagLists) {
    const tags = Array.from(tl.querySelectorAll("li"));
    for (const tag of tags) {
      if (tag.textContent.toLowerCase().trim() === sanitizedPhrase) {
        articles.push(tl.parentElement);
        break;
      }
    }
  }

  return articles;
}

/**
 * This function allows for multiple searches by adding the searched terms to
 * searchTags array. It then calls hideArticles function to hide all other articles
 * that do not have the searched terms
 */
function addSearchTerm(text) {
  parentElement.appendChild(createTag(text));
  searchTags.push(text);
  hideArticles();
}

// Handlers
/**
 * This function triggers if the event is pressing the enter key. It triggers the
 * function addSearchTerm with the current input (what's in the searchbox), to search
 * for the terms that are inputted
 */
function onSearch(event) {
  const input = event.currentTarget;
  /**
   * If event.key equals "Enter":
   * call addSearchTerm and pass the input element's value
   * set input value to an empty string
   */
  // write your code here
  if(event.key === "Enter"){
    addSearchTerm(input.value);
    input.value="";
  }
}

// Main function
/**
 * This function triggers the initializeSearch on load, so if there is a searched
 * term in the url, articles with that term will show on load. 
 */
function main() {
  initializeSearch(document.querySelector("#searched-tags"));

  document
    .querySelector("input[type=search]")
    .addEventListener("keypress", onSearch);
}

// Execute main function
main();

/**
 * Order of execution for each event: Loading the Page -> Pressing Enter -> Clicking to Remove a Tag
 * Pressing Enter: 2
 * Clicking to Remove a Tag: 3
 * Loading the Page: 1
 */