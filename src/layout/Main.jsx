import React from "react"
import { Movies } from "../components/Movies"
import { Preloader } from "../components/Preloader"
import { Search } from "../components/Search"

const API_KEY = process.env.REACT_APP_API_KEY;


class Main extends React.Component {

    state = {
        movies: [],
        loading: true,
    }

    getMovies = () => {
        fetch (`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
        .then(responce => responce.json())
        .then(data => {this.setState({movies: data.Search, loading: false})})     
      }

    searchMovies = (search, type = 'all') => {
        this.setState({loading: true});
        fetch (`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${type !== 'all'? `&type=${type}`: ''}`)
        .then(responce => responce.json())
        .then(data => {this.setState({movies: data.Search, loading: false})})   
    }
          
      componentDidMount () {
        this.getMovies();
      }

    render () {
        const {movies, loading} = this.state;

        return <main className="container content"> 
        <Search searchMovies = {this.searchMovies}/>
        { loading ? (
          <Preloader/>
        ) :
            (<Movies movies={movies}/>) 
        }   
        </main>
    }
}

export {Main}