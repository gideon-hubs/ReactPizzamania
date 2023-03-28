import React from "react";
import '../css/style.css';



function PizzaTypes() {
    return(
        <div className="container pizza-types">
        <div className="text-center">
            <h3>Pizza Types</h3>
        </div>
        <div className="row">
            <div className="card-deck">
                <div className="card">
                  <img className="card-img-top" src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Papa Nu</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div className="card">
                  <img className="card-img-top" src="https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Abonten</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                   </div>
                </div>
                <div className="card">
                  <img className="card-img-top" src="https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1102&q=80" alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Sika empe dede</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                   </div>
                </div>
              </div>
        </div>
      </div>
    )
}

export default PizzaTypes;