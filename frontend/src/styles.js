import styled from "styled-components";
import { color, layout } from 'styled-system'

export const AppContainer = styled.div`
  ${color}
  ${layout}
`;
AppContainer.defaultProps = {
    height: '100%'
}