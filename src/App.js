import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux'
import { addFeature, removeFeature, toggleFeature } from './actions/carActions'

// STEP 2 - connect the component to the redux store

const App = (props) => {

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures removeFeature={props.removeFeature} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures addFeature={props.addFeature} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );

};

// wrap the component export in the 'connect' function
// call 'connect' twice
// Pass the component that we want to connect into the second call (which is calling 'App')
// The first call will take in a function and an object
// The function returns an object
// Any property on the returned object gets added to the component props

const mapStateToProps = state => {
  return state
}

// connect parameters will eventually saved as 'props' of App component.
export default connect( 
  mapStateToProps, 
  { 
    addFeature, 
    removeFeature, 
  } // this is shorthands of the object (deconstructor) which is same as { addFeature: addFeature, removeFeature: removeFeature }
)(App);
// the first callback function (mapStateToProps) parameter 'state' automatically receives a 'state' from 'store' props from <Provider>
// the 'mapStateProps' return the object, which will added as one of 'props' of component 'App' directly.
// the second parameter of connect which is object,
// that object receives 'action function'
// basically, 'connect' function wrap the 'action function' inside 'dispatch' function under the hood
// so whenever we call 'action function', it actually invoking 'dispatch' function under the hood
// and that 'dispatch' function pass that 'action' into the 'reducer' function.

/* 
  connect(callback, object ){
    dispatch(object)
  }
*/
