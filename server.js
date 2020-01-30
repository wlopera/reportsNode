const express = require("express");
const app = express();
const path = require("path");

const exportar = require("./htmlxml");
const changeHTML = require("./handlerTest");

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/conversor", function(req, res) {
  const filename = exportar.conversor();
  res.write("<html>");
  res.write("<h1>Libreria: html2xlsx.js </h1>");
  res.write("<hr>");
  res.write("Conversion HTML => " + filename);
  res.write("<br>");
  res.write('<a href="/">Regresar</a>');
  res.write("</html>");
  res.end();
});

app.get("/change", function(req, res) {
  res.write("<html>");
  res.write("<h1>Libreria: Handlebars.js </h1>");
  res.write("<hr>");
  res.write("<strong>");
  res.write(
    "Lenguajes de plantillas que mantienen la vista y los datos separados"
  );
  res.write("</strong>");
  res.write("<hr>");
  res.write("<h3>Html con variables </h3>");
  res.write(changeHTML.htmlSource());
  res.write("<hr>");
  res.write("<h3>Valores a actualizar en el HTML</h3>");
  res.write(changeHTML.htmlData());
  res.write("<hr>");
  res.write("<h3>Html actualizado</h3>");
  res.write(changeHTML.process());
  res.write('<a href="/">Regresar</a>');
  res.write("</html>");
  res.end();
});

app.listen(3000, function() {
  console.log("Servidor activo puerto 3000");
});
