import React from 'react'
import styled from 'react-emotion'
import nextbuild from './nextbuild.jpg'

const Img = styled('img')({
  margin: '20px'
})

export const Header = () => (
  <Img alt='nextbuild' src={nextbuild} />
)
