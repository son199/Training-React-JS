import React from 'react';
import {dataListStuden } from '../../DataFake'
import DetailSchool from './DetailSchool';

function ListSchool(props) {

    const a = () => {



    }
    console.log(dataListStuden  );
    
    return (
        <div>
            {dataListStuden.map((item , ix) => {console.log( 'data map',item.name  )})}
            <DetailSchool ></DetailSchool>
        </div>
    );  
}

export default ListSchool;  