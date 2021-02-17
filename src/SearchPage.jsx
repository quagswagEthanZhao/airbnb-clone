import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import './SearchPage.css';
import SearchResult from './SearchResult';
import pic_1 from './bedroom-pic-1.jpg';

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays-26 august to 30 august-2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img={pic_1}
        location="Private room in center of New York"
        title="stay at this pacious Edwardian House"
        description="1 guest - 1 bedroom - 1 bed -1.5 shared bthrooms -Wifi Connection ready"
        star={4.73}
        price="$30 / night"
        total="$117 / night"
      />
    </div>
  );
};

export default SearchPage;
