import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

const Options = ({toggleFilterBar}) => {
  return (
    <div>
        <button onClick={toggleFilterBar}><FontAwesomeIcon icon={faFilter} /> Filter</button>

    </div>
  )
}

export default Options