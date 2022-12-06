import { useState } from 'react'

function LikeButton() {
    const [myCount, setMyCount] = useState(0);
    
    return (
    <div>
        <button 
        onClick={() => {
          setMyCount(myCount + 1);
          console.log('clicked increase', myCount)
        }}>{myCount} Likes</button>
    </div>
    )
}

export default LikeButton;