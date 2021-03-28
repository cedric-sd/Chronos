import styled from 'styled-components'
import { Card } from 'reactstrap'

export const Bar = styled.div`
  width: 4px;
  height: 100vh;
  background-color: #000;
  margin-top: 200px;
  border-radius: 10px;
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CardMark = styled(Card)`
  width: 350px;
  height: fit-content;
`
