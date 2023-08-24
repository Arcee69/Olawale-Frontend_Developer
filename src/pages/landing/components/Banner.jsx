import React from 'react'

const Banner = () => {
  return (
    <section className='w-full '>
        <div 
            style={{ backgroundImage: `url(https://sxcontent9668.azureedge.us/cms-assets/assets/Crew_7_vertical_082123_DSC_9193_desktop_09637e2988.jpg)`, backgroundSize: 'cover', backgroundRepeat:"no-repeat", position: "relative" }} 
            className='w-12/12  flex flex-col justify-center lg:h-[500px]'
        >
            <div className='mx-2 mt-3 md:mt-5 lg:mt-0  md:mx-8 py-5 gap-4 md:gap-8 flex flex-col justify-center'>
                <h2 className='w-12/12 text-lg md:text-3xl text-WHITE-_100 font-bold sm:w-8/12 lg:w-4/12'>
                    SpaceX: Igniting the Future, One Launch at a Time
                </h2>
                <h4 className='w-12/12 text-xs md:text-sm text-WHITE-_100 font-normal leading-5 sm:w-10/12  md:w-6/12 lg:w-5/12'>
                    SpaceX is a trailblazing aerospace company that has revolutionized space exploration and transportation. 
                    With a steadfast commitment to innovation and cutting-edge technology, 
                    SpaceX has consistently pushed the boundaries of what's possible, 
                    redefining our understanding of space travel. Through a series of groundbreaking achievements, 
                    from reusability of rockets with the Falcon 9, to the ambitious vision of colonizing Mars with the Starship, 
                    SpaceX is not just launching missions; they are igniting a passion for exploration, 
                    inspiring generations to dream bigger and reach for the stars. 
                    As humanity's gateway to the cosmos, SpaceX is propelling us towards a future where space is within our grasp,
                    and their relentless pursuit of excellence continues to shape the course of interstellar history.
                </h4>
            </div>
        </div>
    </section>
  )
}

export default Banner