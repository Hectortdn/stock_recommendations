import {
  BestStocks,
  StockTableValues,
  StockCloseBestReturnApi,
} from "../../../models";
import { ChartCloseValues } from "../../../components/ChartCloseValues";
import { customTextVariation } from "../../../utils/normalizes";
import { Text } from "../../../components/Text";
import { Header } from "./components/Header";
import {format} from 'date-fns'
import "./style.css";

export type CloseValuesProps = {
  ticker: string;
  values: string;
};

interface DetailsProps {
  bestStocks: BestStocks[];
  tableData: StockTableValues[];
  stockCloseBest: StockCloseBestReturnApi[];
}

function Details({ bestStocks, stockCloseBest, tableData }: DetailsProps) {
  return (
    <div className="details-screen-container">
      <Text className="details-screen-title">5 Melhores Recomendadas</Text>

      <Header data={bestStocks} />

      <ChartCloseValues series={stockCloseBest} />

      <div className="stock-values-table-container">
        {tableData.length > 1 && (
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Ticker</th>
                <th>Date</th>
                <th>Open</th>
                <th>High</th>
                <th>Low</th>
                <th>Close</th>
                <th>Price</th>
                <th>Percentage Variation</th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((row) => {
                const {
                  color,
                  icon: Icon,
                  value,
                } = customTextVariation(row.percentageVariation);
                return (
                  <tr>
                    <td>{row.ticket}</td>
                    <td>{format(new Date(row.date), 'dd/MM/yyyy')}</td>
                    <td>{row.open}</td>
                    <td>{row.high}</td>
                    <td>{row.low}</td>
                    <td>{row.close}</td>
                    <td>{row.price}</td>
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
    </div>
  );
}

export { Details };
