import React from 'react';
import Header from '../HeaderComponent/Header';
import SearchContainer from '../SearchComponent/SearchContainer';

export default function HomePage(){
    return(
        <React.Fragment>
            <Header />
            <SearchContainer />
        </React.Fragment>
    )
}