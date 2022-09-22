import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Person = () => {
    const params = useParams();

    console.log(params.personId);

    return (
      <h1>Hey There ! 👋 👋👋👋👋👋</h1>
    )
}

export default Person