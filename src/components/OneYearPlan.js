import React from 'react';
import Quarter from './Quarter'
import '../static/css/style.css'
import firebase from "firebase";

export default class OneYearPlan extends React.Component {
  constructor(props){
    super(props)
  }


  render () {
    return (
      <div>
        <table id="planningTable">
          <tr>
            <td>
              <Quarter qt="FA" db={this.props.db}/>
            </td>
            <td>
              <Quarter qt="WI" db={this.props.db}/>
            </td>
            <td>
              <Quarter qt="SP" db={this.props.db}/>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}
