// fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=a460cd20e3a14b8790ebf514344c57f5')
//   .then(response => response.json())
//   .then((news) => console.log(news))

const URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=a460cd20e3a14b8790ebf514344c57f5';

export async function getNews() {
  let result = await fetch(URL).then(response => response.json())
  return result.articles
}