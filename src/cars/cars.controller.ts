import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';

import { CarsService } from './cars.service';
import { CreateCarDto, updateCarsDto } from './dtos';


@Controller('cars')
export class CarsController {

    constructor(
        private readonly CarsService: CarsService  
    ){}

    @Get()
    
    getAllCars(){
        return this.CarsService.returnAllCars()
    }
    
    @Get(':id') 

    getCarById( @Param('id',new ParseUUIDPipe({version:'4'})) id: string )  {
        return this.CarsService.oneCarById(id)
    }

    @Post()
    createCar(@Body() body:CreateCarDto){
        return this.CarsService.createCar(body)
    }


    @Patch(':id')
    upateCars(
        @Param('id',new ParseUUIDPipe({version:'4'})) id: string,
        @Body() body:updateCarsDto
    ){
        return this.CarsService.updateCar(id,body)
    }

    @Delete(':id')
    deleteCars(@Param('id',new ParseUUIDPipe({version:'4'})) id:string){
        return this.CarsService.deleteCars(id)
    }
    
} 
