const quoteContainer = document.getElementById('quote-Container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const whatsappBtn = document.getElementById('whatsapp');
const newQuoteBtn = document.getElementById('new-quote');

// Get quote from API
async function getQuote() {
    const proxyUrl = 'https://glacial-mountain-12547.herokuapp.com/';
    const apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";

    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        // If Author is blank, add "Unknown"
        if (data.quoteAuthor === '') {
            authorText.innerText = "Unknown";
        } else {
            authorText.innerText = data.quoteAuthor;
        }
        // Reduce font - size for long quotes
        if (data.quoteText.length > 70) {
            quoteText.classList.add('reduce-fonts');
        } else {
            quoteText.classList.remove('reduce-fonts');
        }
        quoteText.innerText = data.quoteText;
    } catch (error) {
        getQuote();
    }
}
// Tweet Quote Function
function tweetQuote() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
}
//Whatsapp Quote Function

function whatsappQuote() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const whatsappUrl = `whatsapp://send/?text=${quote} - ${author}`;
    window.open(whatsappUrl);

}

// function whatsappNumber(number,quoteText.innerText;) {
//     const whatsappNum =
// }

// Event listeners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);
whatsappBtn.addEventListener('click', whatsappQuote);


// On load
getQuote();