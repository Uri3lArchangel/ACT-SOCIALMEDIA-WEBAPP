import React from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import hm from '/styles/Home.module.css'


function Search() {
  return (
    <div>
         <div className={hm.topSearchBar}>
          <MagnifyingGlassIcon className='w-20 p-4  rounded-l-full text-white bg-purple-800 cursor-pointer' />
        <input type="text" className='w-full bg-black/10 rounded-r-full text-2xl outline-none px-2 text-black'  placeholder='Search People' />
        </div>
        <ul className={hm.searchHistoryAndSugestions}>
          <li>john</li>
        </ul>
    </div>
  )
}

export default Search