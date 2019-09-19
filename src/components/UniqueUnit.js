import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getUniqueUnit} from '../store/actions';

export class UniqueUnit extends Component {
    componentDidMount(){
        this.props.getUniqueUnit(this.props.url);
    }

    componentDidUpdate(nextProps){
        if(nextProps.url !== this.props.url){
            this.props.getUniqueUnit(this.props.url)
        }
    }

    render() {
        console.log(this.props);
        const unit = this.props.unit;
        return (
            <>
                <div className="line"><h5><b>Unique Unit:</b> {unit.name}</h5></div>
                <div className="line"><p>{unit.description}</p></div>
                <div className="line"><p>{unit.expansion}</p></div>
                <div className="line"><p>{unit.age}</p></div>
                <div className="line"><p>Build Time : {unit.build_time}</p></div>
                <div className="line"><p>Reload Time:{unit.reload_time}</p></div>
                <div className="line"><p>Attack Delay: {unit.attack_delay}</p></div>
                <div className="line"><p>Movement Rate: {unit.movement_rate}</p></div>
                <div className="line"><p>Line Of Sight: {unit.line_of_sight}</p></div>
                <div className="line"><p>Hit Point: {unit.hit_points}</p></div>
                <div className="line"><p>Range: {unit.range}</p></div>
                <div className="line"><p>Attack: {unit.attack}</p></div>
                <div className="line"><p>Armor: {unit.armor}</p></div>
                <div className="line"><p>Accuracy: {unit.accuracy}</p></div>
            </>
        )
    }
}

const mapStateToProps = (store) => {
    return { unit: store.unit};
  };

const mapDispatchToProps = (dispatch) =>  bindActionCreators({getUniqueUnit},dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(UniqueUnit)
