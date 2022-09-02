import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 967px;
  display: flex;
  align-items: center;
  flex-direction: column;

  padding-top: 8rem;
  padding-bottom: 17rem;
  
  h1 {
      color: #8F99A6;
      font-weight: 300;
      font-size: 5rem;
      margin-bottom: 8rem;
    }

  p {
    margin-bottom: 3rem;
    font-weight: 700;
    font-size: 2rem;
  }

  & > form {
    width: 100%;
    padding: 7rem 3rem 4rem 3rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 1.3rem;

    margin-bottom: 4rem;
    
    &> input {
      color: #737373;
      font-size: 1.8rem;
      padding: 1.8rem;
      width: 100%;
      border: 1px solid #D4D4D4;
      border-radius: 6px;
    }

    & > button {
      background-color: #F3A126;
      width: 100%;
      box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.25);
      border-radius: 6px;
    }
    
  }
`