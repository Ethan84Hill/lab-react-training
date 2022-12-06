function Random(props) {
    let result = Math.floor(Math.random() * (props.max - props.min) + props.min)
    
    return (
    <div>
        <p>Random value between {props.min} and {props.max} is {result}</p>
    </div>
    )
}

export default Random;