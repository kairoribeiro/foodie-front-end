import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}`

async function searchRestaurant(formData) {
  console.log(`${formData.location}`)
  const res = await fetch(`${BASE_URL}/api/restaurants/search/${formData.location}/${formData.query}`, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return res.json()
}

export {
  searchRestaurant
}