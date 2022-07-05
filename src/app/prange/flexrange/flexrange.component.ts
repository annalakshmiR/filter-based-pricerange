import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flexrange',
  templateUrl: './flexrange.component.html',
  styleUrls: ['./flexrange.component.css']
})
export class FlexrangeComponent implements OnInit {
  prange: any;
  dispProducts: any;
  productsArray: any;

  constructor() { }

  ngOnInit(): void {
    this.productsArray=[
      {name:'Arrow Flex Printing', price:5000, disp:'As a complete print solution provider, Safire has a very impressive and elaborate pre-press setup. Quality is our priority.',img:"https://img.freepik.com/free-photo/abstract-colorful-paper-wave-background-3d-render-illustration_6735-1715.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144",btn:'company website',url:'https://www.indiamart.com/arrow-flex-printing/services.html'},
      {name:'SR VLF Printers', price:4500, disp:' we “SR VLF Printers” have gained recognition in the field of manufacturing excellent quality range of Promotional Banner, LED Sign Board and Duplex Paper Roll. ',img:"https://img.freepik.com/free-photo/hands-full-colors_1160-680.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144",btn:'company website',url:'https://www.indiamart.com/sr-vlf-printers/'},
      {name:'Designly World', price:5000, disp:'Designly World provides you the best range of banner printing service & other products with effective & timely delivery.',img:'https://img.freepik.com/free-photo/abstract-acrylic-drop-water_69379-79.jpg?size=338&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/designly-world/'},
      {name:'Star Flex Printing', price:4000, disp:'We provide printing offset like flex,brouchure,label in first class quality',img:'https://img.freepik.com/free-photo/explosion-colored-powder-black-background_36888-259.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/proddetail/star-flex-banner-printing-service-22792705812.html'},
      {name:'Soumiya Graphic Arts', price:3000, disp:'Soumiya Graphics Arts a well earned name as a quality printer and well-known among major clients, in and around India. With the access of all state of the art printing equipments, and methods we cater the needs It is managed by experienced professionals.',img:'https://img.freepik.com/free-psd/glass-logo-mockup-blue-fabric_49421-175.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/soumiya-graphicarts/'},
      {name:'Bharani Bala Printographics', price:3500, disp:'Whatever you are looking for you can expect us to have it available for you.We providing our customers with high quality products at the best price .',img:'https://img.freepik.com/free-vector/abstract-antelope-shape_42859-472.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.16504461444',btn:'company website',url:'https://www.indiamart.com/bharani-bala-printographics/'},
      {name:'Robo Flex', price:2500, disp:'We offer branding and creative solution for all type of printing services like trademark labels, magazine, books, cartoon box, wallposter, notice, own design calendars and dairy etc',img:'https://img.freepik.com/free-photo/water-drop-pattern-surface-colorful-peacock-feather_23-2148114624.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://robo-flex.business.site/'},
      {name:'Metro Fine Arts', price:2000, disp:'A quality PRINT HOUSE for all your printing needs such as Wedding Cards, Posters, Business Cards, Magazines, Wallpapers,  Stationery, Calender, Notebooks.',img:'https://img.freepik.com/free-psd/abstract-background-design_1297-88.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/metro-finearts/'},
      {name:'Moorthy Offset Printers', price:1500, disp:'Specialist in all kind of Books, Commercial Lables and Boxes, Leaflets, Posters, Diaries, Calendars and all types of offset printing jobs.',img:'https://img.freepik.com/free-photo/golden-powder-explosion-black-background_44314-2393.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/moorthyoffsetprinters/'},
      {name:'Yogam Printers', price:1000, disp:'We are providing Printing Solutions of creative, infinite design and sophisticated color printing services, which can give your brand and products an improved look and feel.',img:'https://img.freepik.com/free-psd/abstract-background-design_1297-87.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/radha-fine-arts/'},
    ];
    this.dispProducts = this.productsArray
  }
  onChange(range:any){
    console.log(range)
 
   var rangeArray:any = [];
    this.productsArray.filter((a:any)=>{
 
      
 
      if(range >=1000 && range <=1500 && a.price >=1000 && a.price<= 1500){
        rangeArray.push(a)
      }
      if(range >=2000 && range <=2500  && a.price >=2000 && a.price <=2500){
        rangeArray.push(a)
      }
      if(range >= 3000 && range <=3500  && a.price >=3000 && a.price <=3500){
        rangeArray.push(a)
      }
      if(range >= 4000 && range <=4500  && a.price >=4000 && a.price <=4500){
        rangeArray.push(a)
      }
      if(range >= 5000 && range <=5000  && a.price >=5000 && a.price <=5000){
        rangeArray.push(a)
      }
    })
 
    this.dispProducts =rangeArray;
   }
 
   onSubmit() {
     if(confirm( "you order Flex and the price range is " + this.prange  +" " )) {
       alert("Your order was send to the company....  We will conduct you soon....");
     }

}
}