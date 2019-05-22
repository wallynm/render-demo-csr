import React, { Component } from 'react'
import axios from 'axios'
import { Image } from 'semantic-ui-react'

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: []
    }
  }

  componentDidMount() {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=25').then(result => {
      console.info(result)
      this.setState({
        'cats': result.data
      })
    })
  }

  render() {
    return (
      <div class="ui small images">
        {this.state.cats.map(cat => {
          return (
            <Image src={cat.url} size='medium' rounded/>
          )
        })}
      </div>
    )
  }
}

export default Gallery