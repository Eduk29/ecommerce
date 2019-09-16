import APIBaseURL from "../config/APIBaseUrl"

export const getAll = () => {
  return fetch(`${APIBaseURL}/products`)
    .then(response => response.json())
    .then(body => body)
}
