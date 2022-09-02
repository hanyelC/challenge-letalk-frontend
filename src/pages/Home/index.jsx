import { useState } from 'react'

import { api } from '../../services/api'

import { LoanPreview } from '../../components/LoanPreview'

import { Container } from './styles'

export function Home() {
  const [cpf, setCpf] = useState('')
  const [uf, setUf] = useState('')
  const [birth, setBirth] = useState('')
  const [totalValue, setTotalValue] = useState(0)
  const [monthValue, setMonthValue] = useState(0)
  const [loanData, setLoanData] = useState(null)

  async function handleSimulate(e) {
    e.preventDefault()

    try {
      const response = await api.post('/loan/simulate', {
        total_value: totalValue,
        UF: uf,
        monthly_payment_value: monthValue
      })
      setLoanData(response.data)
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  async function handleMakeLoan() {
    try {
      await api.post('/loan', {
        cpf,
        UF: uf,
        birth_date: birth,
        total_value: totalValue,
        monthly_payment_value: monthValue
      })

      alert('Empréstimo efetivado com sucesso')
      setLoanData(null)
    } catch (error) {
      console.log(error)
      alert(error.response.data.message)
    }
  }

  return (
    <Container>
      <h1>Simule e solicite o seu empréstimo.</h1>
      <p>Preencha o formulário abaixo para simular</p>
      <form>
        <input type="text"
          placeholder='CPF'
          onChange={(e) => setCpf(e.target.value)}
        />
        <input type="text"
          placeholder='UF'
          onChange={(e) => setUf(e.target.value)}
        />
        <input type="text"
          placeholder='DATA DE NASCIMENTO'
          onChange={(e) => setBirth(e.target.value)}
        />
        <input type="number"
          placeholder='QUAL O VALOR DO EMPRÉSTIMO'
          onChange={(e) => setTotalValue(Number(e.target.value))}
        />
        <input type="number"
          placeholder='QUAL VALOR DESEJA PAGAR POR MÊS?'
          onChange={(e) => setMonthValue(Number(e.target.value))}
        />

        <button onClick={handleSimulate}>SIMULAR</button>
      </form>

      <p>Veja a simulação para o seu empréstimo antes de efetivar</p>

      {
        loanData &&
        <LoanPreview
          loanData={loanData}
          handleLoan={handleMakeLoan}
        />
      }
    </Container>
  )
}