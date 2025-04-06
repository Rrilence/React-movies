
import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    }

    handleKey = (event) => {
        if(event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handleType = (event) => {
        this.setState(() => ({type: event.target.value}), () => {
            this.props.searchMovies(this.state.search, this.state.type)
        });
    }


    render () {
        return <div className="row">
          <div className="input-field">
            <input 
            placeholder="search" 
            id="email_inline" 
            type="search" 
            className="validate"
            value={this.state.search}
            onChange={(e) => this.setState({search: e.target.value})}
            onKeyDown={this.handleKey}
            />
            <button className="btn search-btn" onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search</button>
          </div>
          <div>
          <label>
                <input className="with-gap" name="type" type="radio" data-type="all" value = "all" onChange={this.handleType} />
                <span>All</span>
            </label>
          <label>
                <input className="with-gap" name="type" type="radio" data-type="movie" value = "movie" onChange={this.handleType}/>
                <span>Movie</span>
            </label>
          <label>
                <input className="with-gap" name="type" type="radio" data-type="series" value = 'series' onChange={this.handleType} />
                <span>Series</span>
            </label>
          </div>
      </div>
    }
}
export {Search}