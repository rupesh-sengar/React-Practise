/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import "./table.css";
// api: https://randomuser.me/api?results=20
const fetchData = async () => {
  const response = await fetch("https://randomuser.me/api?results=10");
  const data = await response.json();
  console.log({ data });
  return data;
};
export default function Table() {
  const [data, setData] = useState<Record<string, any>[]>([]);
  useEffect(() => {
    (async () => {
      const apiData = (await fetchData()).results;
      console.log({ apiData });
      setData(apiData);
    })();
  }, []);
  return (
    <table>
      <tbody>
        <tr>
          <th>City</th>
          <th>Coordinates</th>
          <th>Country</th>
          <th>PostCode</th>
          <th>State</th>
          <th>Street</th>
          <th>TimeZone</th>
        </tr>

        {data.length !== 0 &&
          data.map((record: any) => {
            return (
              <tr>
                <td>{record.location.city}</td>
                <td>{Object.values(record.location.coordinates).join(", ")}</td>
                <td>{record.location.country}</td>
                <td>{record.location.postcode}</td>
                <td>{record.location.state}</td>
                <td>{Object.values(record.location.street).join(", ")}</td>
                <td>{Object.values(record.location.timezone).join(", ")}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
