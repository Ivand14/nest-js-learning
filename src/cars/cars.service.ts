import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import { Car } from './interfaces/car.interfaces';
import { CreateCarDto } from './dtos';
import { updateCarsDto } from './dtos/update-car.dtos';
import {v4 as uuid} from 'uuid'

@Injectable()
export class CarsService {
    private cars:Car[] = []

    returnAllCars(){
        return this.cars
    }

    oneCarById(id:string){
        const carSelected = this.cars.find((car) => car.id === id)
        
        if(!carSelected) throw new NotFoundException(`El Auto con el id ${id} no existe`)
        
        return carSelected
    }

    createCar(createCarDto:CreateCarDto){

        const newCar = createCarDto

        newCar['id'] = uuid()

        if(newCar) this.cars.push(newCar)

        return newCar
    }

    updateCar(id:string, updateCarsDto:updateCarsDto){
        
        let carDB = this.oneCarById(id)

        if(!id && updateCarsDto.id !== id) throw new BadRequestException('El auto no existe')
        
        this.cars = this.cars.map(car => {
            if(car.id === id){
                carDB = {...car,...updateCarsDto,id}
                return carDB
            }
            return car
        })
        

        return carDB

    }

    deleteCars(id:string){
        const carDB = this.oneCarById(id)

        this.cars = this.cars.filter((car) => car.id !== id)

        return this.cars

    }

    fillCarsWhitSeed(Cars:Car[]){
        this.cars = Cars
    }

}
