import React, { useState, useEffect } from 'react'
import * as S from './styles'

import Header from '../../components/Header'

const TeacherList = () => {
  return (
    <S.Section>
      <Header title='Estes são os Proffys disponíveis'>
        <S.Form>

          <S.InputBlock>
            <label htmlFor="subject">Matéria</label>
            <input type="text" name="subject" id="subject"/>
          </S.InputBlock>

          <S.InputBlock>
            <label htmlFor="week_day">Dia da Semana</label>
            <input type="text" name="week_day" id="week_day"/>
          </S.InputBlock>

          <S.InputBlock>
            <label htmlFor="time">Hora</label>
            <input type="text" name="time" id="time"/>
          </S.InputBlock>

        </S.Form>
      </Header>
    </S.Section>
  )
}

export default TeacherList
