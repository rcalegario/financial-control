import React, { Component } from 'react';
import Division from './Division';

export default class DivisionGroup extends Component {
    render() {
      return (
        <div className='division-group'>
            <Division />
            <Division />
            <Division />
            <Division />
            <Division borderRight={true}/>
        </div>
      );
    }
  }