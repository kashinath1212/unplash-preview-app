import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ShowDetails } from '../Redux/Details/Action';
import { useRouter } from 'next/router';
import { ProductDetails } from '../Redux/Details/ProductAction';
import Slider from 'react-slick';


function UnplashApi() {
    const { details, products } = useSelector(state => state)
    const [data, setData] = useState();
    const [input, setInput] = useState("")
    const [query, setQuery] = useState(details?.query)
    const [page, setPage] = useState([])
    const [pageno, setPageno] = useState(details?.pageno)
    const dispatch = useDispatch()
    const router = useRouter()
    useEffect(() => {
        setPage([])
        let count = products?.data?.data?.total_pages
        let k = []
        for (let i = 1; i <= count; i++) {
            k.push(i)
            setPage(k)
        }
    }, [products?.data?.data?.total_pages])
    console.log(page, "log");

    useEffect(() => {
        setData(products?.data?.data?.results)
    }, [products, details])
    useEffect(() => {
        dispatch(ProductDetails(pageno, query))
    }, [pageno, query, dispatch])

    const submitHandler = (e) => {
        e.preventDefault()
        setQuery(input)
        setPageno(1)
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 5
    };
    // console.log(data, "log");

    // const myLoader = ({ src, width, quality }) => {
    //     return `${src}?w=${width}&q=${quality || 75}`
    // }

    return (
        <div className='row justify-content-center align-items-center m-0 px-2 text-white'>
            <div className='m-3'>
                <form onSubmit={submitHandler} className='d-flex flex-row justify-content-center'>
                    <input type='text' className='form-control w-25' name="name" required value={input} onChange={(e) => { e.preventDefault(); setInput(e.target.value) }} />
                    <button type='submit' className='btn btn-primary mx-2'>search</button>
                </form>
                <div className='mx-5 mt-4'>
                    <Slider {...settings}>
                        {page && page?.map((item, i) => {
                            return (
                                <div className='d-flex justify-content-center' key={i} >
                                    <p className={`p-2 text-center ${pageno === item ? 'bg-primary' : "bg-warning"}`} style={{ borderRadius: '50px', width: '40px', height: '40px', cursor: "pointer" }} onClick={() => { setPageno(item), dispatch(ShowDetails({}, item)) }}>
                                        {item}
                                    </p>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
            {data && !data?.length ? (<h1>No data found!...</h1>) :
                data?.map((item, i) => {
                    return (
                        <div className='col-8 col-sm-6 col-md-4 co-lg-3 my-3' key={i} >
                            <div style={{ cursor: 'pointer' }} onClick={() => { dispatch(ShowDetails(item, pageno, query)), router.push('/unplashDetail'), localStorage.setItem('itemDetail', JSON.stringify(item)) }}>
                                <Image src={item?.urls?.regular} alt={item?.urls?.regular} blurDataURL={true} width="280" height="280" className='rounded' style={{ objectFit: "cover", minWidth: "100%" }} />
                            </div>
                            <div className='text-white text-center'>
                                {item?.user?.name}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UnplashApi