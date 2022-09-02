import { Container, DetailsWrapper, InstallmentsWrapper } from './styles'
import { InstallmentsTable } from '../Table'

export function LoanPreview({ loanData, handleLoan }) {
  return (
    <Container>
      <DetailsWrapper>
        <div>
          <span>VALOR REQUERIDO:</span>
          <strong>R$ { loanData.value.toFixed(2)}</strong>
        </div>
        <div>
          <span>TAXA DE JUROS</span>
          <strong>{loanData.feePercentual}% ao mês</strong>
        </div>
        <div>
          <span>VALOR DA PARCELA</span>
          <strong>R$ {loanData.installments[0].installment.toFixed(2)}</strong>
        </div>
        <div>
          <span>TOTAL DE MESES PARA QUITAR</span>
          <strong>{loanData.installments.length} MESES</strong>
        </div>
        <div>
          <span>TOTAL DE JUROS</span>
          <strong>R$ {loanData.totalFee.toFixed(2)}</strong>
        </div>
        <div>
          <span>TOTAL DE JUROS</span>
          <strong>R$ {loanData.totalValue.toFixed(2)}</strong>
        </div>

      </DetailsWrapper>

      <p>PROJEÇÃO DAS PARCELAS:</p>

      <InstallmentsWrapper>
        <InstallmentsTable rows={loanData.installments}/>
      </InstallmentsWrapper>

      <button onClick={handleLoan}>EFETIVAR O EMPRÉSTIMO</button>
    </Container>
  )
}