import React, { Component } from 'react'
import {connect} from 'react-redux';
import CivilizationList from './CivilizationList'
import CivilizationDetails from './CivilizationDetails'

export class App extends Component {

    renderCivilizationDetails(){
        if(this.props.id !== null){
           
            return(
                <>
                    <CivilizationDetails/>
                </>
            )
        }
        else{
            return(<></>);
        } 
    }

  render() {
    return (
        <div>
            <div className="ui container">
                <div className="ui segment" style={{marginTop:50}}>
                    <CivilizationList/>
                </div>
                {this.renderCivilizationDetails()}
            </div>
        </div>
    )
  }
}

const mapStateToProps = (store) => {
    return { civilization: store.civilizations.civilization, civilizations: store.civilizations.civilizations};
};

export default connect(mapStateToProps)(App)
