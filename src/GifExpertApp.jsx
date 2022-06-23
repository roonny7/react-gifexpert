import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Metal gear']);

  const onAddCategory = ( newCategory ) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories, ]);

 
  }

  return (
        <>
            <h1>GifExpertApp</h1>
            {   //esta madre no se podía, mandar el state a otro componente 
                //<AddCategory setCategories={setCategories}/>
            }
            <AddCategory onNewCategory={ (value) => onAddCategory(value)}/>

            
            
                { 
                
                  categories.map( (category) => (
                    <GifGrid key={ category} category={category} />
                  ))


                  }
            


        </>
  )
}
