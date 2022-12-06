function CreditCard(props) {
    const divColor = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`
    }
    
    return (
    <div>
        <div style={divColor}>
        <p>{props.type} </p>
        <p>{props.number} </p>
        <p>Expires {props.expirationMonth} / {props.expirationYear}  </p>
        <p>{props.bank}</p>
        <p>{props.owner}</p>
        {/* <p>{props.bgColor}</p>
        <p>{props.color}</p> */}
        </div> 
    </div>
    )
}

export default CreditCard;