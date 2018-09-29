import styled from 'react-emotion'

import { Grid } from 'helpers'

let grid = new Grid([
  'header header',
  'room1 room2',
  'room3 room4',
  'footer footer'
], {
  gridTemplateRows: 'max-content max-content max-content max-content'
})

const contentBaseStyle = {
  display: 'flex'
}

const NextBuildGrid = styled('div')(grid.container, {
  boxSizing: 'border-box',
  width: '800px'
})

const HeaderGridItem = styled('div')(grid.header, contentBaseStyle, { justifyContent: 'center' })
const Room1GridItem = styled('div')(grid.room1, contentBaseStyle, { justifyContent: 'flex-end' })
const Room2GridItem = styled('div')(grid.room2, contentBaseStyle, { justifyContent: 'flex-start' })
const Room3GridItem = styled('div')(grid.room3, contentBaseStyle, { justifyContent: 'flex-end' })
const Room4GridItem = styled('div')(grid.room4, contentBaseStyle, { justifyContent: 'flex-start' })
const FooterGridItem = styled('div')(grid.footer, contentBaseStyle, { justifyContent: 'center' })

export { NextBuildGrid, HeaderGridItem, Room1GridItem, Room2GridItem,
  Room3GridItem, Room4GridItem, FooterGridItem }
