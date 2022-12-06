import { useState } from 'react'

function ClickablePicture(props) {
    const imageOne = props.img 
    const imageTwo = props.imgClicked
    const imgs = {imageOne, imageTwo}

    const Images = () => {
    const [selected, setSelected] = useState(imgs.imageOne)

    return (
    <div>
        <div>
           <img onClick={() => setSelected(imgs.image) }
            className="img-size" src={props.img} alt="img" />
        </div>
    </div>
    )
        }
}

export default ClickablePicture;