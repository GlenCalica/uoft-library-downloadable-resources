import { useEffect, useState } from "react";

const URL =
   "https://docs.google.com/spreadsheets/d/e/2PACX-1vS-m8kfsNJ_oa5fZPNP62n3Tam2OoK9DyQ-McEFWLPWyDOEexKQ2fsLQMHHrUZFkXQPOurtRK1Awsd1/pub?output=tsv";

function App() {
   const [data, setData] = useState<string[][]>([]);
   const [text, setText] = useState<string>("");

   useEffect(() => {
      fetch(URL)
         .then((res) => res.text())
         .then((tsv) => {
            setText(tsv);

            const rows = tsv.trim().split("\n");
            const parsed = rows.map((row) => row.split("\t"));

            console.log(parsed);
            parsed.shift();

            setData(parsed);
         });
   }, []);

   return (
      <>
         <table className="table-auto border-collapse w-full">
            <thead>
               <tr className="border-b border-neutral-600">
                  <th className="pb-2">Name</th>
                  <th className="pb-2">Author</th>
                  <th className="pb-2">Publisher</th>
                  <th className="pb-2">Location</th>
                  <th className="pb-2">Downloadable Pages</th>
                  <th className="pb-2">Format</th>
                  <th className="pb-2">Added By</th>
                  <th className="pb-2">Added On</th>
               </tr>
            </thead>
            <tbody>
               {data.map((row, i) => (
                  <tr key={i} className="border-b border-neutral-600">
                     <td className="text-center">{row[0]}</td>
                     <td className="text-center">{row[1]}</td>
                     <td className="text-center">{row[2]}</td>
                     <td className="text-center">{row[3]}</td>
                     <td className="text-center">{row[4]}</td>
                     <td className="text-center">{row[5]}</td>
                     <td className="text-center">{row[6]}</td>
                     <td className="text-center">{row[7]}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </>
   );
}

export default App;
