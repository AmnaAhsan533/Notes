import React, { useState, useEffect } from 'react';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import './index.css'

const ImageSlider = ({url, limit=5, page = 1})=>{
    const [images, setImages] = useState([])
    const [currSlide, setCurrSlide] = useState(0)
    const [errMsg, setErrMsg] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchImages(url){
        try{
            setLoading(true)
            const response = await fetch(`${url}?page=${page}&limit=${limit}`)
            const data = await response.json()
            if(data){
                setImages(data)
                setLoading(false)
            }
        }catch(e){
            setErrMsg(e.message)
            setLoading(false)
        }
    }

    function handlePrevious(){
        setCurrSlide(currSlide === 0? images.length - 1: currSlide - 1)
    }

    function handleNext(){
        setCurrSlide(currSlide === images.length - 1 ? 0 : currSlide + 1)
    }

    useEffect(() =>{
        if(url !== '') fetchImages(url)
    }, [url, limit, page])

    console.log(images)

    if(loading) return <div>Loading...</div>
    if(errMsg) return <div>Error occurred! {errMsg}</div>
    return (
        
        <div className='container'>
            <BsArrowLeftCircleFill onClick={handlePrevious} className='arrow arrow-left'/>
            {
                images && images.length ? (
                    images.map((imageItem, index)=> (
                        <img 
                        key={imageItem.id}
                        alt={imageItem.download_url}
                        src={imageItem.download_url}
                        className={`current-image ${currSlide === index ? 'active' : ''}`}
                        />
                    ))
                ) : null
            }
            <BsArrowRightCircleFill onClick={handleNext}  className='arrow arrow-right'/>
            <span className='circle-indicators'>
                {
                    images && images.length ?
                    images.map((_, index) => (
                        <button key={index} 
                        className={`current-indicator ${currSlide === index ? 'active' : ''}`}
                        onClick={() => setCurrSlide(index)}
                        ></button>
                    ))
                    : null
                }
            </span>
        </div>
    )
}

export default ImageSlider;