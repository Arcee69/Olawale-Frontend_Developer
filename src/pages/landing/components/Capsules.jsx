import React, { useState } from 'react'

import ModalPop from '../../../components/modal/modalPop';
import Details from './Details';

const Capsules = ({ uniqueData, loading }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [singleData, setSingleData] = useState([])

  return (
    <section className='w-full'>
        {loading && <p className='w-full text-WHITE-_100 text-3xl text-center font-semibold'>Loading....</p>}
        <ul className={`${uniqueData?.length === 0 ? "flex " : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  md:mx-7 "} w-full justify-center  gap-4 py-5`}>
                {
                    uniqueData?.length > 0 ? (
                        uniqueData?.map((items) => (
                            <li 
                                className='w-20 sm:w-28 cursor-pointer lg:w-36 p-5 border-2 border-solid flex mx-auto md:mx-0 justify-center border-WHITE-_100' 
                                key={items?.capsule_serial}
                                onClick={() => {setModalOpen(true); setSingleData(items)}}
                            >
                                <p className='text-WHITE-_100 text-3xl'>{items?.capsule_serial}</p>

                            </li>

                        ))
                    ) : 
                    <p className='flex text-WHITE-_100 text-3xl text-center font-semibold'>Capsule Not Found</p>
                } 

            </ul>

            <ModalPop isOpen={modalOpen}>
                <Details handleClose={() => setModalOpen(false)} singleData={singleData}/>
            </ModalPop>
    </section>
  )
}

export default Capsules