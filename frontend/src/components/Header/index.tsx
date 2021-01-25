import React, { PropsWithChildren } from 'react'
import * as S from './styles'

type HeaderProps = PropsWithChildren<{}>

const Header = ({ children }: HeaderProps) => {
  return (
    <S.Section>
      <h1>{children}</h1>
    </S.Section>
  )
}

export default Header
