import * as React from 'react'
import styled from 'styled-components'
import { GREY } from '../../utils/colors'

interface IFinaContentProps {
  collapse: boolean
  setCollapse: (collpase: boolean) => void
  isMobile: boolean
}

const Content = styled.section`
  flex-grow: 1;
  overflow-y: scroll;
  background-color: ${GREY};
  &::-webkit-scrollbar {
    display: none;
  }
  box-sizing: border-box;
`

const Empty = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 3rem;
  align-items: center;
`

const Header = styled.header`
  height: 48px;
  background-color: white;
  box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.08);
`

const FinaContent: React.FunctionComponent<IFinaContentProps> = ({
  collapse,
  setCollapse,
  isMobile
}) => {
  return (
    <Content>
      <Header>
        {isMobile ? (
          <button onClick={() => setCollapse(!collapse)}>collapse</button>
        ) : null}
      </Header>
      <Empty>FINALAYOUT...</Empty>
    </Content>
  )
}

export default React.memo(FinaContent)
