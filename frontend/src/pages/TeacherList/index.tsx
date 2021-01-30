import React, { useState, useEffect } from 'react'
import * as S from './styles'

import Header from '../../components/Header'
import whatsIcon from '../../assets/images/icons/whatsapp.svg'

const TeacherList = () => {
  return (
    <S.Section>
      <Header title='Estes são os Proffys disponíveis'>

        <S.Form>
          <S.InputList>
            <S.InputItem>
              <label htmlFor="subject">Matéria</label>
              <input type="text" name="subject" id="subject" />
            </S.InputItem>

            <S.InputItem>
              <label htmlFor="week_day">Dia da Semana</label>
              <input type="text" name="week_day" id="week_day" />
            </S.InputItem>

            <S.InputItem>
              <label htmlFor="time">Hora</label>
              <input type="text" name="time" id="time" />
            </S.InputItem>
          </S.InputList>
        </S.Form>

      </Header>

      <S.TeacherList>
        <S.TeacherItem>
          <header>
            <img src="https://avatars.githubusercontent.com/u/32343054?s=460&u=307a9b437754f3fe41e8dbb3872cd3282f68a387&v=4" alt="Felipe Borges"/>
            <div>
              <strong>Felipe Borges</strong>
              <span>Química</span>
            </div>
          </header>

          <p className="teacherInfo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ea dolorem maxime rem explicabo tempore modi quae adipisci. Quasi, in praesentium. Ullam quia culpa nihil nulla quod voluptate ex! Voluptatem reprehenderit molestias ducimus maiores aut ipsum non aspernatur. Aspernatur quasi cum dolor labore itaque illo autem qui ipsam quod placeat!</p>

          <footer>
            <p>
              Preço/Hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsIcon} alt="Whatsapp Icon"/>
              Entrar em Contato
            </button>
          </footer>
        </S.TeacherItem>

      </S.TeacherList>

    </S.Section>
  )
}

export default TeacherList
