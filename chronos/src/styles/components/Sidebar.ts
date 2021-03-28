import styled from 'styled-components'

export const ContainerSidebar = styled.div`
  width: 60px;
  height: 100%;
  background-color: #ccc;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0;
  top: 0;
`
export const ListIcons = styled.ul`
  > li {
    margin-top: 15px;
  }
`
export const Buttons = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px;
  :hover {
    background-color: #808080;
    cursor: pointer;
    > svg {
      color: #5b87e8;
    }
  }

  > svg {
    font-size: 30px;
    color: #1a55d9;
  }
`
