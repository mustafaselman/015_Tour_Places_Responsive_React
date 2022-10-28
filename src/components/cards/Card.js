import "./Card.css"
import { data } from "../../helpers/data.js";

const Card = () =>
{

    return (
        <>
        
            {
                
                data.map((card,index) => {
                
                
                    return (
                    
                    <div className="card" key={index}>
                        <div className="container">
                            <h4><b>{card.title}</b></h4>
                            <img src={card.image} alt="Avatar" />
                        </div>
                        <div className="container2">
                            <p className="description">{card.desc}</p>
                        </div>
                    </div>
                    
                    )
                    
            }
                )
            }
            










        </>
    )
}


export default Card;

// data.map((card) => {
//     <div classname="container">
//       <h4><b>{card.title}</b></h4>
//       <img src={card.image} alt="Avatar" />
//     </div>
//     <div classname="container2">
//       <p classname="description">{card.desc}</p>
//     </div>
// } )