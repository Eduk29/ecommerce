import APIBaseURL from "../config/APIBaseUrl"

export const getAll = () => {
  return fetch(`${APIBaseURL}/brands`)
    .then(response => response.json())
    .then(body => body)
}
