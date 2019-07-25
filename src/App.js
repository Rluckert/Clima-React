import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/LocationList';
import ForescastExtended from './components/ForecastExtended';



import { Grid, Col, Row } from 'react-flexbox-grid';
import './App.css';
const cities = [
  'Buenos aires, ar',
  'Barranquilla, co',
  'Ciudad de México, mx',
  'Madrid, es',
  'Lima, pe',
];

class App extends Component {
  
  constructor(){
    super();
    this.state = { city: null};
  }

  handleSelectionLocation = city => {
    this.setState({ city })
  }
  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky' color="secondary">
            <Toolbar>
              <Typography variant='title' color='inherit'>
                App clima view
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation}>
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={10}>
              <div className="details"> 
              {city &&
               <ForescastExtended city={city} /> } 
              </div>
            </Paper>


          </Col>
        </Row>

      </Grid>

    );
  }
}

export default App;
