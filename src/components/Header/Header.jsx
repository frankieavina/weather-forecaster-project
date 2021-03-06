/* eslint-disable quotes */
/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CloudIcon from '@material-ui/icons/Cloud';
import ListAltIcon from '@material-ui/icons/ListAlt';
import styled from 'styled-components';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from '@reach/combobox';
import '@reach/combobox/styles.css';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WeatherContext from '../../context/WeatherContext';
import getCoordinates from '../../api/getLocation';

const HeaderWrapper = styled.header`
  display: flex; 
  justify-content: center;
  flex-direction: column; 

  .firstColHeader{
    display: flex;
    justify-content: space-between; 
    width: 100%; 
    margin: 1rem; 
  }

  .secondColHeader{
    display: flex;
    justify-content: center; 
    width: 100%; 
    margin: 1rem; 
    margin: auto 0;
  }

  .cityInput{
    font-size:18px;
    width:600px;
    height:100%;
    padding: 1rem; 
    background-color: white;
    color:black;
    margin: auto 0; 
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
  }
  .input:hover{
    cursor: pointer; 
  }

  search-box{
    border-radius:1px solid black;
  }

  .name{
    font-size: 1.5rem;
    color: white; 
    font-weight: bold;
  }

  .logo{
    color: white; 
  }

  .logo:hover{
    cursor: pointer; 
  }

  `;

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { setNewCity, setEdit } = useContext(WeatherContext);
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 36.7394421, lng: () => -119.7848307 },
      radius: 200 * 1000,
    }
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = (location) => {
    setValue(location, false);
    getCoordinates(location)
      .then((results) => {
        setNewCity(parseFloat(results.data[0].lat), parseFloat(results.data[0].lon));
      });
    clearSuggestions();
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignIn = () => {
    navigate(`sign-in/`);
  };

  const handleLogout = () => {
    console.log('Logout!');
  };

  return (
    <HeaderWrapper>
      <div className="firstColHeader">
        <div>
          <CloudIcon className="logo" />
          <span className="name">AWA</span>
        </div>
        <div>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <AccountCircleIcon className="logo" />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleSignIn}>Sign In</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
      <div className="secondColHeader">
        <Combobox onSelect={handleSelect} aria-labelledby="demo">
          <ComboboxInput value={value} onChange={handleInput} disabled={!ready} placeholder="Search for City" className="cityInput" />
          <ComboboxPopover>
            <ComboboxList>
              {status === 'OK' &&
                data.map(({ place_id, description }) => (
                  <ComboboxOption key={place_id} value={description} />
                ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </div>

    </HeaderWrapper>
  );
}

export default Header;
