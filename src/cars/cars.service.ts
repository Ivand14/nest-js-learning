import { Injectable, NotFoundException } from '@nestjs/common';

import { Car } from './interfaces/car.interfaces';
import {v4 as uuid} from 'uuid'

@Injectable()
export class CarsService {
    private cars:Car[] = [
        {
            id:uuid(),
            brand:'Toyota',
            model:'Corolla'
        },
        {
            id:uuid(),
            brand:'Audi',
            model:'TT'
        },
        {
            id:uuid(),
            brand:'VW',
            model:'Amarok'
        }
        
        
    ]

    returnAllCars(){
        return this.cars
    }

    oneCarById(id:string){
        const carSelected = this.cars.find((car) => car.id === id)
        
        if(!carSelected) throw new NotFoundException(`El Auto con el id ${id} no existe`)
        
        return `El vehiculo que buscas es un ${carSelected.brand} ${carSelected.model}`
    }


}
