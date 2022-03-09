import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const OptionContainerStyles = css`
  padding: 15px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  border-bottom: 1px solid #ddd;
  position: fixed;
  z-index: 999;
  background-color: white;
`;

export const LogoContainer = styled(Link)`
  width: 70px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
