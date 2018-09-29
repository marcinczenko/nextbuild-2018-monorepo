import React from 'react'
import { NextBuildGrid, HeaderGridItem, Room1GridItem, Room2GridItem,
  Room3GridItem, Room4GridItem, FooterGridItem } from './NextBuildGrid'

import { NextBuildGridM, HeaderGridItemM, Room1GridItemM, Room2GridItemM,
  Room3GridItemM, Room4GridItemM, FooterGridItemM } from './NextBuildGridMobile'

import { Room } from './Room'
import { Header } from './Header'
import { Footer } from './Footer'

import talks from './talks'
import rooms from './rooms'

import Media from 'react-media'

class NextBuild extends React.Component {
  state = {
    room1: null,
    room2: null,
    room3: null,
    room4: null
  }

  constructor (props) {
    super(props)

    this.timestamps = Object.keys(rooms).sort((a, b) => a - b)
  }

  updateRooms = () => {
    const now = Math.round(Date.now() / 1000)
    // const now = 1538219700 - 1
    const active = this.timestamps.filter(t => t > now)
    if (active.length === 0) {
      this.setState({
        room1: talks[100],
        room2: talks[100],
        room3: talks[100],
        room4: talks[100]
      })
    } else {
      const currentEvent = active[0]
      const roomIds = rooms[currentEvent]
      this.setState({
        room1: talks[roomIds.room1],
        room2: talks[roomIds.room2],
        room3: talks[roomIds.room3],
        room4: talks[roomIds.room4]
      })
    }
  }

  componentDidMount () {
    this.updateRooms()

    this.interval = setInterval(() => {
      console.log('updating rooms...')
      this.updateRooms()
    }, 60000)
  }

  componentWillUnmount () {
    this.interval && clearInterval(this.interval)
  }

  render () {
    return (
      <Media query={{ maxWidth: 800 }}>
        {matches =>
          matches ? (
            <NextBuildGridM>
              <HeaderGridItemM><Header /></HeaderGridItemM>
              <Room1GridItemM><Room roomNumber='1' color='#4C9BC6' alignItems='center' {...this.state.room1} /></Room1GridItemM>
              <Room2GridItemM><Room roomNumber='2' color='#4CAF50' alignItems='center' {...this.state.room2} /></Room2GridItemM>
              <Room3GridItemM><Room roomNumber='3' color='#C6B14C' alignItems='center'{...this.state.room3} /></Room3GridItemM>
              <Room4GridItemM><Room roomNumber='4' color='#BC6448' alignItems='center' {...this.state.room4} /></Room4GridItemM>
              <FooterGridItemM><Footer /></FooterGridItemM>
            </NextBuildGridM>
          ) : (
            <NextBuildGrid>
              <HeaderGridItem><Header /></HeaderGridItem>
              <Room1GridItem><Room roomNumber='1' color='#4C9BC6' alignItems='flex-end'{...this.state.room1} /></Room1GridItem>
              <Room2GridItem><Room roomNumber='2' color='#4CAF50' alignItems='flex-start' {...this.state.room2} /></Room2GridItem>
              <Room3GridItem><Room roomNumber='3' color='#C6B14C' alignItems='flex-end' {...this.state.room3} /></Room3GridItem>
              <Room4GridItem><Room roomNumber='4' color='#BC6448' alignItems='flex-start' {...this.state.room4} /></Room4GridItem>
              <FooterGridItem><Footer /></FooterGridItem>
            </NextBuildGrid>
          )
        }
      </Media>
    )
  }
}

export { NextBuild }
