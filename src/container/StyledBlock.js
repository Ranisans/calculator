import styled from '@emotion/styled';

const StyledBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 7px;

  .info {
    width: 150px;
    
    display: flex;
    justify-content: left;
    align-items: flex-end;
    
    font-size: 1.1rem;
  }

  .error {
    display: ${(props) => (props.errorHidden ? 'none' : 'block')};
    color: red;
  }
`;

export default StyledBlock;
