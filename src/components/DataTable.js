import React, { Component } from 'react'

class DataTable extends Component {
  render() {
    return (
      <div class="content">
        <p class="title">{this.props.title}</p>
        <p>________________________________</p>
        <p>{this.props.rank}</p>
        <p>________________________________</p>
        <p>Total Supply: {this.props.supply}</p>
        <p>________________________________</p>
      </div>
    )
  }
}  

export default DataTable
