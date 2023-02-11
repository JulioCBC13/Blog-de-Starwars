import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Details = (props) => {

    const { store, actions } = useContext(Context);
    const params = useParams();
    useEffect(() => {
        if (params.resource && params.uid) {
            actions.getDetails(params.resource, params.uid)
        }
        return () => {
            actions.removeCurrentItem();
        }
    }, [])
    return (
        <div className="container d-flex justify-content-center pt-5">
            {store.currentItem && (
                <React.Fragment>
                    <div className="card mb-3 border-0" style={{ maxWidth: "700px", maxHeight: "800px" }}>
                        <div className="row g-0 d-flex align-item-center" style={{ backgroundColor: "#0C0E14" }}>
                            <div className="col-md-6 align-self-center">
                                <img src={(params.resource === "planets" && params.uid === "1") ? "https://static.wikia.nocookie.net/theclonewiki/images/b/b4/Tatooine-TCW.png/" : `https://starwars-visualguide.com/assets/img/${params.resource === "people" ? "characters" : params.resource}/${params.uid}.jpg`} className="card-img-top" alt="..." />
                                
                                
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h1 className="card-title text-white"><strong>{store.currentItem.properties.name}</strong></h1>
                                    <p className="card-text fs-5 text-light pt-2">Sed scelerisque convallis finibus. Mauris dolor tellus, efficitur in libero sit amet, pretium iaculis ante. Maecenas tempus nisl eu egestas dignissim. Phasellus luctus, nibh nec vulputate varius, felis purus sagittis est, et posuere augue ex vel magna.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row g-0 justify-content-around py-5" style={{ backgroundColor: "#0C0E14" }}>
                            {params.resource === "people" && (
                                <div className="d-flex justify-content-around text-center" style={{ color: "#db2818" }}>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Nombre:<br></br></strong>{store.currentItem.properties.name}</div>
                                    <div className="col-md-2 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Fecha de Cumpleaños:<br></br></strong>{store.currentItem.properties.birth_year}</div>
                                    <div className="col-md-2 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Genero<br></br></strong>{store.currentItem.properties.gender}</div>
                                    <div className="col-md-2 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Tamaño<br></br></strong>{store.currentItem.properties.height}</div>
                                    <div className="col-md-2 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Color de Piel:<br></br></strong>{store.currentItem.properties.skin_color}</div>
                                    <div className="col-md-2 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Color de Ojos:<br></br></strong>{store.currentItem.properties.eye_color}</div>
                                </div>
                            )}

                            {params.resource === "vehicles" && (
                                <div className="d-flex justify-content-around p-3 text-center" style={{ color: "#db2818" }}>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Nombre:<br></br></strong>{store.currentItem.properties.name}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Modelo:<br></br></strong>{store.currentItem.properties.model}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Pasageros:<br></br></strong>{store.currentItem.properties.passengers}</div>
                                    <div className="col-md-2 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Largo:<br></br></strong>{store.currentItem.properties.length}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Capacidad de Carga:<br></br></strong>{store.currentItem.properties.cargo_capacity}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Consumibles:<br></br></strong>{store.currentItem.properties.consumables}</div>
                                </div>
                            )}

                            {params.resource === "planets" && (
                                <div className="d-flex justify-content-around p-3 text-center" style={{ color: "#db2818" }}>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Nombre:<br></br></strong>{store.currentItem.properties.name}</div>
                                    <div className="col-md-2 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Clima:<br></br></strong>{store.currentItem.properties.climate}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Poblacion:<br></br></strong>{store.currentItem.properties.population}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Periodo de Orbita:<br></br></strong>{store.currentItem.properties.orbital_period}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Periodo de Rotacion:<br></br></strong>{store.currentItem.properties.rotation_period}</div>
                                    <div className="col-md-2 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Diametro:<br></br></strong>{store.currentItem.properties.diameter}</div>
                                </div>
                            )}
                            
                            {params.resource === "species" && (
                                <div className="d-flex justify-content-around p-3 text-center" style={{ color: "#db2818" }}>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Nombre:<br></br></strong>{store.currentItem.properties.name}</div>
                                    <div className="col-md-2 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Tiempo De Vida<br></br></strong>{store.currentItem.properties.average_lifespan}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Clasificacion<br></br></strong>{store.currentItem.properties.classification}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Color de Piel<br></br></strong>{store.currentItem.properties.skin_colors}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Lenguaje<br></br></strong>{store.currentItem.properties.language}</div>
                                    <div className="col-md-2 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Tamaño Promedio<br></br></strong>{store.currentItem.properties.average_height}</div>
                                </div>
                            )}
                            {params.resource === "starships" && (
                                <div className="d-flex justify-content-around p-3 text-center" style={{ color: "#db2818" }}>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>MGLT:<br></br></strong>{store.currentItem.properties.MGLT}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Consumibles:<br></br></strong>{store.currentItem.properties.consumables}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Clase:<br></br></strong>{store.currentItem.properties.starship_class}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Pasageros:<br></br></strong>{store.currentItem.properties.passengers}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Longitud:<br></br></strong>{store.currentItem.properties.length}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#013836" }}><strong>Nombre:<br></br></strong>{store.currentItem.properties.name}</div>
                                    
                                </div>
                            )}
                            
                        </div>
                    </div>
                </React.Fragment>
            )}
        </div>
    )
}