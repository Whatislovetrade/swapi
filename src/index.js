const getResourse = async (url) => {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`could not ${url}` + `, recived ${res.status}`) 
  }
  const body = await res.json()
  return body
}

getResourse('https://dog.ceo/api/breeds/image/random/yerwer/fdsf')
  .then((body) => {
    console.log(body)
  })
  .catch((err) => {
    console.log(err)
  })
