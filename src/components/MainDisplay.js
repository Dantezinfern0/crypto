import React, { Component } from 'react'
import DataTable from './DataTable'

class MainDisplay extends Component {
  state = {
    dataList: []
  }
  componentDidMount() {
    console.log('component mounted')
    this.getDataFromApi()
    setInterval(() => this.getDataFromApi(), 10000)
  }
  getDataFromApi = () => {
    fetch('https://api.coinmarketcap.com/v2/ticker/?limit=20')
      .then(resp => {
        return resp.json()
      })
      .then(json => {
        this.setState({
          dataList: Object.values(json.data)
          // console.log(dataList)
        })
      })
  }
  render() {
    return (
      <div>
        <h1 class="title-bar">CRYPTO CURRENCY</h1>
        <h2>
          {this.state.dataList.map(data => {
            return (
              <>
                <DataTable
                  title={data.name}
                  rank={data.rank}
                  supply={data.circulating_supply}
                />
              </>
            )
          })}
        </h2>
      </div>
    )
  }
}

export default MainDisplay
