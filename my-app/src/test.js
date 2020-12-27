import React from 'react';

function Test(props) {
console.log(props);
    return (
        <div >
        phan 1 {props.email} 
        </div>  
    );
}

export default Test;