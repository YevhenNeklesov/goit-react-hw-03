import s from "./SearchBox.module.css"

const SearchBox = ({value, onSearch}) => {
  return (
            <div className={s.div}>  
            <label className={s.label}>Find contacts by name
            <input
                className={s.input}  
          type="text"  
          name="search"
          onChange={(e) => onSearch(e.target.value)}
          value={value}
 
            />  
            </label>
        </div>  
  )
}

export default SearchBox