import React, { useState, useEffect } from 'react';
import PersonRow from './PersonRow'
import PersonHeader from './PersonHeader'

export default function List(){

    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('http://174.138.103.233/api/employees')
    .then(response => response.json())
    .then(data => setList(data));

      });


      const personList=getPersonList(list);
    return(
        <table>
            <PersonHeader/>
            {personList}
        </table>

    );
}

function getPersonList(pList){
    return pList.map(p=> <PersonRow person={p}/>)
}