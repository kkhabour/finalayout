import * as React from "react";
import styled from "styled-components";

interface IFinaSidebarProps {
  collapse: boolean;
  setCollapse: (collpase: boolean) => void;
  isMobile: boolean;
}

const SideBar = styled.nav<{ collapse?: boolean }>`
  background-color: lightblue;
  flex-basis: ${({ collapse }) => (collapse ? "48px" : "208px")};
  position: relative;
  transition: flex-basis 0.5s ease;
  box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
  @media only screen and (max-width: 767px) {
    width: ${({ collapse }) => (collapse ? "0px" : "208px")};
    transition: width 0.5s ease;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
  }
`;

const Collapse = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
`;

const FinaSidebar: React.FunctionComponent<IFinaSidebarProps> = ({
  collapse,
  setCollapse,
  isMobile,
}) => {
  const handleCollapse = React.useCallback(() => {
    setCollapse(!collapse);
  }, [collapse, setCollapse]);

  return (
    <SideBar collapse={collapse}>
      {!isMobile ? (
        <Collapse onClick={handleCollapse}>collapse</Collapse>
      ) : null}
    </SideBar>
  );
};

export default FinaSidebar;
