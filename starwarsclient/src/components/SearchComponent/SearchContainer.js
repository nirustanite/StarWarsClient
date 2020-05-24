import React, { Component } from 'react';
import { Search, Grid, Container } from 'semantic-ui-react';
import { fetchfilms, fetchcharacters } from '../../store/actions';
import { connect } from 'react-redux';
import Characters from '../CharacterComponent/Characters';


class SearchContainer extends Component{
  
    state = {
        isLoading: false,
        value: "",
    }


    handleResultSelect = (e, { result }) => {
        this.setState({
            value: result.title
        })
      
        this.props.fetchcharacters(result.id)
    };
    
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

    handleSearchChange = (e) => {
       this.search(e.target.value)
    };


    render(){
        const { isLoading, value } = this.state;

        return(
            <React.Fragment>
            <br />
            <Container padded>
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
            </Container>
            <br />
            {this.props.characterslist && <Characters characters={this.props.characterslist} />}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        filmslist: state.filmslist,
        characterslist: state.characterslist
    }
}


export default connect(mapStateToProps,{fetchfilms, fetchcharacters})(SearchContainer)