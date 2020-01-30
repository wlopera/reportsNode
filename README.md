# reportsNode
Node JS utor: wlopera      @ DIC 2019
Reporte HTML to EXCEL

Instalaciones Requeridas:
-------------------------

  1.- Instalar nodeJS
  
  2.- Instalar Express
  
  3.- Instalar nodemon
  
  4.- Instalar html2xlsx
  
  5.- Instalar handlebars
  
  6.- Instalar md5

Script Requerido - package.json:
--------------------------------

  scripts": {
  
       "test": "echo \"Error: no test specified\" && exit 1",
       "start": "node server.js",
       "nodemon": "nodemon ./server.js localhost"
        
   },
    
Subir el servidor:
------------------

> npm run nodemon


  
Codigo Fuente ejemplo 
----------------------

<img width="80%" src = "https://user-images.githubusercontent.com/7141537/73496236-1ed25180-4386-11ea-8415-dc90a83bc006.PNG" />


# Salida del programa - pruebas

HTML de Prueba [archivo ..\reports\htmlxml.js]
-----------------------------------------------

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


Consulta del servicio: localhost:3000:
--------------------------------------

<img width="50%" src = "https://user-images.githubusercontent.com/7141537/73495409-7f608f00-4384-11ea-9b65-89598fea5fd6.PNG" />

Conversion HTML a EXCEL: [Se llama al servicio conversor:  http://localhost:3000/conversor]
-------------------------------------------------------------------------------------------

<img width="50%" src = "https://user-images.githubusercontent.com/7141537/73495410-7f608f00-4384-11ea-996a-1a95ed343b7f.PNG" />

Se genera el archivo en el equipo del cliente
---------------------------------------------

<img width="80%" src = "https://user-images.githubusercontent.com/7141537/73495411-7f608f00-4384-11ea-92ab-c15079d93b5c.PNG" />

Mostrar el archivo en Excel con el resultado
--------------------------------------------

<img width="50%" src = "https://user-images.githubusercontent.com/7141537/73495407-7ec7f880-4384-11ea-8b9a-97f29db2f57a.PNG" />

Consulta del servicio: localhost:3000
-------------------------------------

<img width="50%" src = "https://user-images.githubusercontent.com/7141537/73495409-7f608f00-4384-11ea-9b65-89598fea5fd6.PNG" />

Agregar Valores a un HTML: [Se llama al servicio: http://localhost:3000/change]
-------------------------------------------------------------------------------

<img width="80%" src = "https://user-images.githubusercontent.com/7141537/73495408-7ec7f880-4384-11ea-8621-ee1d4adf7648.PNG" />

### En construcción 

![data](https://user-images.githubusercontent.com/7141537/48297627-294fb500-e47b-11e8-9d9c-4b184aefd012.png)
