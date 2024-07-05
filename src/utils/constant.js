export const movieAPI = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"

export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODUwMDFiYWQ2ODAwNjRjYTdiZTE2YzMzZjcxZjg4MiIsIm5iZiI6MTcxOTkwMDY0OC40Mzc3MjUsInN1YiI6IjY0ZWRjYTkxNTI1OGFlMDBhZGQ2Mjc2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ba-ZBzyspYXLkfeDTEmzg7il9b_-_vJSZjbVY7eeb0Q'
    }
};

export const IMG_URL = "https://image.tmdb.org/t/p/w500/"
