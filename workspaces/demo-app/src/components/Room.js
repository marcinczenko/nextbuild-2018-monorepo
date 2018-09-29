import React, { Component } from 'react'
import styled from 'react-emotion'

const Wrapper = styled('div')(({ color }) => ({
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  backgroundColor: `${color}`,
  padding: '10px',
  width: '100%'
}))

const RoomWrapper = styled('div')({
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'space-between',
  height: '100%',
  width: '100%'
}, ({ alignItems }) => ({
  alignItems: `${alignItems}`,
  textAlign: `${alignItems === 'center' ? 'center' : (alignItems === 'flex-end' ? 'right' : 'left')}`
}))

const Div = styled('div')({
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'space-between'
})

const A = styled('a')({
  textDecoration: 'none',
  color: 'black'
})

const H1 = styled('h1')(({ alignItems }) => ({
  margin: 0,
  alignSelf: `${alignItems}`,
  textAlign: 'center',
  color: 'white',
  border: '1px solid white',
  width: '40px'
}))

class Room extends Component {
  renderTalk = () => {
    const { speaker, title, link, alignItems, roomNumber } = this.props
    return (
      <RoomWrapper alignItems={alignItems}>
        <Div>
          <H1 alignItems={alignItems}>{roomNumber}</H1>
          <h2><A href={link} target='_blank' rel='noopener noreferrer'>{title}</A></h2>
        </Div>
        <h4>{speaker}</h4>
      </RoomWrapper>
    )
  }

  renderBreak = () => {
    const { description, alignItems, roomNumber } = this.props

    return (
      <RoomWrapper alignItems={alignItems}>
        <H1 alignItems={alignItems}>{roomNumber}</H1>
        <h2>{description}</h2>
      </RoomWrapper>
    )
  }

  renderKeynote = () => {
    const { speaker, title, link, alignItems, roomNumber } = this.props

    return (
      <RoomWrapper alignItems={alignItems}>
        <Div>
          <H1 alignItems={alignItems}>{roomNumber}</H1>
          <h2><A href={link} target='_blank' rel='noopener noreferrer'>{title}</A></h2>
        </Div>
        <h4>{speaker}</h4>
      </RoomWrapper>
    )
  }

  render () {
    const { type, color } = this.props
    return (
      <Wrapper color={color}>
        { type === 'break' && this.renderBreak() }
        { type === 'talk' && this.renderTalk() }
        { type === 'keynote' && this.renderKeynote() }
      </Wrapper>
    )
  }
}

export { Room }
