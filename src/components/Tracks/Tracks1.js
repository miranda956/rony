import React, { Component } from 'react'
import {Consumer} from "../../Context"
import Spinner from '../layout/spinner'
import Track from '../Tracks/Tracks';

class Tracks1 extends Component{
    render(){
        return(
            <Consumer>
            {value=>{
                const {track_list, heading} = value;
                console.log(value)
                if(track_list === undefined || track_list.length === 0){
                    return <Spinner/>
                }else {
                    return (
                        <React.Fragment>
                            <h2 className="text-center display-4 mb-5" style={{fontSize:40}}>{heading}</h2>
                            <div className="row">
                                {track_list.map(item => (
                                    <Track key={item.track.track_id} track={item.track}/>
                                ))}
                            </div>
                        </React.Fragment>
                        
                    );
                }
            }}

            
            </Consumer>
        )
    }

}
export default Tracks1;