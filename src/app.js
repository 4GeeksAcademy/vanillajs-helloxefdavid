/* eslint-disable */
import "bootstrap";
import "./style.css";
import { Button } from "bootstrap";

window.onload = () => {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#escusa").innerHTML = generadorEscusas();
  });
  console.log("hello");
};

let generadorEscusas = () => {
  let quien = [
    " <br><br>La patrulla canina ",
    " <br><br>Mi vecinito, killer bro, ",
    " <br><br>Gargamel ",
    " <br><br>El chino Cudeiro ",
    " <br><br>M.Rajoy "
  ];
  let accion = [
    " quemó ",
    " se comió ",
    " cocinó ",
    " pasteurizo ",
    " enterró"
  ];
  let que = [
    " mi tarea de 4Geeks,",
    " los ejercicios de José(el colombiano)",
    " las sábanas Santas",
    " las papeletas , que tenías todas,",
    " los papeles de Bárcenas"
  ];
  let cuando = [
    " <br>en la última cena",
    " <br>en la semana de  la moda de Ciciolina ",
    " <br>en fiestas spicotropicales y de LSD ",
    " <br>en la fiesta de despedida del Rey emérito",
    " <br> tu ya sabes...cuando bro! "
  ];

  let quienindx = Math.floor(Math.random() * quien.length);
  let accionindx = Math.floor(Math.random() * accion.length);
  let queindx = Math.floor(Math.random() * que.length);
  let cuandoindx = Math.floor(Math.random() * cuando.length);

  return (
    quien[quienindx] + accion[accionindx] + que[queindx] + cuando[cuandoindx]
  );
};
