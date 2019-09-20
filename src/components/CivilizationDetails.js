import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCivilizationById} from '../store/actions';
import UniqueUnit from './UniqueUnit';

export class CivilizationDetails extends Component {
    componentDidUpdate(nextProps){
        if(nextProps.id !== this.props.id){
            this.props.getCivilizationById(this.props.id)
        }
    }

    render() {
        const civilization = this.props.civilization;
        if(civilization !== null){
            return (
                <div className="ui segment">
                    <h2 className="ui dividing header">{civilization.name}</h2>
                    <div className="description">
                        <div className="inline fields">
                            <div className="field">
                                <label>Army Type: </label> <span>{civilization.army_type}</span> 
                            </div>
                            <div className="field">
                                <label>Expansion : </label> <span>{civilization.expansion}</span>
                            </div>
                            <div className="field">
                                <label>Team Bonus : </label> <span>{civilization.team_bonus}</span>
                            </div>
                        </div>
                        <h4 className="ui dividing header">Pros:</h4>
                        <CivilizationBonus bonus={civilization.civilization_bonus}/>
                    </div>
                    
                    <UniqueUnit url={civilization.unique_unit[0]} />
                </div>
            );
        }
        else{
            return(<></>);
        }
  }
}


const CivilizationBonus = (props)=> {
    return(
        <div className="ui bulleted list">
        {
            props.bonus.map((item)=>{
                return (
                    <div className="item" key={item}>{item}</div>
                )
            })
        }
        </div>
    )
}


const mapStateToProps = (store) => {
    return { id: store.civilizations.id, civilization: store.civilizations.civilization};
  };

const mapDispatchToProps = (dispatch) =>  bindActionCreators({getCivilizationById},dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(CivilizationDetails)
