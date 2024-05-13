import axios from 'axios';

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng"

export const getPlacesData = async(coordinates: any) => {
  try {
    const {data: {data}} = await axios.get(URL, 
       {
        params: {
          latitude: coordinates.lat, // Latitude of New York
          longitude: coordinates.lng, // Longitude of New York
          limit: '30',
          currency: 'USD',
          distance: '5',
          open_now: 'false',
          lunit: 'km',
          lang: 'en_US'
        },
        headers: {
          'X-RapidAPI-Key': '9cdf18411cmsh840e6bf955e5b88p1063acjsne25d4696e8c0',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      })

    console.log(data)
    console.log(coordinates.lat, coordinates.lng)
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getPlaceData = async(location_id: any) => {
  try {
    const {data} = await axios.get("https://travel-advisor.p.rapidapi.com/attractions/get-details", 
       {
        params: {
          location_id: location_id,
          currency: 'USD',
          lang: 'en_US'
        },
        headers: {
          'X-RapidAPI-Key': '9cdf18411cmsh840e6bf955e5b88p1063acjsne25d4696e8c0',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      })

    console.log(data)
    return data
  } catch (err) {
    console.log(err)
  }
}