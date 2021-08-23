import React from 'react'
import './styles.scss'

interface tableRow {
  dayNum: number,
  mediumPrice: number,
  lergePrice: number
}

interface TableProps {
  rows: Array<tableRow>
}

const Table: React.FC<TableProps> = ({ rows }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Number of days</th>
          <th>Small and medium size</th>
          <th>Large size</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(row => {
          return (
            <tr key={row.dayNum}>
              <td>{row.dayNum}</td>
              <td>{row.mediumPrice}</td>
              <td>{row.lergePrice}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table