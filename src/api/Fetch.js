const API_KEY = `b69eeb996215d946cecfb7b09e224425`
const BASE_URL = `https://api.themoviedb.org/3`
export const fetchTrendingVideo = async () => {
    const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    const json = await response.json()
    return json
}

export const fetchSearchedMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    const json = await response.json()
    return json
}

export const fetchMovieById = async (id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    const json = await response.json()
    return json
}

export const fetchMovieActorsById = async (id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`)
    const json = await response.json()
    return json
}

export const fetchMovieReviewsById = async (id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`)
    const json = await response.json()
    return json
}