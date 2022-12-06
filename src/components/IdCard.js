function IdCard(props) {
    return (
        <div className="profileCard">
        <div className="image">
           <img src={props.picture} alt="img" />
        </div>
    
      <div className="textData">
        <p>Last name: {props.lastName} </p>
        <p>First Name: {props.firstName} </p>
        <p>Gender: {props.gender} </p>
        <p>Height: {props.height} </p>
        <p>Birth: {props.birth.toDateString()} </p>
       </div> 
    </div>
    )
}

export default IdCard;