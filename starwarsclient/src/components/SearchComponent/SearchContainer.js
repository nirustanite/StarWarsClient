import React, { Component } from 'react';
import { Search, Grid, Container } from 'semantic-ui-react';
import { fetchfilms, fetchcharacters } from '../../store/actions';
import { connect } from 'react-redux';
import Characters from '../CharacterComponent/Characters';
import SortingContainer from '../SortingComponent/SortingContainer';

// Searching of the films based on name
class SearchContainer extends Component{
  
    //initial state
    state = {
        isLoading: false,
        value: "",
        resultSelected: {}
    }

    // after the result is selected fetch the list of characters
    handleResultSelect = (e, { result }) => {
        this.setState({
            value: result.title,
            resultSelected: result
        })
      
        this.props.fetchcharacters(result.id);
    };
    
    // searching based on the text given in search box and updating the state
    search = (value) => {
        this.setState({
            isLoading: true,
            value
        })
         
        this.props.fetchfilms(value);
        this.setState({
            isLoading: false
        })  
    }

    // handling change in the search bar
    handleSearchChange = (e) => {
       this.search(e.target.value)
    };


    render(){
        const { isLoading, value } = this.state;

        return(
            <React.Fragment>
            <br />
            <Container >
                <Grid>
                    <Grid.Column width={2}>
                        <Search
                            loading={isLoading}
                            onResultSelect={this.handleResultSelect}
                            onSearchChange={this.handleSearchChange}
                            results={this.props.filmslist}
                            value={value}
                        />
                    </Grid.Column>
                </Grid>
                <br />
                <SortingContainer film={this.state.resultSelected}/>
            </Container>
            <br />
            {this.props.characterslist && <Characters characters={this.props.characterslist} />}
            </React.Fragment>
        )
    }
}

// gives the data from the resucer
const mapStateToProps = (state) => {
    return{
        filmslist: state.filmslist,
        characterslist: state.characterslist
    }
}

// connect function maps stor with the container
export default connect(mapStateToProps,{fetchfilms, fetchcharacters})(SearchContainer)