import "./body.scss"

function Body (props) {
    return (
        <>
        <div className="body">
        
            <div className="container">
                <div className="flip-card">
                    
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <h1>{props.name}</h1>
                        </div>
                        
                        <div className="flip-card-back">
                            <h3>Manufacturer: {props.manufacturer}</h3>
                            <p>Cargo Passengers: {props.passengers}</p>
                            <p>Starship_class: {props.starship_class}</p>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
        </>
    )
}

export default Body