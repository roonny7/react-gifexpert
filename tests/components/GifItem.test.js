import { render, screen } from "@testing-library/react"
import { exact } from "prop-types";
import { GifItem } from "../../src/components/GifItem"

describe('pruebas en GifItem', () => { 

    const title ="Metal gear";
    const url = 'https://metalgear.com/';
    test('Debe hacer match con el snapshot', () => { 

        const {container} = render(<GifItem title={title} url={url}/>)  
        expect(container).toMatchSnapshot();

    })

    test('Debe de mostrar la imagen con el url y el alt indicado', () => { 
        render(<GifItem title={title} url={url} />);
        //screen.debug();
        //expect(screen.getByRole('img').src).toEqual(url);
        //expect(screen.getByRole('img').alt).toEqual(title);

        const { src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
         
    })

    test('Debe de mostrar el título en el componente', () => { 
        render(<GifItem title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy();
     })


 })