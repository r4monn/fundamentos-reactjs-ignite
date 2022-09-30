import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-items: center;

  margin-top: -3rem;
`;

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: transparent;
  border-radius: 6px;
  //padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.7rem;
    //color: ${props => props.theme["gray-300"]};
  }

  strong {
    display: block;
    //margin-top: 1rem;
    font-size: 1.5rem;
  }

  ${props => props.variant === 'green' && css`
    background: ${props.theme["green-700"]};
  `}
`;