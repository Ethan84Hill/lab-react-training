
import profiles from '../data/berlin.json';

function FaceBook(props) {

  const btnColor = {
    backgroundColor: "red"
}

    return(
        <div>
          <h1>FaceBook Profile List</h1>

          <button onClick={() => { 
            <p style={ btnColor }><b>Country: </b> {profiles.country}</p>
            console.log('color change')
          }}>USA</button>
        



          {profiles.map(element => {
            return( 
            <div>
                <div>
                   <img className='img-size' src={element.img} alt="img" />
                </div>

                <div>
                   <p><b>First Name: </b> {element.firstName}</p>
                   <p><b>Last Name: </b> {element.lastName}</p>
                   <p><b>Country: </b> {element.country}</p>
                </div>
            </div>
            )
          })}
        </div>
    )
}

export default FaceBook;