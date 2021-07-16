import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';
import ResponsiveMasonry from "react-responsive-masonry"

const Category = ({category}) => {
    const {data:Arrgifs,loading} = useFetchGifs(category)
    const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 2 };

    return (
        <div className="category_item">
            <h1  className="title"> {category} </h1> 

                {
                    loading && <p>*Musica de acensor*</p>
                }
                
                {
                    <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}  className="container_gifs d_grid w_100 animate__animated animate__slideInDown">
                        {
                             Arrgifs.map((gifs)=>  <GifItem  key={gifs.id}  {...gifs} /> )
                        }
                    </ResponsiveMasonry>     
                }    
        </div>
    )
}

export {
    Category
}