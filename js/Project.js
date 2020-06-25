'use strict'

export default class Project {
    constructor(id, nombre, tiempoDesarrollo, descripcion, empresaCargo) {
        this.id = id;
        this.nombre = nombre;
        this.tiempoDesarrollo = tiempoDesarrollo;
        this.descripcion = descripcion;
        this.empresaCargo = empresaCargo;
    }

    showProject(datos) {
        let show = document.getElementById('info-projects');
        const projectMap = datos.map(() => {
            return `
            <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${this.nombre}</h5>
                        <span style="font-style: italic; letter-spacing: 2px;">${this.empresaCargo}</span>
                        <p class="card-text">${this.descripcion}</p>
                        <strong>${this.tiempoDesarrollo}</strong>
                    </div>
                </div>
            </div>
        `;
        })
        const showAll = projectMap.join("");
        show.innerHTML += showAll;
    }

}