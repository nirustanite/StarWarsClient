import React,{ useEffect, useState } from 'react';
import { Card, Grid, Container, Image} from 'semantic-ui-react';
import './Characters.css';
import Paginator from 'react-hooks-paginator';

export default function Characters(props){
    const pageLimit = 9;
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);

    useEffect(() => {
        if(!props.characters) return 
            setCurrentData(props.characters.slice(offset, offset + pageLimit));
    }, [offset, props.characters]);


    return(
        <React.Fragment>
          <br />
          <Container>
           <Grid columns={3}>
                {currentData.map((character,i) => {
                    return  <Grid.Column key={i} width={5}>
                            <Card className="countrycard">
                                <Card.Content>
                                <Image floated='right' size='mini'
                                src={require('../../assets/profileicon.png')} />
                                    <Card.Header> Name: {character.name}</Card.Header>
                                    <Card.Description> <b>Height</b>: {character.height}</Card.Description>
                                    <Card.Description> <b>Gender</b>: {character.gender}</Card.Description>
                                </Card.Content>
                            </Card>
                </Grid.Column>
                })}
           </Grid> 
          <br />
          <br />
          <div>
           {props.characters && <Paginator
           totalRecords={props.characters.length}
           pageLimit={pageLimit}
           pageNeighbours={1}
           setOffset={setOffset}
           currentPage={currentPage}
           setCurrentPage={setCurrentPage}
           />}
           </div>
           </Container>
        </React.Fragment>
    )
}