import React from 'react';
const axios = require('axios');

export class CivilizationList extends React.Component {
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
        axios.get('https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
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
            return <div>Loading...</div>;
        } else {
            return(
                <>
                    <h1>{this.props.title}</h1>
                    {
                        items.map((index)=>{
                            return (
                            <div>
                                <Civilization key={index.id} {...index} />
                                <br/>
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
                    <div className="header">{this.props.name}</div>
                    <div className="description">{this.props.army_type}</div>
                    <CivilizationBonus bonus={this.props.civilization_bonus}/>
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

export default CivilizationList;