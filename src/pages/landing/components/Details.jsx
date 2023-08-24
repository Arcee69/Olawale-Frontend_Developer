import React from 'react'

const Details = ({ handleClose, singleData }) => {
  return (
    <div className='flex flex-col overflow-y-scroll bg-WHITE-_100 w-8/12 md:w-[427px] xs:h-[450px] md:h-[470px] lg:h-[500px] p-8 '>
        <div className='text-BLACK_-100 cursor-pointer flex text-base font-semibold justify-end' onClick={handleClose}>X</div>
        
        <div className='w-full flex flex-col gap-3'>
          <p className='text-BLACK-_100 font-semibold text-lg'>
            Capsule id: <span className='text-base font-normal'>{singleData?.capsule_id}</span>
          </p>
          <p className='text-BLACK-_100 font-semibold text-lg'>
            Capsule serial: <span className='text-base font-normal'>{singleData?.capsule_serial}</span>
          </p>
          <p className='text-BLACK-_100 font-semibold text-lg'>
            Details: <span className='text-base font-normal'>{singleData?.details || "Not Available"}</span>
          </p>
          <p className='text-BLACK-_100 font-semibold text-lg'>
            Landings: <span className='text-base font-normal'>{singleData?.landings}</span>
          </p>
          <p className='text-BLACK-_100 font-semibold text-lg'>
            Missions Name: <span className='text-base font-normal'>{singleData?.missions[0]?.name}</span>
          </p>
          <p className='text-BLACK-_100 font-semibold text-lg'>
            Missions Flight: <span className='text-base font-normal'>{singleData?.missions[0]?.flight}</span>
          </p>
          <p className='text-BLACK-_100 font-semibold text-lg'>
            Original Launch: <span className='text-base font-normal'>{ new Date(singleData?.original_launch).toUTCString()}</span>
          </p>
          <p className='text-BLACK-_100 font-semibold text-lg'>
            Original Launch Unix: <span className='text-base font-normal'>{singleData?.original_launch_unix}</span>
          </p>
          <p className='text-BLACK-_100 font-semibold text-lg'>
            Reuse Count: <span className='text-base font-normal'>{singleData?.reuse_count}</span>
          </p>
          <p className='text-BLACK-_100 font-semibold text-lg'>
            Status: <span className='text-base font-normal'>{singleData?.status}</span>
          </p>
          <p className='text-BLACK-_100 font-semibold text-lg'>
            Type: <span className='text-base font-normal'>{singleData?.type}</span>
          </p>
        </div>

    </div>
  )
}

export default Details