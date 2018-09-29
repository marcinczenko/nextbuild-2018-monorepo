import styled from 'react-emotion'

import { Grid } from 'helpers'

let grid = new Grid([
  'header',
  'room1',
  'room2',
  'room3',
  'room4',
  'footer'
], {
  gridTemplateRows: 'max-content max-content max-content max-content max-content max-content'
})

const contentBaseStyle = {
  display: 'flex'
}

const NextBuildGridM = styled('div')(grid.container, {
  boxSizing: 'border-box',
  width: '100vw',
  textAlign: 'center'
})

const HeaderGridItemM = styled('div')(grid.header, contentBaseStyle, { justifyContent: 'center' })
const Room1GridItemM = styled('div')(grid.room1, contentBaseStyle, { justifyContent: 'flex-end' })
const Room2GridItemM = styled('div')(grid.room2, contentBaseStyle, { justifyContent: 'flex-start' })
const Room3GridItemM = styled('div')(grid.room3, contentBaseStyle, { justifyContent: 'flex-end' })
const Room4GridItemM = styled('div')(grid.room4, contentBaseStyle, { justifyContent: 'flex-start' })
const FooterGridItemM = styled('div')(grid.footer, contentBaseStyle, { justifyContent: 'center' })

export { NextBuildGridM, HeaderGridItemM, Room1GridItemM, Room2GridItemM,
  Room3GridItemM, Room4GridItemM, FooterGridItemM }
