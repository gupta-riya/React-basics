import React, { Component } from 'react'
// import { getMovies } from './getMovies';
import axios from 'axios';
export default class Movies extends Component {
    constructor() {
        super();
        this.state = {
            // movies: getMovies(),
            movies:[],
            currSearchText: '',
            // for pagination
            currPage:1,
            //setting default genres
            genres:[{_id:'abcd',name:'All Genres'}],
            currGenres : 'All Genres'
            
        }
    }

    async componentDidMount(){
        let res = await axios.get('https://backend-react-movie.herokuapp.com/movies');
        let genresRes = await axios.get('https://backend-react-movie.herokuapp.com/genres');
        console.log(res);
        this.setState({
            movies:res.data.movies,
            // adding network data to existing genres
            genres:[...this.state.genres,...genresRes.data.genres]
        })
    }



    handleChange = (e) => {
        let val = e.target.value;
        // console.log(val);
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

        // flaw in this as it will sort on the basis of complete movies not the part displaying on the screen
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

    // change page number
    handlePagination = (pageNumber)=>{

        this.setState({
            currPage:pageNumber
        })
    }

    // change genre
    changeGenre = (genreName) =>{
        this.setState({
            currGenres:genreName
        })
    }



    render() {
        // console.log('render');
        let { movies, currSearchText,currPage,genres,currGenres } = this.state; //ES6 destructuring
        let limit = 4;
        let filteredArr = [];
        if (currSearchText === '') {
            filteredArr = movies;
        }
        else {
            filteredArr = movies.filter(function (movieObj) {
                let title = movieObj.title.toLowerCase();
                // console.log(title);
                return title.includes(currSearchText.toLowerCase());
            })
        }

        if(currGenres!=='All Genres')
        {
            filteredArr = filteredArr.filter(function(movieObj){
                return movieObj.genre.name === currGenres
            })
        }

        let numberOfPages = Math.ceil(filteredArr.length/limit);
        let pageNumberArr = [];
        for(let i = 0 ; i < numberOfPages ; i++)
        {
            pageNumberArr.push(i+1);
        }
        let startIndex = (currPage-1) * limit;
        let endIndex = startIndex + limit;      // it will automatically adjust itself for the left out elements
        filteredArr = filteredArr.slice(startIndex,endIndex);
        
        return (
            //JSX
            // wrap it as we are using jsx with html and it can retun only one block
            <>
            { 
            this.state.movies.length===0?<div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>:

            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <ul className="list-group">
                          {
                             genres.map((genre)=>(

                                  <li key={genre._id} onClick = {() => this.changeGenre(genre.name)} className='list-group-item'>
                                      {genre.name}
                                  </li>  
                                ))
                            }
                        </ul>
                        <h5>Current Genre: {currGenres}</h5>
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
                                        <i onClick = {this.sortByStock} className="fa fa-sort-asc" aria-hidden="true"></i>
                                        Stock
                                        <i onClick = {this.sortByStock} className="fa fa-sort-desc" aria-hidden="true"></i>
                                    </th>
                                    <th scope="col">
                                        <i onClick = {this.sortByRatings} className="fa fa-sort-asc" aria-hidden="true"></i>
                                        Rate
                                        <i onClick = {this.sortByRatings} className="fa fa-sort-desc" aria-hidden="true"></i>
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

                        {/* pagination */}
                        <nav aria-label="...">
                            <ul className="pagination">
                            {
                                pageNumberArr.map((pageNumber)=>{
                                    
                                    let classStyle = pageNumber===currPage?'page-item active':'page-item';
                                    return(
                                        <li key = {pageNumber} onClick = {() => this.handlePagination(pageNumber)} className= {classStyle}><span className="page-link">{pageNumber}</span></li>
                                    )
                                })
                            }
                        </ul>
                        </nav>  
                    </div>
                </div>
            </div>
            }
            </>
        )
    }
}


