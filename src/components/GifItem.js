import Masonry from "react-responsive-masonry"

const GifItem = ({url,title}) => {

    return (
        <Masonry columnsCount={1} className="gif_item">
            <img className="w_100" src={url} alt={title}/>
        </Masonry>
    )
}

export {
    GifItem
}