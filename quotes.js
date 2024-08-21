const quotes = [
    {
        quote: "집에 가고 싶다",
        author: "소언"
    },
    {
        quote: "당장 집에 가자",
        author: "소언2"
    },
    {
        quote: "어제도 집에 가고 싶었다",
        author: "소언3"
    },
    {
        quote: "내일도 집에 가고 싶을 것이다",
        author: "소언4"
    },
    {
        quote: "오늘은 집에 가고 싶다",
        author: "소언5"
    },
    {
        quote: "메롱메롱 잘자",
        author: "소언6"
    },
    {
        quote: "153 잘자",
        author: "소언7"
    },
    {
        quote: "153 잘ㅎㄷ자",
        author: "소언8"
    },
    {
        quote: "153 ㅎㄷㅎㄷㅎㅈㅎ",
        author: "소언9"
    },
    {
        quote: "15ㅎㄷㄷㄷ3 ㅎㄷㅎㄷㅎㅈㅎ",
        author: "소언10"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = "- " + todaysQuote.author;