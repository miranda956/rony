import React from 'react';
import Spinner from './components/layout/spinner';

function Withloading(Component){
    return function WithloadingComponent({isloading, ...props}){
        if(!isloading) return (<Component {...props}/>);
        return (<Spinner>searching ...</Spinner>)
    }
}
export default Withloading;
