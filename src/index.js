const getResourse = async (url) => {
  const res = await fetch(url)
  const body = res.json()
  return body
}

getResourse('https://dog.ceo/api/breeds/image/random')
  .then((body) => {
    console.log(body)
  })
