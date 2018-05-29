import React from 'react';
import OneYearPlan from './OneYearPlan'
import firebase from "firebase";


export default class FourYearPlan extends React.Component {
    constructor(props) {
        super(props)

        var config = {
            apiKey: "AIzaSyDiRGUJA0iMOn4FdKxcg4NN5d6t-RyezkY",
            authDomain: "csehub-c4399.firebaseapp.com",
            databaseURL: "https://csehub-c4399.firebaseio.com",
            projectId: "csehub-c4399",
            storageBucket: "csehub-c4399.appspot.com",
            messagingSenderId: "499439281556"
        };
        firebase.initializeApp(config);
    }

  render() {
    return(
      <div id="fullWidget">
        <OneYearPlan db={firebase}/>
        <OneYearPlan db={firebase}/>
        <OneYearPlan db={firebase}/>
        <OneYearPlan db={firebase}/>
      </div>
    );
  }
}
