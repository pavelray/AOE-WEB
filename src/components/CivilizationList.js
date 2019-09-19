import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCivilizations,selectCivilization} from '../store/actions';

export class CivilizationList extends Component {

    componentDidMount(){
        this.props.getCivilizations();
    }

    
    render() {
        let list = null;
        if(this.props.civilizations.length >0 ){
            list = this.props.civilizations;
            return(
                <div className="ui tiny horizontal list">
                {
                    list.map((civilization)=>{
                        return(
                            <div className="item" key={civilization.id}>
                                <div className="content">
                                    <span className="header" id={civilization.id} 
                                        style={{cursor:'pointer'}} 
                                        onClick={(e)=>{this.props.selectCivilization(parseInt(e.target.id))}}>
                                        {civilization.name}
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            )
        }
        else{
            return (
                <>
                <div className="ui active centered inline loader"></div>
                </>
            )
        }
    }
}

const mapStateToProps = (store) => {
    return { civilizations: store.civilizations.civilizations};
  };

const mapDispatchToProps = (dispatch) =>  bindActionCreators({getCivilizations,selectCivilization},dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(CivilizationList)
