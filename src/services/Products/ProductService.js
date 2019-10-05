import APIBaseURL from "../config/APIBaseUrl"

export const getAll = () => {
  return fetch(`${APIBaseURL}/products`)
    .then(response => response.json())
    .then(body => body)
}

export const getAllByFilter = filters => {
  return fetch(`${APIBaseURL}/products/?${filters}`)
    .then(response => response.json())
    .then(body => body)
}
