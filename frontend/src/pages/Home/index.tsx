import React, { useEffect, useState } from 'react'
import * as S from './styles'

import Header from '../../components/Header'

const Home = () => {
  const [message, setMessage] = useState('')

  useEffect(() => {
    setMessage('Boilerplate ReactJS')
  }, [])

  return (
    <S.Section>
      <Header>Hello React</Header>
      <p>{message}</p>
    </S.Section>
  )
}

export default Home
