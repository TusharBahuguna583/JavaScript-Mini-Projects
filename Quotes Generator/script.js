const api_url = "https://api.quotable.io/random";


const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
  const response = await fetch(url);
  const data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}
getQuote(api_url);

function tweetQuote() {
  const quoteText = quote.innerHTML;
  const authorText = author.innerHTML;
  const twitterUrl = `https://twitter.com/intent/tweet?text="${quoteText}"  - by ${authorText}`;
  window.open(twitterUrl, "Tweet Window", "_blank, width=600,height=300");
}
