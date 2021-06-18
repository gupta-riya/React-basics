import React, { Component } from 'react'
import {getMovies} from './MovieService'

export default class Movies extends Component {
    
    
    constructor(props)
    {
        super(props);
        this.state = {
            //we need to have a list of movie that should not be change on typing in search box
            movies: getMovies(),
            currSearchText: "",

            // we need a temporary state that changes on typing in search box
            // filterMovies: getMovies()
        }
    }
    
    
    onDelete = (id )=> {

        let filterArr = this.state.movies.filter(movieObj=>{
            return movieObj._id!==id
        })

        this.setState({movies: filterArr})
    }
    
    
    
    handleChange = (e) =>
    {
        //We are kind of creating two states for similar content. As the filter movies operation is temporary and occurs with the state change
        //  of currSearchText we can simply form the filterMovies array in the render method itself. So there is no need to make
        // it as a state.
        let val = e.target.value;

        this.setState({
            currSearchText:val
        });

        // if(val === '')
        // {
        //     this.setState({
        //     filterMovies: this.state.movies,
        //     currSearchText:''}) 
        //     return;
        // }
        


        // let filterArr = this.state.movies.filter(movieObj=>{
        //     let title = movieObj.title.trim();
        //     title = title.toLowerCase();
        //     return title.includes(val.toLowerCase());
        // })

        
        
    }


    render() {

        let {movies,currSearchText} = this.state;
        let filterMovies = [];
        if(currSearchText !== '')
        {
            filterMovies = movies.filter(movieObj=>{
                let title = movieObj.title.trim();
                title = title.toLowerCase();
                return title.includes(currSearchText.toLowerCase());
            })
        }
        else
        {
            filterMovies = movies;
        }


        return (
            <div className = 'container'>
            <div className = 'row'>
                <div className = 'col-3'>
                    <h1>hello</h1>
                </div>
                <div className = 'col-9'>
                   <input onChange = {this.handleChange} type = "text"></input> 
                   <table className="table">
                    <thead>
                        <tr>
        
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            filterMovies.map(movieObj=>(
                                <tr scope='row' key = {movieObj._id}>
                                    <td>{movieObj.title}</td>
                                    <td>{movieObj.genre.name}</td>
                                    <td>{movieObj.numberInStock}</td>
                                    <td>{movieObj.dailyRentalRate}</td>
                                    <td><button onClick = {()=> this.onDelete(movieObj._id)} type='button' className = 'btn btn-danger'>Delete</button></td>
                                </tr>
                            ))
                        }


                    </tbody>
                    </table>
                </div>
            </div>
           </div>
        )
    }
}
