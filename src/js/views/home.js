import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/cards";

const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        
        actions.loadPeople();
        actions.loadPlanets();
        actions.loadVehicles();
    }, []);

    return (
        <div className="container">
            <h2>People</h2>
            <div className="row">
                {store.people.map(person => (
                    <Card key={person.uid} item={person} category="people" />
                ))}
            </div>

            <h2>Planets</h2>
            <div className="row">
                {store.planets.map(planet => (
                    <Card key={planet.uid} item={planet} category="planets" />
                ))}
            </div>

            <h2>Vehicles</h2>
            <div className="row">
                {store.vehicles.map(vehicle => (
                    <Card key={vehicle.uid} item={vehicle} category="vehicles" />
                ))}
            </div>
        </div>
    );
};

export default Home;