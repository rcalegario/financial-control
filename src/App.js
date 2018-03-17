import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import Header from './components/Header';
import DivisionGroup from './components/DivisionGroup';

import './css/style.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Grid>
          <DivisionGroup />
        </Grid>
      </div>
    );
  }
}

export default App;
