import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  justify-content: space-between;
  & > span {
    width: 50%;
  }
  & .logo {
    text-align: left;
  }
  & .actions {
    text-align: right;
  }
`;
 
export default Header;