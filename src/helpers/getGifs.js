const getGifs = async (category) => {
    try {
        const r = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=LErINR7NeVcFm1lO0u10tYXBPKFIu2mg&q=${encodeURI(category)}&limit=10 `)
        const {data} = await r.json()
        const results = data.map(({id,images:{downsized_large:{url}},title})=>({ id,url,title }))
    
        return results 

    } catch (err) {
        console.log(err)
    }
}
export {
    getGifs
}