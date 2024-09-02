export const getGifs = async (category) => {
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=Q3MtiGNmoMpizR6QVq4l6ZnWQeKFzn6x&q=${category}&limit=10`;
    const resp = await fetch(URL);
    const {data} = await resp.json()
    console.log(data)

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs
}