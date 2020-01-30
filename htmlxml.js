const fs = require("fs");
const htmlTo = require("html2xlsx");
const md5 = require("md5");

const conversor = () => {
  const fileName =
    __dirname +
    "/tmp/" +
    md5(Buffer.from(JSON.stringify(new Date()))) +
    ".xlsx";

  htmlTo(
    `
  <style type="text/css">
  table th {
    color: white;
    height: 20px;
    width: 400px;
    background-color:darkblue;
    border: 1px solid #eee;
  }
  table td {
    color: #666;
    height: 20px;
    width: 400px;
    background-color: lightgreen;
    border: 1px solid #eee;
  }
  </style>
  <table>
    <tr>
      <th> Nombre </th>
      <th> cedula </th>
      <th> Correo </th>
      <th> Salon de la fama </th>
      <th> Salario </th>
    </tr>    
    <tr>
      <td>Andres Galarraga</td>
      <td>11111111</td>
      <td>agalarraga@test.com</td>
      <td data-type="bool">false</td>
      <td type="number">55000</td>
    </tr>
    <tr>
      <td>Baudilio Diaz</td>
      <td>22222222</td>
      <td>bdiaz@test.com</td>
      <td data-type="bool">false</td>
      <td type="number">25000</td>
    </tr>
    <tr>
      <td>Carlos Guillen</td>
      <td>33333333</td>
      <td>cguillen@test.com</td>
      <td data-type="bool">false</td>
      <td type="number">20000</td>
    </tr>
    <tr>
      <td>Damaso Blanco</td>
      <td>444444444</td>
      <td>dblanco@test.com</td>
      <td data-type="bool">false</td>
      <td type="number">50000</td>
    </tr>
    <tr>
      <td>Luis Aparicio</td>
      <td>555555555</td>
      <td>laparicio@test.com</td>
      <td data-type="bool">true</td>
      <td type="number">100000</td>
    </tr>
    <tr>
      <td colspan="4"></td>
      <td type="formula">SUM(E2:E6)</td>
    </tr>
  </table>
`,
    (err, file) => {
      if (err) return console.error(err);

      file
        .saveAs()
        .pipe(fs.createWriteStream(fileName))
        .on("finish", () => console.log("Creado el archivo: ", fileName));
    }
  );
  return fileName;
};

exports.conversor = conversor;

{
  /* <tr>
      <td type="number">100</td>
      <td type="number">200</td>
    </tr>
    <tr>
      <td>foo</td>
      <td>bar</td>
    </tr>
    <tr>
      <td>hello</td>
      <td>world</td>
    </tr>
    <tr>
      <td type="number">123</td>
      <td type="number">123.456</td>
    </tr>
    <tr>
      <td data-type="bool">true</td>
      <td data-type="bool">false</td>
    </tr>
    <tr>
      <td data-type="bool">1</td>
      <td data-type="bool">0</td>
    </tr>
    <tr>
      <td type="formula">SUM(A1:B1)</td>
      <td type="formula">B1-A1</td>
    </tr>
    <tr>
      <td type="date">2013-01-12T12:34:56+08:00</td>
      <td type="datetime">2013-01-12T12:34:56+08:00</td>
    </tr> */
}
