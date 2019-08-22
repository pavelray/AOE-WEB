import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');

export class CivilizationContainer extends React.Component {
    state = {
        Id : this.getId
    };

    getId=(id)=>{
        return id;
    }
    
    render(){
    return (
        <>
            <div className="ui segment">
                <h1 style={{textAlign:'center'}}>{this.props.title}</h1>
                <div className="ui grid">
                    <div className="four wide column">
                        <CivilizationList title="Civilizations" callBack={this.getId} />
                    </div>
                    <div className="eight wide column" id="civi-details">
                        <CivilizationDetails  id={this.state.id}/>
                    </div>
                </div>
            </div>
        </>
        )
    }
}

class CivilizationDetails extends React.Component{
    state = {
        id: this.props.id,
        civilizationDetails: []
    };

    GetCivilizationById = (id) => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${this.state.id}`)
        .then(response => {
            console.log(response);
            this.setState({
                civilizationDetails : response.data
            })
        });
    }

    render(){
        return(
            <>
            </>
        )
    }
}

class CivilizationList extends React.Component {
    constructor() {
        super();
        this.state = {
          error: null,
          isLoaded: false,
          civilizations: []
        };
      }

    componentDidMount() {
        console.log('Calling API', this.state);
        axios.get(`https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations`)
        .then(response => {
            this.setState({
                isLoaded: true,
                items: response.data.civilizations
              });
            console.log(this.state.items);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    render(){
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <div className="ui loading segment">
                <p></p>
                <p></p>
                </div>
            );
        } else {
            return(
                <>
                    {
                        items.map((index)=>{
                            return (
                            <div className="ui raised segments">
                                <div className="ui segment">
                                    <Civilization key={index.id} {...index} GetCivilizationById={this.props.callBack} />
                                </div>
                            </div>
                            )
                        })
                    }
                </>
            )
        }
    }
}



class Civilization extends React.Component{
   

    render(){
        return(
            <div className="ui list">
                <div className="item">
                    <div className="ui header" style={{cursor:'pointer'}} key={this.props.id} onClick={()=> this.props.GetCivilizationById(this.props.id)}>{this.props.name}</div>
                    <div className="description">
                        <label  className="ui label"><span>Army Type </span>: <span>{this.props.army_type}</span></label>
                        <h5>Pros:</h5>
                        <CivilizationBonus bonus={this.props.civilization_bonus}/>
                    </div>
                </div>
            </div>
        )
    }
}

const CivilizationBonus = (props)=> {
    return(
        <div className="ui bulleted list">
        {
            props.bonus.map((item)=>{
                return (
                    <div className="item">{item}</div>
                )
            })
        }
        </div>
        
    )
}

export default CivilizationContainer;