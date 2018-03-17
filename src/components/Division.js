import React, { Component } from 'react';

class Stat extends Component {

    render() {
        const noBorder = this.props.noBorder ? 'no-border' : '';
        return (
            <div className={`one-half ${noBorder}`}>
                <div className='stat'>
                    <sup>{this.props.coin || 'R$'}</sup>
                    {this.props.money || '100'}
                    <sub>{this.props.cents || ',00'}</sub>
                </div>
                <div className='stat-name'>{this.props.statName || 'Stat'}</div>
            </div>
        );
    }
}

export default class Division extends Component {
    render() {
        const borderRight = this.props.borderRight ? 'border-right' : '';
        return (
            <div className={`division-card one-fifth ${borderRight}`}>
                <div className='division-base clearfix'>
                    <div className='name'>{this.props.name || 'Divisão'}</div>
                    <div className='percentage'>{this.props.percentage || '10'}<sub>%</sub></div>
                </div>
                <div className='division-money'>
                    <span>restante</span>
                    <sup>{this.props.coin || 'R$'}</sup>
                    {this.props.money || '100'}
                    <sub>{this.props.cents || ',00'}</sub>
                </div>
                <div className='division-stats'>
                    <Stat statName={'Gastos'} />
                    <Stat statName={'Total'} noBorder={true}/>
                </div>
            </div>
        );
    }
  }
  