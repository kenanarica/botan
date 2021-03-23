import React, { Component } from 'react';
// TODO: look up how to do a polyfill for this
// const Firestore = require('@google-cloud/firestore');


/*  information to add: 
        * plant ID(as prop from constructor)
        * label
        * type of plant
        * lastWatered timestamp
*/ 

class PlantEntry extends Component {

    constructor(props) {

        super(props);
        this.state = { 
            id : this.props.id,
            label : null,
            type : null,
            lastWatered : null
        }
        this.pullData();
    } // end of constructor

    pullData() {

        console.log("yeet")

    }

    render() {

        return <h1> {this.state.id} </h1>    
  
    } //end render

} // end of component

export default PlantEntry;