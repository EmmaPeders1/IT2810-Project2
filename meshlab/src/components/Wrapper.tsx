import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => (props.theme === "light" ? "white" : "#EADDFC")};
  min-height: 100vh;
`;