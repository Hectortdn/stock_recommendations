import React from "react";
import { api } from "../../services/api";
import "./styles.css";

function TableCorrelations() {
  const [data, setData] = React.useState<any>({});

  const columns = Object.keys(data);

  const fetchCorrelationsData = async () => {
    const responseData = await api.get("/api/stock-collations");
    setData(responseData.data);
  };

  React.useEffect(() => {
    fetchCorrelationsData();
  }, []);

  return (
    columns.length > 1 ? (
      <div className="stock-correlations">
        <table>
          <thead>
            <tr>
              <th className="stock-correlations-column"></th>
              {columns.map((column) => (
                <th className="stock-correlations-column">
                  {String(column).toLocaleLowerCase()}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {columns.map((column) => (
              <tr>
                <td className="stock-correlations-index">
                  {String(column).toLocaleLowerCase()}
                </td>
                {data[column].map((item) => {
                  const correlation =
                    Math.sign(item.correlation) <= 0 ? "-" : item.correlation;
                  return (
                    <td
                      style={{
                        backgroundColor: `rgb(93,139,173, ${item.correlation} )`,
                      }}
                    >
                      {correlation}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ): <div></div>
  );
}

export { TableCorrelations };
