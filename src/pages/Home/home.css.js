import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  background-color: ${ theme.colors.grayLight };
  margin: 0 auto;
  max-width: ${ theme.widths.extraLarge };
  padding: 25px;

  @media(max-width: ${theme.widths.extraLarge}) {
    margin 0 50px;
  }
`;
  export const TabsControl = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  `;
    export const Tabs = styled.div`
      display: flex;
    `;
      export const Tab = styled.span`
        border-bottom: 3px solid ${ props => props.active ? theme.colors.red : theme.colors.grayLight };
        color: ${ props => props.active ? theme.colors.grayDark : theme.colors.gray };
        cursor: pointer;
        padding: 10px 15px;
        transition: color .5s,border .5s;

        :hover {
          color: ${ theme.colors.grayDark };
        }
      `;
    export const SellCar = styled.div`
      a {
        border: 2px solid ${ theme.colors.yellow };
        border-radius: 3px;
        color: ${ theme.colors.yellow };
        font-size: 14px;
        padding: 5px 20px;
        text-decoration: none;
      }
    `;

  export const ContentTab = styled.div`
    background-color: ${ theme.colors.white };
    padding: 30px;
  `;
    export const Types = styled.div`
      display: flex;
      font-size: 14px;
      justify-content: space-between;
      max-width: 20%;
    `;
    export const Type = styled.span`
      align-items: center;
      display: flex;

      input {
        width: 20px;
      }

      label {
        cursor: pointer;
      }
    `;

    export const LineFlex = styled.div`
      align-items: center;
      display: flex;
      margin-top: 20px;

      select, input {
        border: 1px solid ${ theme.colors.grayDark };
        border-radius: 3px;
        color: ${ theme.colors.gray };
        padding: 5px;
        width: 100%;
      }
    `;
      export const BoxG = styled.div`
        align-items: center;
        display: flex;
        padding: 0 10px;
        justify-content: space-between;
        width: 50%;

        input {
          width: 70%;

          + select {
            width: 30%;
          }
        }
      `;
      export const BoxM = styled.div`
        width: 25%;
        padding: 0 10px;
      `;
      export const AdvancedSearch = styled.span`
        color: ${ theme.colors.red };
        font-weight: bold;
        cursor: pointer;
        font-size: 14px;
      `;
      export const ClearFilters = styled.span`
        color: ${ theme.colors.gray };
        cursor: pointer;
        font-size: 14px;
        margin-right: 15px;
      `;
      export const BtnOffers = styled.button`
        background-color: ${ theme.colors.red };
        border: 0;
        border-radius: 3px;
        color: ${ theme.colors.white };
        cursor: pointer;
        font-size: 14px;
        outline: none;
        padding: 12px 0;
        text-transform: uppercase;
        width: 70%;
      `;
  
