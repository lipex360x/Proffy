import React, { useState, useEffect } from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'

import backIcon from '../../assets/images/icons/back.svg'
import logo from '../../assets/images/logo.svg'
// type HeaderProps = PropsWithChildren<{}>

const TeacherList = () => {
  return (
    <S.Section>

      <S.TopBar className="container">

        <Link to="/">
          <img src={backIcon} alt="Icone voltar" />
        </Link>

        <img src={logo} alt="Logo Proffy" />

      </S.TopBar>

      <S.Container>
        <strong>Estes são os proffys disponíveis</strong>
      </S.Container>

    </S.Section>
  )
}

export default TeacherList
