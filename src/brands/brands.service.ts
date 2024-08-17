import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import { Brand } from './entities/brand.entity';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {

  private brands: Brand[] = []

  
  create(createBrandDto: CreateBrandDto) {
    const brand:Brand= 
      {
        id:uuid(),
        name:createBrandDto.name,
        createdAt: new Date().getTime()
      }
    

    return this.brands.push(brand)
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {

    const brand = this.brands.find(brand => brand.id === id)
    
    if(!brand) throw new NotFoundException('El brand no existe')

    return brand
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id)

    this.brands = this.brands.map(brand => {
      if(brand.id === id){
        brandDB.updatedAt = new Date().getTime()
        brandDB = {...brand,...updateBrandDto}
        
        return brandDB
    }
    return brand
  })

    
  }

  remove(id: string) {
    const brandDB = this.findOne(id)

    if(!brandDB.id) throw new NotFoundException('No se encontro el id')
    
    this.brands = this.brands.filter(brand => brand.id != id)

    return this.brands

  }

  fillBransWhitSeed(Brand:Brand[]){
    this.brands = Brand
  }
  
}
