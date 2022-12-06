function Rating(props) {
    const filledStar = '★'
    const emptyStar = '☆'
    
    return (
    <div>
    <h2>{filledStar.repeat(Math.round(props.children))}{emptyStar.repeat(5 - Math.round(props.children))}</h2>
        {/* <p>{props.children}</p> */}
    </div>
    )
}

export default Rating;