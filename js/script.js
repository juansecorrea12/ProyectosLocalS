"use strict";

import Project from "./Project.js";

const idForm = document.getElementById("form-projects");
let id = 0;
let nombreProyecto = document.getElementById("exampleInputName1");
let tiempoProyecto = document.getElementById("exampleInputTiempo1");
let descripcionProyecto = document.getElementById("exampleInputArea");
let empresaProyecto = document.getElementById("empresa");

let projects = [];

idForm.addEventListener("submit", () => {
  id++;
  // Crear instancia de un proyecto ingresado por el usuario
  const project = new Project(
    id,
    nombreProyecto.value,
    tiempoProyecto.value,
    descripcionProyecto.value,
    empresaProyecto.value
  );
  // Agregar esos proyectos a un array de proyectos totales
  projects.push(project);
  // Utilizar el metodo de mostrar por cada proyecto agregado
  project.showProject(projects);

  cleanSpaces();
  console.log(projects);
});

function cleanSpaces() {
  nombreProyecto.value = "";
  tiempoProyecto.value = "";
  descripcionProyecto.value = "";
  empresaProyecto.value = "Selecciona una";
}
