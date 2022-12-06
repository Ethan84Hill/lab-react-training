function Greetings(props) {
    const {lang, children} = props

    let greetingPhrase = "";

    switch(lang) {

    case "fr" : greetingPhrase = "Bonjour"
    break

    case "es" : greetingPhrase = "Hola"
    break;

    case "en" : greetingPhrase = "Hello"
    break;

    case "de" : greetingPhrase = "Hallo"
    break;

    default: greetingPhrase = "What's Up"
   
}
    
    return ( 
    <div>
      <div>
        <p>{greetingPhrase} {children} </p>
       </div> 
    </div>
    )
}

export default Greetings;