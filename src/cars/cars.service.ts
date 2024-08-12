import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id:1,
            brand:'Toyota',
            model:'Corolla'
        },
        {
            id:2,
            brand:'Audi',
            model:'TT'
        },
        {
            id:3,
            brand:'VW',
            model:'Amarok'
        }
        
        
    ]

    returnAllCars(){
        return this.cars
    }

    oneCarById(id:number){
        const carSelected = this.cars.find((car) => car.id === +id)
        
        if(!carSelected) throw new NotFoundException(`El Auto con el id ${id} no existe`)
        
        return `El vehiculo que buscas es un ${carSelected.brand} ${carSelected.model}`

    }

}
