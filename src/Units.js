import React from 'react';

export const UnitContainer = (props) => {
    return (
        <>
            <div className="ui segment">
                <h1 style={{textAlign:'center'}}>{props.title}</h1>
                <div className="ui grid">
                    <div className="four wide column">
                        <h1>Unit Page</h1>
                    </div>
                    <div className="eight wide column"></div>
                </div>
            </div>
        </>
    )
}

export default UnitContainer;