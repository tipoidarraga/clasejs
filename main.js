const listMoviesSection = document.querySelector ('#movies-list')

const mockData = 
[
    {
        title: 'La forma del agua',
        duration: '140 min',
        director: 'Guillermo del Toro',
        gender: 'Drama',
        country: 'México'
    },

    {
        title: 'JOJO Rabbit',
        duration: '140 min',
        director: 'Taika Waititi',
        gender: 'Comedia',
        country: 'USA'
    },

    {
        title: 'The Shinner',
        duration: '140 min',
        director: 'Stanley Kubrik',
        gender: 'Terror',
        country: 'USA'
    },

    {
        title: 'Gremlins',
        duration: '180 min',
        director: 'Joe Dante',
        gender: 'Comedia',
        country: 'USA'
    },
]


const getMovies = () => 
{
    let moviesHTML = '';
    mockData.forEach (movie => {
        const html = ` 
        <article>
            <h4> ${movie.title}</h4>
            <p> ${movie.director}</p>
            <p> ${movie.duration}</p>
            <p> ${movie.gender}</p>
            <p> ${movie.country}</p>
        </article>
        `
        moviesHTML += html;
        
    })

listMoviesSection.innerHTML += moviesHTML;
}

document.addEventListener ('DOMContentLoaded', getMovies ())