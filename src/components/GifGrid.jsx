import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem} from './GifItem';





export const GifGrid = ( { category }) => {

    const { images, isLoading } = useFetchGifs(category);

  console.log(images, isLoading)
    
    

    return (
      <>
        <h3>{ category } </h3>
        {
            isLoading
            ? (<h2>Cargando</h2>)
            : null

        }
        <h2>{ isLoading}</h2>
        <div className="card-grid">
            {
              images.map( (img) => (
                //<GifItem key={img.id}  title={img.title} url={img.url}/>
                <GifItem key={img.id} {...img}/>

                
              ))


            }            
        </div>
      </>
    )
}
