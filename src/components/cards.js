import React from "react";



const Card = () =>{ return( <div class="d-flex justify-content-center bg-dark " >

<div className="card-body m-5" >
<img src="card1.jpg" className="card-img-top" alt="..."/>
  <h5 className="card-title  text-white">Card Movie 1</h5>
  <p className="card-text  text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
<div className="card-body m-5" >
<img src="card2.jpg" className="card-img-top" alt="..."/>
  <h5 className="card-title  text-white">Card Movie 2</h5>
  <p className="card-text  text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
<div className="card-body m-5" >
<img src="card3.jpg" className="card-img-top" alt="..."/>
  <h5 className="card-title  text-white">Card Movie 3</h5>
  <p className="card-text  text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
<div className="card-body m-5" >
<img src="card4.jpg" className="card-img-top" alt="..." />
  <h5 className="card-title  text-white">Card Movie 4</h5>
  <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div>
 )
}
export default Card;