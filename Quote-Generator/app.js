const quote = document.getElementById("quote")
const person = document.getElementById("person")
const quote_btn = document.getElementById("new-quote")
quote_btn.addEventListener('click',generateQuote)

const quotes = [
    {
        quote:"The best way to find yourself is to los youeself in the service of others",
        person:"Mahatan Gandhi"
    },
    {
        quote:"If you want to live a happy life, tie it to a goal, not to the people or things",
        person:"Albert Einstein"
    },
    {
        quote:"At his best, man is the noblest of all animals; seperated from law and justice he is the worst",
        person:"Aristotle"
    },
    {
        quote:"Your time is limited, so dont waste it living someone else's life",
        person:"Steve Jobs"
    },
    {
        quote:"Tell me and i forget.Teach me and i remember. Involve me and i learn",
        person:"Benjamin Franklin"
    },
    {
        quote:"If you look at what you have in life, you'll always have more.If you look at what you dont have in life, you'll never have enough",
        person:"Oprah Winfrey"
    },
    {
        quote:"It does not matter how slowly you go as long as you do not stop",
        person:"Confucuis"
    },
    {
        quote:"Our lives begin to end the day we become silent about the things that matter",
        person:"Martin Luther King, Jr"
    },
    {
        quote:"Remember that not getting what you want is sometimes a wonderfull stroke of luck",
        person:"Dalai lama"
    },
    {
        quote:"The journey of a thousand miles begins with one step",
        person: 'Lao Tzu'
    }
]

function generateQuote(e){
    e.preventDefault()
    let random_index = Math.floor(Math.random() * quotes.length)
    let random_quote = quotes[random_index]
    quote.innerText = random_quote.quote
    person.innerText = random_quote.person
}