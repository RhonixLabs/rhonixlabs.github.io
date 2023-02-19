import axios from "axios";



export const checkInLocation = async (city: string) => {
  const data = await getGeoInfo()
  console.log(data)
  if (data.city == city) {
    return true
  } else {
    return false
  }
}




export const getGeoInfo = async () => {
  const ax = await axios.get("https://ipapi.co/json/").then((response) => {
    const data = response.data;
    return {
      ip: data.ip,
      countryName: data.country_name,
      countryCode: data.country_calling_code,
      city: data.city,
      timezone: data.timezone,
    };
  });
  return ax
};
