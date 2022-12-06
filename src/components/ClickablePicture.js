import { useState } from 'react'

function ClickablePicture(props) {
    const imageOne = props.img 
    const imageTwo = props.imgClicked
    const imgs = [imageOne, imageTwo]
    const [imageIndex, setImageIndex] = useState(0)

    const checkboxToggle = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % imgs.length);
      };

    return (
    <div>
        <img
        className='img-size'
        src={imgs[imageIndex]}
        alt='img'
        onClick={checkboxToggle}
      />
    </div>
    )
        
}

export default ClickablePicture;