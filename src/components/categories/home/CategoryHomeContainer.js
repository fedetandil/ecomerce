import React, {useState, useEffect} from 'react';
import CategoryHomeLayout from "./CategoryHomeLayout";
import Carrusel from "../../carousel/Carrusel";
import SmartItems from "./files/tvs.json";
import HogarItems from "./files/hogar.json";
import ClimatizacionItems from "./files/climatizacion.json";
import MueblesYColchonesItems from "./files/mueblesycolchones.json";


export default function CategoryHomeContainer() {

    return (
        <>
            <Carrusel/>
            <CategoryHomeLayout categoryName="Ofertas Smart TV" items={SmartItems}/>
            <CategoryHomeLayout categoryName="Equipa tu Hogar" items={HogarItems}/>
            <CategoryHomeLayout categoryName="Ofertas Climatización" items={ClimatizacionItems}/>
            <CategoryHomeLayout categoryName="Muebles y Colchones" items={MueblesYColchonesItems}/>
        </>
    );
};
