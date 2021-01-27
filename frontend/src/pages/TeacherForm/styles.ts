import styled from 'styled-components'
import { shade } from 'polished'

export const Section = styled.section`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${shade(0, '#222')}
  }

  p { 
   color: var(--color-primary)
  }
`
