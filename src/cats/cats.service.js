import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  constructor(){
    this.cats = [];
  }

  findAll(){
    return this.cats;
  }
  
  createImageBitmap(cat){
    this.casts.push(cat)
  }

}