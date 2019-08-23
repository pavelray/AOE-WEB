import React from 'react';
import ReactDOM from 'react-dom';
import uniqueId from 'react-html-id';
const axios = require('axios');


export class CivilizationContainer extends React.Component {
    constructor(){
        super();
        uniqueId.enableUniqueIds(this);
    }

    state = {
        Id : null
    };

    setId=(id)=>{
        this.setState(
            {
                Id : id
            }
        )
    }
 
    render(){
    console.log('CivilizationContainer render ', this.state);
    return (
        <>
            <div className="ui segment">
                <h1 style={{textAlign:'center'}}>{this.props.title}</h1>
                <div className="ui grid">
                    <div className="four wide column">
                        <CivilizationList  title="Civilizations" callBack={this.setId.bind(this)} />
                    </div>
                    <div className="eight wide column" id="civi-details">
                        <CivilizationDetails  id={this.state.Id} />
                    </div>
                </div>
            </div>
        </>
        )
    }
}

class CivilizationDetails extends React.Component{
    constructor(){
        super();
        console.log('CivilizationDetails Constructor');
    }
    
    componentWillReceiveProps({someProp}) {
        this.setState({...this.state,someProp});
        console.log(this.state,this.props.id);
    }
    
    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${this.props.id}`)
        .then(response => {
            this.setState({
                civilizationDetails : response.data
            })
            console.log('CivilizationDetails componentDidMount', this.state);
        });
    }
    render(){
        //console.log('CivilizationDetails', this.props);
        
        
        return(
            <>
            
            </>
        )
    }
}

class CivilizationList extends React.Component {
    constructor() {
        super();
        uniqueId.enableUniqueIds(this);
    }

    state = {
    error: null,
    isLoaded: false,
    civilizations: []
    };

    componentDidMount() {
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
                            <div className="ui raised segments" key={this.nextUniqueId()}>
                                <div className="ui segment">
                                    <Civilization {...index} GetCivilizationById={this.props.callBack.bind(this)} />
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
    constructor(){
        super();
        uniqueId.enableUniqueIds(this);
    }
    render(){
        return(
            <div className="ui list" key={this.nextUniqueId()}>
                <div className="item">
                    <div className="ui header" style={{cursor:'pointer'}}  onClick={()=> this.props.GetCivilizationById(this.props.id)}>{this.props.name}</div>
                    <div className="description">
                        <label  className="ui label" ><span>Army Type </span>: <span>{this.props.army_type}</span></label>
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
                    <div className="item" key={item}>{item}</div>
                )
            })
        }
        </div>
        
    )
}

export default CivilizationContainer;