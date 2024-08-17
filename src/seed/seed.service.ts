import { BRAND_SEED } from './data/brands.seed';
import { BrandsService } from './../brands/brands.service';
import { CARS_SEED } from './data/cars.seed';
import { CarsService } from './../cars/cars.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {

  constructor(
    private readonly CarsService: CarsService,
    private readonly BrandsService: BrandsService
  ){}

  populateDB(){

    this.CarsService.fillCarsWhitSeed(CARS_SEED)
    this.BrandsService.fillBransWhitSeed(BRAND_SEED)

    return 'seed executed SUCCESFULLY'
  }
}
