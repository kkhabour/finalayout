import * as React from 'react'
import styled from 'styled-components'
import { SIDEBAR, SIDEBAR_COLLAPSED } from 'utils/sizes'
import { WHITE } from 'utils/colors'

import Logo from 'assets/logo.svg'

interface IFinaSidebarProps {
  collapse: boolean
  setCollapse: (collpase: boolean) => void
  isMobile: boolean
}

const SideBar = styled.nav<{ collapse?: boolean }>`
  background-color: ${WHITE};
  flex-basis: ${({ collapse }) => (collapse ? SIDEBAR_COLLAPSED : SIDEBAR)};
  position: relative;
  transition: flex-basis 0.5s ease;
  box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
  @media only screen and (max-width: 767px) {
    width: ${({ collapse }) => (collapse ? 0 : SIDEBAR)};
    transition: width 0.5s ease;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
  }
`

const Collapse = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const LogoWrapper = styled.div`
  border: solid black 1px;
  height: 152px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
`

const FinaSidebar: React.FunctionComponent<IFinaSidebarProps> = ({
  collapse,
  setCollapse,
  isMobile
}) => {
  const handleCollapse = React.useCallback(() => {
    setCollapse(!collapse)
  }, [collapse, setCollapse])

  return (
    <SideBar collapse={collapse}>
      {!isMobile ? (
        <Collapse onClick={handleCollapse}>collapse</Collapse>
      ) : null}

      <Content>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </Content>
    </SideBar>
  )
}

export default FinaSidebar
