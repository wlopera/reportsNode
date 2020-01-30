const Handlebars = require("handlebars");

const source =
  "<p>Hola, mi nombre es {{name}}. Soy de  {{hometown}}. <br>Tengo  " +
  "{{kids.length}} hijos:</p>" +
  "<ul>{{#kids}}<li>{{name}} tiene {{age}}</li>{{/kids}}</ul>";

const template = Handlebars.compile(source);

const data = {
  name: "Julio Verne",
  hometown: "Caracas, Venezuela",
  kids: [
    { name: "Copernico", age: "22" },
    { name: "Camila", age: "26" }
  ]
};

const htmlSource = () => source;
const htmlData = () => JSON.stringify(data, null, 4);
const process = () => template(data);

exports.htmlSource = htmlSource;
exports.htmlData = htmlData;
exports.process = process;
