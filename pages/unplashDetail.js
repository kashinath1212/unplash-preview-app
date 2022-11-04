import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function UnplashDetail() {
    const [detail, setDetail] = useState()

    const { details } = useSelector(state => state)
    // console.log(details, "dakshfiushfsi");

    useEffect(() => {
        setDetail(details.itemDetails)
    }, [details.itemDetails])

    return (
        <div>
            {
                detail && (
                    <div className='w-100'>
                        <div className='position-absolute d-flex justify-content-between px-5 w-100' style={{ zIndex: '1', top: '5%' }}>
                            <div className='w-50 px-5'>
                                <div className=''>
                                    <h1 className='text-danger'>owner Details</h1>
                                </div>
                                <div className='text-start'>
                                    <div>
                                        <Image src={detail?.user?.profile_image?.large} priority='true' width={180} height={180} alt="owner protfolio" className='rounded' style={{ objectFit: 'cover' }} />
                                    </div>
                                    <br />
                                    <p className='owner_main_details'><span className='owner_details'>Name:</span> {detail?.user?.name}</p>
                                    <p className='owner_main_details'><span className='owner_details'>userName:</span> {detail?.user?.username}</p>
                                    <p className='owner_main_details'><span className='owner_details'>total_photos:</span> {detail?.user?.total_photos}</p>
                                    <p className='owner_main_details'><span className='owner_details'>total_likes:</span> {detail?.user?.total_likes}</p>
                                    <p className='d-inline-block text-truncate owner_main_details' style={{ maxWidth: '90%' }}><span className='owner_details'>Bio:</span> {detail?.user?.bio}</p>
                                </div>
                            </div>

                            <div className='w-50 px-5'>
                                <div className=''>
                                    <h1 className='text-danger'>Serch Details</h1>
                                </div>
                                <div className='text-start'>
                                    <div>
                                        <Image src={detail?.urls?.regular} priority='true' width={180} height={180} alt="owner protfolio" className='rounded' style={{ objectFit: 'cover' }} />
                                    </div>
                                    <br />
                                    <p className='owner_main_details'><span className='owner_details'>total_likes:</span> {detail?.likes}</p>
                                    <p className='d-inline-block text-truncate owner_main_details' style={{ maxWidth: '90%' }}><span className='owner_details'>Description:</span> {detail?.alt_description ?? detail?.description}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            {detail?.urls?.regular &&
                                <div className='blur_bg'>
                                    <img src={detail?.urls?.regular} alt="blur-bg" className='w-100 h-100' />
                                </div>
                            }
                        </div>
                    </div>

                )
            }
        </div>
    )
}

export default UnplashDetail