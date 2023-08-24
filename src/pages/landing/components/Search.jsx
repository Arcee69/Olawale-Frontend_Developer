import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as Yup from 'yup'
import { Form, Formik } from 'formik'

import { appUrls } from '../../../service/urls';
import Capsules from './Capsules';
import Pagination from '../../../components/modal/Pagination';



const Search = () => {
    const [spaceXData, setSpaceXData] = useState([]);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10)
    const [loading, setLoading] = useState(false);


    const SearchValidation = Yup.object().shape({
        status: Yup.string(),
        type: Yup.string(),
        landings: Yup.number()
    })

    //Fetching data from spaceX API
    const fetchData = async(values, actions) => {
        setLoading(true)
        const data = {
            status: values?.status,
            type: values?.type,
            landings: values?.landings
        }
        await axios.get(`https://api.spacexdata.com/v3` + appUrls?.CAPSULE_URL + `?status=${data?.status || ""}&type=${data?.type || ""}&landings=${data?.landings || ""}`)
        .then((res) => {
            setLoading(false);
            setSpaceXData(res?.data);
            actions.resetForm()
        })
    };

    
    //Filtering for unique Data
    const uniqueData = Array.from(new Set(spaceXData));


    useEffect(() => {
        fetchData()
    }, [])

    //Get Current data
    const indexOfLastData = page * perPage;
    const indexOfFirstData = indexOfLastData - perPage;
    const currentData = uniqueData.slice(indexOfFirstData, indexOfLastData)


    //Change Page 
    const paginate = (pageNumber) => setPage(pageNumber)



  return (
    <section>
        <div
            style={{ 
                backgroundImage: `url(https://sxcontent9668.azureedge.us/cms-assets/assets/Starlink_G7_1_OS_56_3629_Desktop_v2_8989095749.jpg)`, 
                backgroundSize: 'cover', 
                backgroundRepeat:"no-repeat", 
                position: "relative"  
            }} 
            className='w-full overflow-x-hidden lg:h-[550px]'
        >
            <p className='py-5 text-center text-xl md:text-3xl text-WHITE-_100 font-semibold'>Search for a capsule</p>
            <div className='mx-2 py-5   '>
                <Formik
                    initialValues={{
                        status: "",
                        type: "",
                        landings: "",
                    }}
                    validationSchema={SearchValidation}
                    onSubmit={(values, actions) => {
                        fetchData(values, actions);
                     
                    }}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        dirty,
                        isValid,
                        setFieldValue,
                        errors,
                        touched,
                        setFieldTouched,
                        values,
                    }) => (
                        <Form onSubmit={handleSubmit} className="mt-2 xs:mx-2 lg:mx-5">
                            <div className='flex'>

                                <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-6'>
                                    <div className='w-11/12 lg:w-full flex flex-col'>
                                        <input
                                            name="status"
                                            placeholder="Status"
                                            type="text"
                                            className='bg-WHITE-_200 p-2 md:p-3 rounded-sm xs:w-full md:w-full cursor-pointer lg:w-11/12 border border-solid border-[#dddddd]'
                                            value={values?.status}
                                            onChange={handleChange}
                                        />
                                    
                                    </div>

                                    <div className='w-11/12 lg:w-full flex flex-col'>
                                        <input
                                            name="landings"
                                            placeholder="Landings"
                                            type="number"
                                            className='bg-WHITE-_200 p-2 md:p-3 rounded-sm xs:w-full cursor-pointer md:w-full lg:w-11/12 border border-solid border-[#dddddd]'
                                            value={values?.landings}
                                            onChange={handleChange}
                                        />
                            
                                    </div>

                                    <div className='w-11/12 lg:w-full flex flex-col'>
                                        <input
                                            name="type"
                                            placeholder="Type"
                                            type="text"
                                            className='bg-WHITE-_200 p-2 md:p-3 rounded-sm w-full cursor-pointer md:w-full lg:w-11/12 border border-solid border-[#dddddd]'
                                            value={values?.type}
                                            onChange={handleChange}
                                        />
                                        
                                    </div>
                               
                                    <div className='flex'>
                                        <button
                                            type="submit"
                                            className="font-normal text-base bg-BLUE-_200 text-WHITE-_100 border-BLUE-_200  border cursor-pointer border-solid h-11 w-full md:w-[130px] lg:w-full md:h-12"
                                        >
                                            Search
                                        </button> 
                                    </div>

                                </div>
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>

            <Capsules 
                uniqueData={currentData} 
                loading={loading}
            />

            <Pagination 
                perPage={perPage} 
                totalData={uniqueData?.length} 
                paginate={paginate} 
            />
    
        </div>

    </section>
  )
}

export default Search