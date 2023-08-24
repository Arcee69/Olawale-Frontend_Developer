import React from 'react'

const Pagination = ({ perPage, totalData, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalData / perPage); i++) {
        pageNumbers.push(i)
    }
  return (
    <nav>
        <ul className='w-full flex justify-end'>
            {pageNumbers.map(number => (
                <li 
                    key={number} 
                    onClick={() => paginate(number)} 
                    className='w-10 cursor-pointer p-1 border-2 mb-5 border-solid flex mr-8 rounded justify-center border-WHITE-_100'
                >
                    <span  className='text-WHITE-_100 text-xl'>{number}</span>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination