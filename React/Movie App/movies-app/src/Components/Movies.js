import React, { Component } from 'react'
import { getMovies } from './getMovies';
export default class Movies extends Component {
    constructor() {
        super();
        this.state = {
            movies: getMovies(),
            currSearchText: ''
        }
    }
    handleChange = (e) => {
        let val = e.target.value;
        console.log(val);
        this.setState({
            currSearchText: val
        })
    }
    onDelete = (id) => {
        let arr = this.state.movies.filter(function (movieObj) {
            return movieObj._id !== id;
        })
        // console.log(arr);
        this.setState({
            movies: arr
        });
    }


    // sorting applied
    sortByStock = (e) =>{

        let className = e.target.className;
        let sortedMovies = [];
        if(className==='fa fa-sort-asc')
        {
            sortedMovies = this.state.movies.sort(function(movieObj1,movieObj2){
                return movieObj2.numberInStock - movieObj1.numberInStock;
            })
        }
        else
        {
            sortedMovies = this.state.movies.sort(function(movieObj1,movieObj2){
                return movieObj1.numberInStock - movieObj2.numberInStock;
            })
        }

        this.setState({
            movies:sortedMovies
        })
    }



    sortByRatings = (e) =>{
        let className = e.target.className;
        let sortedMovies = [];
        if(className==='fa fa-sort-asc')
        {
            sortedMovies = this.state.movies.sort(function(movieObj1,movieObj2){
                return movieObj2.dailyRentalRate - movieObj1.dailyRentalRate;
            })
        }
        else
        {
            sortedMovies = this.state.movies.sort(function(movieObj1,movieObj2){
                return movieObj1.dailyRentalRate - movieObj2.dailyRentalRate;
            })
        }

        this.setState({
            movies:sortedMovies
        })
    }




    render() {
        console.log('render');
        let { movies, currSearchText } = this.state; //ES6 destructuring
        let filteredArr = [];
        if (currSearchText === '') {
            filteredArr = movies;
        }
        else {
            filteredArr = movies.filter(function (movieObj) {
                let title = movieObj.title.toLowerCase();
                console.log(title);
                return title.includes(currSearchText.toLowerCase());
            })
        }

        return (
            //JSX
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        Hello
                    </div>
                    <div className='col-9'>
                        <input type='search' value={this.state.currSearchText} onChange={this.handleChange} ></input>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">
                                        <i onClick = {this.sortByStock} class="fa fa-sort-asc" aria-hidden="true"></i>
                                        Stock
                                        <i onClick = {this.sortByStock} class="fa fa-sort-desc" aria-hidden="true"></i>
                                    </th>
                                    <th scope="col">
                                        <i onClick = {this.sortByRatings} class="fa fa-sort-asc" aria-hidden="true"></i>
                                        Rate
                                        <i onClick = {this.sortByRatings} class="fa fa-sort-desc" aria-hidden="true"></i>
                                    </th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filteredArr.map((movieObj) => {
                                        return (
                                            <tr key={movieObj._id} >
                                                <td></td>
                                                <td>{movieObj.title}</td>
                                                <td>{movieObj.genre.name}</td>
                                                <td>{movieObj.numberInStock}</td>
                                                <td>{movieObj.dailyRentalRate}</td>
                                                <td><button onClick={() => {
                                                    this.onDelete(movieObj._id)
                                                }} type="button" className="btn btn-danger">Delete</button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}