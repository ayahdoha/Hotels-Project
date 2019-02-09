import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HOTELS } from '../mock-hotels';
import { OrderPipe } from 'ngx-order-pipe';
import { FilterPipe } from 'ngx-filter-pipe';
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
 

hotels = HOTELS;



collection: any[] =HOTELS.map(function(item){
  return {'hotel': item}   
});

 //hotelFilter: any ='hotel.name' ;

//hotelFilter:string = 'hotel.name';
//hotelFilter: any = { name: '' };

hotelFilter: any =  {hotel: {name: ""}};

order: string = 'hotel.name';
reverse: boolean = false;
sortedCollection: any[];
  
constructor(private orderPipe: OrderPipe,filter: FilterPipe) {
  this.sortedCollection = orderPipe.transform(this.collection, 'hotel.name');
  console.log(this.sortedCollection);
 // this.sortedCollection = filter.transform(this.collection, {hotel: {name: "the"}});
 //this.sortedCollection = filter.transform(this.collection,  this.hotelFilter);
  //this.sortedCollection = 
  //console.log(this.hotelFilter.name+' ayah');
  console.log(this.sortedCollection);
}


setOrder(value: string) {
  if (this.order === value) {
    this.reverse = !this.reverse;
  }

  this.order = value;
}

/*constructor() { }*/

ngOnInit() {
//  console.log(this.hotelFilter);
}


}