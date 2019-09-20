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
                <h4 className="ui dividing header">Unique Unit: {unit.name}</h4>
                <div className="line"><p>{unit.description}</p></div>
                <div className="line"><p>Expansion : {unit.expansion}</p></div>
                <div className="line"><p>Age: {unit.age}</p></div>
                <h5 className="ui dividing header">Stats</h5>
                <table class="ui red table">
                <thead>
                    <tr>
                        <th>Build Time</th>
                        <th>Reload Time</th>
                        <th>Attack Delay</th>
                        <th>Movement Rate</th>
                        <th>Line Of Sight</th>
                        <th>Hit Point</th>
                        <th>Range</th>
                        <th>Attack</th>
                        <th>Armor</th>
                        <th>Accuracy</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{unit.build_time}</td>
                        <td>{unit.reload_time}</td>
                        <td>{unit.attack_delay}</td>
                        <td>{unit.movement_rate}</td>
                        <td>{unit.line_of_sight}</td>
                        <td>{unit.hit_points}</td>
                        <td>{unit.range}</td>
                        <td>{unit.attack}</td>
                        <td>{unit.armor}</td>
                        <td>{unit.accuracy}</td>
                    </tr>
                </tbody>
                </table>
            </>
        )
    }
}

const mapStateToProps = (store) => {
    return { unit: store.unit};
  };

const mapDispatchToProps = (dispatch) =>  bindActionCreators({getUniqueUnit},dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(UniqueUnit)
