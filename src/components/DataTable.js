import React, { Component } from 'react'

class DataTable extends Component {
  render() {
    return (
      <div class="content">
        <p class="title">{this.props.title}</p>
        <img src={ 'https://s2.coinmarketcap.com/static/img/coins/64x64/' + this.props.rank + '.png' }/>
        <p>________________________________</p>
        <p>Total Supply: {this.props.supply}</p>
        <p>________________________________</p>
      </div>
    )
  }
}  

export default DataTable
