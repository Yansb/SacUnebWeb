import styled from 'styled-components';
import theme from "styled-theming";

export const TextColor = theme("mode", {
  light: "#333",
  dark: "#DEE4E7"
});
export const FuhthestBackground = theme("mode", {
  light: "#DEE4E7",
  dark: "#111418"
});
export const MiddleBackground = theme("mode", {
  light: "#eff0f2",
  dark: "#191f24"
});
export const MiddleSecondBackground = theme("mode", {
  light: "#f9f9fa",
  dark: "#232a31"
});
export const ClosestBackground = theme("mode", {
  light: "#fff",
  dark: "#38434f"
});
export const Shadow = theme("mode", {
  light: "#0002",
  dark: "#fff2"
});


export const ButtonTheme = styled.button`
  position: fixed;
  top: 10px;
  right:10px;
  background-color: ${MiddleSecondBackground};
  color: ${TextColor};
  padding: 10px 12px;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.2s;
  border: none;
  &:hover,
  &:focus {
    transform: translateY(-2px);
    box-shadow: 0px 2px 30px ${Shadow};
    outline: none;
  }
`;




