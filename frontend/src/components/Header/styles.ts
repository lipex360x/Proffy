import styled from 'styled-components'
import { shade } from 'polished'

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${shade(0, '#fff')};
    font-size: 3rem;
  }
`
