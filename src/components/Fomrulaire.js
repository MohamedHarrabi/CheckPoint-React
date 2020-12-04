import React from "react";
 
import {Form} from "react-bootstrap";

import {Col} from "react-bootstrap";

import {Button} from "react-bootstrap";

import {Badge} from "react-bootstrap";

const Formulaire = () =>{
    return (<div className="d-flex justify-content-around m-5"><div><h1 className="text-dark mb-5">Choose Movie</h1><Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form.Row>
      
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>
      <div >
        <Form.Row>
                
         <Form.Group as={Col} controlId="formGridZip">
                <Form.Check type="checkbox" label="Dark" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                
                <Form.Group as={Col} controlId="formGridZip">
                <Form.Check type="checkbox" label="Breaking Bad" />
                </Form.Group>
              </Form.Row>
        <Form.Row>
                
          <Form.Group as={Col} controlId="formGridZip">
          <Form.Check type="checkbox" label="Peaky Blinder" />
          </Form.Group>
        </Form.Row>
      
        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Blind Spot" />
        </Form.Group>
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
      <div>
      <div>
  <h1>
  La Casa del Papel <Badge variant="secondary" className="badge-pill badge-danger ">New</Badge>
  </h1>
  <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
  <h1>
  Prison Break <Badge variant="secondary" className="badge-pill badge-danger ">New</Badge>
  </h1>
  <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
  <h1>
  Vikings <Badge variant="secondary" className="badge-pill badge-danger">New</Badge>
  </h1>
  <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
  <h1>
  See <Badge variant="secondary" className="badge-pill badge-danger">New</Badge>
  </h1>
  <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: '30%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
  <h1>
    YOU!  <Badge variant="secondary" className="badge-pill badge-danger">New</Badge>
  </h1>
  <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: '10%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
  
</div>
      </div>
      </div>


    )
}

export default Formulaire 