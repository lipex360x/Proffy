import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

import * as S from './styles'
import backIcon from '../../assets/images/icons/back.svg'
import logo from '../../assets/images/logo.svg'

type HeaderProps = PropsWithChildren<{
  title: string
}>

const Header = ({ title, children }: HeaderProps) => {
  return (
    <S.Section>
      <S.Header>
        <S.TopBar >

          <Link to="/">
            <img src={backIcon} alt="Icone voltar" />
          </Link>

          <img src={logo} alt="Logo Proffy" />

        </S.TopBar>

        <S.Container>
          <strong>{title}</strong>
        </S.Container>

        {children}

      </S.Header>
    </S.Section>
  )
}

export default Header
