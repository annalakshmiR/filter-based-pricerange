import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leafletrange',
  templateUrl: './leafletrange.component.html',
  styleUrls: ['./leafletrange.component.css']
})
export class LeafletrangeComponent implements OnInit {
  prange: any;
  productsArray: any;
  dispProducts: any;

  constructor() { }

  ngOnInit(): void {
    this.productsArray=[
      
      {name:'Dhanvin Art Printers', price:500, disp:'Dhanvin Art Printers is a leading professional manufacturer and supplier of Printed Packaging Box,Book Printing & Binding, Commercial Printing, Invitation Card, Wall Poster, Calender, Diary and all kinds Offset Printing jobs.',img:"https://img.freepik.com/free-photo/abstract-colorful-paper-wave-background-3d-render-illustration_6735-1715.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144",btn:'company website',url:'https://www.indiamart.com/dhanvinartprinters/executive-notebook.html'},
      {name:'Sundarvel Marketing Company', price:4000, disp:'Sundaravel Marketing Company Private Limited, Sivakasi - Retailer of cutting edge technology, post press & calendars in Sivakasi, Tamil Nadu',img:"https://img.freepik.com/free-photo/hands-full-colors_1160-680.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144",btn:'company website',url:'https://www.indiamart.com/sundaravel-marketing-cmpny-pvt-ltd/'},
      {name:'Bishop Art Printers', price:1000, disp:'Bishop Art Printers is committed to producing the best offset printing, with a wide range of finishing services',img:'https://img.freepik.com/free-photo/abstract-acrylic-drop-water_69379-79.jpg?size=338&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'http://bishopartprinters.in/work.html'},
      {name:'Sri Devi Fine Arts', price:1500, disp:'Manufacturer and supplier of registers, notepads, writing pads, stickers, writing sheets, diaries and executive books',img:'https://img.freepik.com/free-photo/explosion-colored-powder-black-background_36888-259.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/sridevi-finearts/'},
      {name:'Unique Industries', price:2000, disp:'Our expertise and experience acts as a support system for manufacturing and exporting an array of Promotional and Corporate Gift Items. ',img:'https://img.freepik.com/free-psd/glass-logo-mockup-blue-fabric_49421-175.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/uniqueindustries/promotional-items.html'},
      {name:'Arun Traders', price:2500, disp:'Arun Traders provides you the best range of carton box, printed leaflets & mono carton box with effective & timely delivery.',img:'https://img.freepik.com/free-vector/abstract-antelope-shape_42859-472.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.16504461444',btn:'company website',url:'https://www.indiamart.com/aruntraders-sivakasi/'},
      {name:'Zest Impex', price:3000, disp:'We at zest impex offer high-quality print services to our clients in india and the world over. Being in a technology driven market and in an ever increasing competition, we believe in the survival of the fittest module.',img:'https://img.freepik.com/free-photo/water-drop-pattern-surface-colorful-peacock-feather_23-2148114624.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/zestimpex/'},
      {name:'Chockathangam Offset Press', price:500, disp:'Specialist in all kind of Books, Commercial Lables and Boxes, Leaflets, Posters, Diaries, Calendars and all types of offset printing jobs.',img:'https://img.freepik.com/free-photo/golden-powder-explosion-black-background_44314-2393.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/geniusartssivakasi/'},
      {name:'Sri Deepa Enterprises', price:3500, disp:'We offer commercial printing services to produce Posters, Magazines, Calendars, Diaries, Notebooks, Carton Boxes, Labels, Paper bags and Packing boxes.',img:'https://img.freepik.com/free-psd/abstract-background-design_1297-87.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/sri-deepa-enterprises/'},
      {name:'Yassaar Enterprises', price:2000, disp:'Yassaar Enterprises deals in duplex board boxes, phamlets etc.',img:'https://img.freepik.com/free-vector/gradient-golden-background_23-2149036573.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/yessaar-enterprises/'},
    
    ];
    this.dispProducts = this.productsArray
  }
  onChange(range:any){
    console.log(range)
 
   var rangeArray:any = [];
    this.productsArray.filter((a:any)=>{
 
      if(range >=500 && range <=1000 && a.price >=500 && a.price<= 1000){
        rangeArray.push(a)
      }
      if(range >=1500 && range <=2000  && a.price >=1500 && a.price <=2000){
        rangeArray.push(a)
      }
      if(range >= 2500 && range <=3000  && a.price >=2500 && a.price <=3000){
        rangeArray.push(a)
      }
      if(range >= 3500 && range <=4000  && a.price >=3500 && a.price <=4000){
        rangeArray.push(a)
      }
      if(range >= 9000 && range <=10000  && a.price >=9000 && a.price <=10000){
        rangeArray.push(a)
      }
    })
 
    this.dispProducts =rangeArray;
   }
 
   onSubmit() {
     if(confirm( "you order Leaflet and the price range is " + this.prange  +" " )) {
       alert("Your order was send to the company....  We will conduct you soon....");
     }

}
}
