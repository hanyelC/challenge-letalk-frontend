import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 4rem;

  display: flex;
  flex-direction: column;

  p {
    color: #737373;
  }

  & > button {
    background-color: #21AE1E;
    width: 100%;
    max-width: 554px;
    margin: 0 auto;

    box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.25);
    border-radius: 6px;
  }
`

export const DetailsWrapper = styled.div`
  display: flex;
  gap: 10rem;
  flex-wrap: wrap;

  margin-bottom: 7rem;

  & > div > span {
    font-weight: 700;
    font-size: 1.4rem;
    color: #737373;
  }

  & > div > strong {
    font-weight: 700;
    font-size: 2rem;
    color: #333333;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`

export const InstallmentsWrapper = styled.div`
  margin-bottom: 6rem;
`