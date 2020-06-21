import React,{Component} from 'react';
import axios from 'axios';
import Spinner from '../layout/spinner';
import {Consumer} from '../../Context';


class search extends Component{

    state={
        trackTitle:'',
        isLoading:false,
        description:''
    }

    onchange=(e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
    componentDidMount(){
        Math.floor(Math.random()*2===0? this.setState({description:'get the lyrics of your favorite song'}):this.setState({description:'search latest tracks'}))
    }
 findTrack=(dispatch,e)=>{
     e.preventDefault()
     this.setState({isLoading:true})
     axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
     .then(res=>{
         dispatch({
             type:'SEARCH_TRACKS',
             payload:res.data.message.body.track_list
         })
         this.setState({trackTitle:'',isLoading:false})
     })
     .catch(err=>{
         console.log(err)
     })
 } 
 render(){
     return (
         <Consumer>
         {
             value=>{
                 const {dispatch}=value
                 return (
                     <div className="card card-body mb-5 p-a">
                     <h1 className="display-4 text-center">
                     search for a song</h1>
                     <p className="lead text-center">{this.state.description}</p>
                     <form onSubmit={this.findTrack.bind(this,dispatch)}>
                     <div className="form-group">
                     <input 
                     type="text"
                     className="form-control form-control-lg"
                     placeholder="song Title ..."
                     name="trackTitle"
                     value={this.state.trackTitle}
                     onChange={this.onchange}
                     ></input>
                     </div>
                     <button className="btn btn-custom btn-lg btn-block mb-5"type="submit">search</button>
                     </form>
                     {this.state.isLoading && <Spinner></Spinner>} 
                     </div>
                 )
             }
         }         
         </Consumer>
     )
 }
}
export default search;
