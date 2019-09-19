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
                    <div className="ui list">
                        <div className="item">
                            <div className="ui header" style={{cursor:'pointer'}}>{civilization.name}</div>
                            <br/>
                            <div className="description">
                                <div className="line"><h5 className="ui">Army Type: {civilization.army_type} .</h5></div>
                                <div className="line"><h5 className="ui">Expansion: {civilization.expansion} .</h5></div>
                                <div className="line"><h5 className="ui">Team Bonus: {civilization.team_bonus} .</h5></div>
                                <br/>
                                <h4 className="ui sub header">Pros:</h4>
                                <CivilizationBonus bonus={civilization.civilization_bonus}/>
                            </div>
                        </div>
                        
                        <UniqueUnit url={civilization.unique_unit[0]} />
                    </div>
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
