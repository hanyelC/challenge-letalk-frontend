import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

import './styles.css'

export function InstallmentsTable({ rows }) {
  return (
    <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="title">SALDO DEVEDOR</TableCell>
            <TableCell className="title">JUROS</TableCell>
            <TableCell className="title">SALDO DEVEDOR AJUSTADO</TableCell>
            <TableCell className="title">VALOR DA PARCELA</TableCell>
            <TableCell className="title">VENCIMENTO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.expirationDate}
            >
              <TableCell
               component="th" scope="row"
                className="cell"
               >
              R$ {row.value.toFixed(2)}
              </TableCell>
              <TableCell className="cell">R$ {row.fee.toFixed(2)}</TableCell>
              <TableCell className="cell">R$ {row.adjustedValue.toFixed(2)}</TableCell>
              <TableCell className="cell">R$ {row.installment.toFixed(2)}</TableCell>
              <TableCell className="cell">{row.expirationDate}</TableCell>
            </TableRow>
          ))}
          <TableRow>
              <TableCell component="th" scope="row" className="cell">
                R$ 0.00
              </TableCell>
              <TableCell className="cell"></TableCell>
              <TableCell className="cell"></TableCell>
              <TableCell className="cell"></TableCell>
              <TableCell className="cell"></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}