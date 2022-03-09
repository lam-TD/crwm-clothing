import styledComponents from "styled-components";
import { ReactComponent as ShoppingIconSVG } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styledComponents.div`
  width: 35px;
  height: 35px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styledComponents(ShoppingIconSVG)`
  width: 24px;
  height: 24px;
`;

export const ItemCount = styledComponents.span`
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  bottom: 6px;
`;
