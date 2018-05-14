// fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=a460cd20e3a14b8790ebf514344c57f5')
//   .then(response => response.json())
//   .then((news) => console.log(news))

// Countries = 'ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za';

const country = 'us'

const URL = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=a460cd20e3a14b8790ebf514344c57f5`;

export async function getNews() {
  let result = await fetch(URL).then(response => response.json())
  return result.articles
}