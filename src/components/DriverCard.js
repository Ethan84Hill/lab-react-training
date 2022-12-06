

function DriverCard(props) {
    
    return (
    <div>
        <div>
           <img className="img-size" src={props.img} alt="img" />
        </div>
        <div>
        <p>{props.name} </p>
        <p>{props.rating} </p>
        {/* <p>{props.img} </p> */}
        <p>{props.car.model} - {props.car.licensePlate} </p>
       </div> 
    </div>
    )
}

export default DriverCard;