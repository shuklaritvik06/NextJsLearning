const API_KEY = process.env.API_KEY;
const requests =  {
    trending: {
        title: 'Trending',
        Url: `/trending/movie/day?api_key=${API_KEY}`
    },
    toprated: {
        title: 'Top Rated',
        Url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    action: {
        title: 'Action',
        Url:`/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    comedy: {
        title: 'Comedy',
        Url:`/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    horror: {
        title: 'Horror',
        Url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    romance: {
        title: 'Romance',
        Url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    mystery: {
        title: 'Mystery',
        Url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    scifi: {
        title: 'Sci-Fi',
        Url: `/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    western: {
        title: 'Western',
        Url: `/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    animation: {
        title: 'Animation',
        Url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    tv: {
        title: 'TV',
        Url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`
    }
}

export default requests;