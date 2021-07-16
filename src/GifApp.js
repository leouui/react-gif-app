import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { Category } from "./components/Category"


const GifApp = () => {
    
    const [categories, setcategories] = useState([])

    return <>
        <AddCategory setcategories={setcategories} />
        <hr/>

        <div className="w_100 d_flex fx_center">
            {
                <div className="container_categories w_page maxW_100">
                    {
                        categories.map((c)=> 
                            <Category key={`${c}`} category={c}/>)
                    }
                </div>
            }
        </div>
       
    </>
}

export {
    GifApp
}