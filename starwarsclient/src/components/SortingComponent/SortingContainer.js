import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { Container, Button } from 'semantic-ui-react';
import { fetchcharacterssorted } from '../../store/actions';
import './SortingContainer.css';

class SortingContainer extends React.Component{
    //initial state
    state = {
        selectedOption:  {value: "asc", label: "Ascending"},
        options: [
            {value: "asc", label: "Ascending"},
            {value: "desc", label: "Descending"},
        ]
    };

    // habndle button click. call the api to fetch data
    handleClick = (e) => {
        e.preventDefault();
        this.props.fetchcharacterssorted(this.props.film.id, this.state.selectedOption.value)
   }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    };

    render(){
        const { selectedOption } = this.state;
        return(
            <React.Fragment>
            <Container>
               {this.props.characterslist.length !== 0 && 
                    <div className="selectcontainer">
                        <Select className="select"
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={this.state.options}
                        />
                        <Button className="buttonsort" onClick={this.handleClick}>Sort</Button>
                    </div>
                }
            </Container>
            </React.Fragment>
        )   
    }
   
}

const mapStateToProps = (state) => {
    return{
        characterslist: state.characterslist
    }
}


export default connect(mapStateToProps, { fetchcharacterssorted })(SortingContainer)
