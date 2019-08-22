import React from 'react';

export const StructureContainer = (props) => {
    return (
        <>
            <div className="ui segment">
                <h1 style={{textAlign:'center'}}>{props.title}</h1>
                <div className="ui grid">
                    <div className="four wide column">
                        <h1>Structure Page</h1>
                    </div>
                    <div className="eight wide column"></div>
                </div>
            </div>
        </>
    )
}

export default StructureContainer;