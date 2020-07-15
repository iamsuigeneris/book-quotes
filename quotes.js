const bookQuotes = [
    {
        id:1,
        quote:"It's the possibility of having a dream come true that makes life interesting",
        book:'./images/book1.jpg',
        authorName:'Paolo Coelho',
        authorImg:'./images/author1.jpg'
    },
    {
        id:2,
        quote:"There is no greater agony than bearing an untold story inside you.",
        book:'./images/book1.jpg',
        authorName:'Maya Angelou',
        authorImg:'./images/author2.jpg'
    },
    {
        id:3,
        quote:"How wonderful it is that nobody need wait a single moment before starting to improve the world.",
        book:'./images/book3.jpg',
        authorName:'Ann Frank',
        authorImg:'./images/author3.jpg'
    },
    {
        id:4,
        quote:"Do I love you? My God, if your love were a grain of sand, mine would be a universe of beaches.",
        book:'./images/book4.jpg',
        authorName:'William Goldman',
        authorImg:'./images/author4.jpg'
    },
    {
        id:5,
        quote:"Love is the longing for the half of ourselves we have lost.",
        book:'./images/book5.jpg',
        authorName:'Milan Kundera',
        authorImg:'./images/author5.jpg'
    }
]

const quote = document.querySelector('.quote-text')
const authorImg = document.getElementById('author-img')
const authorName = document.getElementById('author-name')
const book = document.getElementById('book-img')

const forward = document.querySelector('.forward-btn')
const random = document.querySelector('.random-btn')
const backward = document.querySelector('.backward-btn')

let currentItem = 3

window.addEventListener('DOMContentLoaded', function(){
    showBookQuote(currentItem)
})

function showBookQuote(person){
    const item = bookQuotes[person]
    quote.textContent = item.quote
    book.src = item.book
    authorImg.src = item.authorImg
    authorName.textContent = item.authorName
}
// forward button logic
forward.addEventListener('click', function(){
    currentItem++
    if(currentItem > bookQuotes.length - 1){
        currentItem = 0
    }
    showBookQuote(currentItem)
})
// backward button logic
backward.addEventListener('click', function(){
    currentItem--
    if(currentItem < 0){
        currentItem = bookQuotes.length - 1
    }
    showBookQuote(currentItem)
})
// random button logic
random.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() *  bookQuotes.length)
    showBookQuote(currentItem)
})