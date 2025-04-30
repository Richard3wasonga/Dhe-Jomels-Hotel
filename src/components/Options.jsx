import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

const Options = ({toggleFilterBar,setsearchQuery,searchQuery}) => {
   return ( 
    <div>
        <button onClick={toggleFilterBar}><FontAwesomeIcon icon={faFilter} /></button>
        <input 
          type="text" 
          placeholder="Search for a dish..." 
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)} 
          className="menu-search"
        />

    </div>
  )
}

export default Options