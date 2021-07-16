import { getGifs } from "../helpers/getGifs"

const { useState, useEffect } = require("react")

const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data:[],
        loading:true,
    })

    useEffect(() => {
        (async function(){
            setstate({
                data: await getGifs(category),
                loading:false,
            })
        })()

    }, [category])


    return state
}

export {
    useFetchGifs
}