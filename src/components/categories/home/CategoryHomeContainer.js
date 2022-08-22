import React, {useState, useEffect} from 'react';
import CategoryHomeLayout from "./CategoryHomeLayout";

export default function CategoryHomeContainer() {
    let smartItems= [{
        'name' : 'Smart Tv 32" Philips',
        'image' : './Tv32.png',
        'price' : '52000',
        'key' : '1'
    },
        {
            'name' : 'Smart Tv 40" Philips',
            'image' : './Tv40.png',
            'price' : '68000',
            'key' : '2'
        },{
            'name' : 'Smart Tv 55" Philips',
            'image' : './Tv55.png',
            'price' : '123000',
            'key' : '3'
        }, {
            'name': 'Smart Tv 43" LG',
            'image': './LG43.png',
            'price': '75000',
            'key': '4'
        }];
    let hogarItems = [{
        'name' : 'Heladera Kohinoor',
        'image' : './HeladeraKohinoor.png',
        'price' : '150000',
        'key' : '1'
    },
        {
            'name' : 'Cocina Electrolux',
            'image' : './CocinaElectrolux.png',
            'price' : '89000',
            'key' : '2'
        },
        {
            'name' : 'Cocina Florencia',
            'image' : './CocinaFlorencia.png',
            'price' : '121000',
            'key' : '3'
        },
        {
            'name' : 'Cocina Volcan',
            'image' : './CocinaVolcan.png',
            'price' : '64000',
            'key' : '4'
        }];
    let climatizacionItems = [{
        'name' : 'Smart Tv 32',
        'image' : './CocinaFlorencia.png',
        'price' : '5000',
        'key' : '1'
    },
        {
            'name' : 'Smart Tv 40',
            'image' : './Tv40.png',
            'price' : '15000',
            'key' : '2'
        }];
    let mueblesYColchonesItems = [{
        'name' : 'Smart Tv 32',
        'image' : './Tv32.png',
        'price' : '5000',
        'key' : '1'
    },
        {
            'name' : 'Smart Tv 40',
            'image' : './Tv40.png',
            'price' : '15000',
            'key' : '2'
        }];
    return (
        <>
            <CategoryHomeLayout categoryName="Ofertas Smart TV" items={smartItems}/>
            <CategoryHomeLayout categoryName="Equipa tu Hogar" items={hogarItems}/>
            <CategoryHomeLayout categoryName="Ofertas Climatización" items={climatizacionItems}/>
            <CategoryHomeLayout categoryName="Muebles y Colchones" items={mueblesYColchonesItems}/>
        </>
    );
};
