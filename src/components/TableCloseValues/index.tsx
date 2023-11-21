import { format } from "date-fns";

import { customTextVariation } from "../../utils/normalizes";
import { StockProps } from "../../models";
import './styles.css'

interface TableCloseValuesProps {
  data: StockProps[]
}

function TableCloseValues({ data }: TableCloseValuesProps) {
  return (
    <div className="stock-values-table-container">

      {data.length > 1 && (
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Ação</th>
              <th>Data</th>
              <th>Open</th>
              <th>High</th>
              <th>Low</th>
              <th>Close</th>
              <th>Cotação</th>
              <th>Variação percentual</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row) => {
              const {
                color,
                icon: Icon,
                value,
              } = customTextVariation(row.percentageVariation);

              const todayValues = row.stockValues[row.stockValues.length - 1]
              return (
                <tr>
                  <td style={{fontWeight: 600 }}>{row.papel}</td>
                  <td>{format(new Date(todayValues.date), "dd/MM/yyyy")}</td>
                  <td>{todayValues.open}</td>
                  <td>{todayValues.high}</td>
                  <td>{todayValues.low}</td>
                  <td style={{fontWeight: 600 }}>{todayValues.close}</td>
                  <td style={{fontWeight: 600 }}>{row.cotacao}</td>
                  <td>
                    <div
                      style={{
                        color,
                        display: "flex",
                        fontWeight: 600,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon />
                      {value}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export { TableCloseValues };
