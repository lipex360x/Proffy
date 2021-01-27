import React, { useState, useEffect } from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'

// type HeaderProps = PropsWithChildren<{}>
import logo from '../../assets/images/logo.svg'
import ladingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeart from '../../assets/images/icons/purple-heart.svg'

const Landing = () => {
  return (
    <S.Section>
      <div className="container">
        <S.LogoContainer>
          <img src={logo} alt="Proffy"/>
          <h2>Sua plataforma de estudos online</h2>
        </S.LogoContainer>

        <S.HeroImage>
          <img src={ladingImg} alt=""/>
        </S.HeroImage>

        <S.ButtonsContainer>
          <Link to="studies" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </Link>

          <Link to="teachers" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aula"/>
            Dar Aula
          </Link>
        </S.ButtonsContainer>

        <span>
          Total de 200 conexões já realizadas <img src={purpleHeart} alt="Coração roxo"/>
        </span>

      </div>
    </S.Section>
  )
}

export default Landing
