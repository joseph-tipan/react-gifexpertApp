import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGif } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {


    // const [images, setImages] = useState([]);

    const { loading, data:images } = useFetchGifs(category);


  


  return (

    <>
    
        <h3>{category}</h3>

        {loading && <p className='animate__slideInDown'>LOADING</p>} 


    <div className='card-grid'>
        {
            images.map( img => (
                <GifGridItem
                key={img.id}
                {...img}
                />
            ))
        }
        

    </div>
    
    </>
  )
}
