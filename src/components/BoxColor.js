function BoxColor(props) {
    let r = props.r
    let g = props.g
    let b = props.b
    const divColor = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }
    
    return (
    <div>
        <p style={divColor}>rgb({r},{g},{b}) </p>
    </div>
    )
}

export default BoxColor;