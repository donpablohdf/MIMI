import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import DateFnsUtils from "@date-io/date-fns";
import format from "date-fns/format";

import "../../styles/reservas.css";
import fondo3 from "../../img/fondo3.jpg";

export const Reservas = (props) => {
  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("jwt-token");
  const [isLoading, setIsLoading] = useState(true);
  const { actions } = useContext(Context);
  const [reservas, setReservas] = useState([]);
  const params = useParams();

  const parseFecha = (datos) => {
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    let fecha = new Date(datos);
    fecha.setMinutes(fecha.getMinutes() + fecha.getTimezoneOffset());
    let fechaF = fecha.toLocaleDateString("es", options);
    let fechaD = fechaF.charAt(0).toUpperCase() + fechaF.slice(1);
    return fechaD;
  };

  useEffect(() => {
    if (!token) {
      return (
        <div className="reservas_body" style={{ backgroundImage: `url(${fondo3})`, backgroundSize: `cover` }}>
          <h1 className="bg-danger">No está autorizado</h1>
        </div>
      );
    } else {
      actions.logIn();
    }
    const promesa = () => {
      return new Promise((resolve, reject) => {
        resolve(actions.dataFromAPI("/api/reserva_user/" + userid));
      });
    };
    promesa().then((datos) => {
      setReservas(datos);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="reservas_body" style={{ backgroundImage: `url(${fondo3})`, backgroundSize: `cover` }}>
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div className="reservas_body" style={{ backgroundImage: `url(${fondo3})`, backgroundSize: `cover` }}>
      <h1 className="reservas_header">MIS RESERVAS</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 pb-5 container">
          {reservas.map((element) =>
            element.estado !== 2 ? (
              <div key={element.id} className="col">
                <div className="card h-100">
                  <div className="card-body tarjeta_actividad_body">
                    <h5 className="card-title tarjeta_actividad_nombre">
                      RESERVA:{" "}
                      <span className="tarjeta_actividad_variable">
                        {element.num_reserva}
                      </span>
                    </h5>
                    <p className="card-text tarjeta_actividad_texto">
                      ACTIVIDAD:{" "}
                      <span className="tarjeta_actividad_variable">
                        {element.obj_actividad.nombre}
                      </span>
                    </p>
                    <p className="card-text tarjeta_actividad_texto">
                      REALIZADA:{" "}
                      <span className="tarjeta_actividad_variable">
                        {parseFecha(element.fecha_realizacion)}
                        
                      </span>
                    </p>
                    <p className="card-text tarjeta_actividad_texto">
                      EMITIDA:{" "}
                      <span className="tarjeta_actividad_variable">
                      {parseFecha(element.fecha_reserva)}
                      </span>
                    </p>
                    <div className="row mb-3">
                      <button className="col  mx-4 reservas_boton_cancelar">
                        <Link
                          id={"navLink" + element.id}
                          to={"/cancela_reserva/" + element.id}
                        >
                          <div>Cancelar reserva</div>
                        </Link>
                      </button>
                      <button className="col  mx-4 reservas_boton_comentar">
                        <Link
                          id={"navLink" + element.id}
                          to={"/comenta_actividad/" + element.obj_actividad.id}
                        >
                          <div>Comentar</div>
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
};
