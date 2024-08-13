import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';

import { CarsService } from './cars.service';

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

    getCarById( @Param('id') id: string )  {
        return this.CarsService.oneCarById(id)
    }

    @Post()
    createCar(@Body() body:any){
        return body
    }


    @Patch()
    upateCars(
        @Param('id',ParseIntPipe) id: number,
        @Body() body:any
    ){
        return body
    }

    @Delete(':id')
    deleteCars(@Param('id',ParseIntPipe) id:number){
        return{
            message:'Car deleted'
        }
    }
    
}
