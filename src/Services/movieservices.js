const key=import.meta.env.VITE_TMDB_KEY;
const baseUrl='https://api.themoviedb.org/3'

const endpoints={
    popular:`${baseUrl}/movie/popular?api_key=${key}`,
    //topRated:`${baseUrl}/movie/top_rated?api_key=${key}`,
    //trending:`https://api.themoviedb.org/3/trending/all/day?language=en-US?api_key=${key}`,
    //comedy:`${baseUrl}?api_key=${key}&language=en-US&query=comedy`,
    upcoming:`${baseUrl}/movie/upcoming?api_key=${key}`,

}
export function createImageUrl(filename,size)
{
    return `https://image.tmdb.org/t/p/${size}/${filename}`;
}
export default endpoints;

