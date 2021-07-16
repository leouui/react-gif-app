import PropTypes from 'prop-types'
import { useState } from 'react'

const AddCategory = ({setcategories}) => {
    const [txtvalue,setvalue] = useState("")

    const changeValue = ({target:{value}}) => setvalue(value)

    const addCategories = (e) => {
        e.preventDefault()
        if(txtvalue.trim().length !== 0) setcategories(cats=> [txtvalue,...cats])
        setvalue("")
    }

    return <>
          <form onSubmit={addCategories} className="w_100 d_flex search_container fx_center">
            <input type="text" value={txtvalue} onChange={ changeValue } placeholder="Busca un gif"  className="search_input maxW_100" />     
            <button className="button_add">Buscar</button>            
        </form>
    </>

}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}

export {
    AddCategory
}