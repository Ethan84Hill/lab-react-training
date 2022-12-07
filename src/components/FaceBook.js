
import profiles from '../data/berlin.json';

function FaceBook() {
    return(
        <div>
          <h1>FaceBook Profile List</h1>
          {profiles.map(element => {
            return( 
            <div>
                <div>
                   <img className='img-size' src={element.img} alt="img" />
                </div>

                <div>
                   <p> <b>First Name:</b> {element.firstName}</p>
                   <p><b>Last Name:</b> {element.lastName}</p>
                   <p><b>Country:</b> {element.country}</p>
                </div>
            </div>
            )
          })}
        </div>
    )
}

export default FaceBook;