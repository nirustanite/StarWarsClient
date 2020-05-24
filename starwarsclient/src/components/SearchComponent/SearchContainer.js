import React, { Component } from 'react';
import { Search, Grid } from 'semantic-ui-react';
import { fetchfilms } from '../../store/actions';
import { connect } from 'react-redux';
import _ from "lodash";

class SearchContainer extends Component{
  
    state = {
        isLoading: false,
        value: "",
    }


    handleResultSelect = (e, { result }) => {
        this.setState({
            value: result.title
        })
        
    };
    
    search = (value) => {
        this.setState({
            isLoading: true,
            value
        })

        setTimeout(() => {
            this.props.fetchfilms(value);
            this.setState({
                isLoading: false
            })
          }, 300);

        
    }

    handleSearchChange = (e) => {
       this.search(e.target.value)
    };


    render(){
        const { isLoading, value } = this.state;

        return(
            <React.Fragment>
              <Grid>
                    <Grid.Column width={6}>
                    <Search
                        fluid
                        loading={isLoading}
                        onResultSelect={this.handleResultSelect}
                        onSearchChange={_.debounce(this.handleSearchChange, 500, {
                            leading: true
                          })}
                        results={this.props.filmslist}
                        value={value}
                    />
                    </Grid.Column>
                </Grid>
               
               
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        filmslist: state.filmslist
    }
}


export default connect(mapStateToProps,{fetchfilms})(SearchContainer)