import React,{useEffect} from 'react';
import FoodList from '../components/FoodList/FoodList';
import { getAllFoods } from '../lib/api';
import useHttp from '../hooks/use-http';

const AllFoods = () => {

    const { data, status, error, sendRequest } = useHttp(getAllFoods, true);
    
    useEffect(() => {
        sendRequest();
    }, [sendRequest]);
    
    if (status === 'pending') {
        return <h1>Loading......</h1>
    }

    if (error) {
        return <h1>{ error }</h1>
    }
    
    return (
        <div>
            {data && <FoodList foods={data} />}
      </div>
    )
}

export default AllFoods;