import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movieslist,directorslist } from '../actions';
import { bindActionCreators } from 'redux';
import MovieList from '../components/MovieList/MovieList';

class App extends Component {

    componentWillMount() {
        this.props.movieslist() // componentWillMount runs before render via mapsDispatchToProps
        this.props.directorslist() // get directors
    }
    
    render(){
        const {movies} = this.props.data;
        return(
            <MovieList data = {movies}/>
        )
    }
}
// returns state from redux
const mapStateToProps = (state) => {
    //what is state? State is grabbed from the reducer via connect.
    return {
        data: state.movies
    }
}

// this returns actions from redux
const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        movieslist,directorslist
    },dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(App);

// inside of connect put what you want to inject into this.props.
// ie. mapState to props and movielist.