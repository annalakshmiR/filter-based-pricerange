import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packagingrange',
  templateUrl: './packagingrange.component.html',
  styleUrls: ['./packagingrange.component.css']
})
export class PackagingrangeComponent implements OnInit {
  prange: any;
  productsArray: any;
  dispProducts: any;


  constructor() { }

  ngOnInit(): void {
    this.productsArray=[
      {name:'Bell Printers', price:9000, disp:'We can create customize packaging for your product', img:'https://bellprinters.com/wp-content/uploads/2019/04/wooden-box-natural-wood-bell-printers-packaging-rigid-box-india-manufacturer-TH-300x268.jpg',btn:'company website',url:'https://bellprinters.com/'},
      {name:'The Safire Offset Printers', price:1000, disp:'As a complete print solution provider, Safire has a very impressive and elaborate pre-press setup. Quality is our priority.',img:"https://img.freepik.com/free-photo/abstract-colorful-paper-wave-background-3d-render-illustration_6735-1715.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144",btn:'company website',url:'https://www.safireprint.com/'},
      {name:'Dappa', price:4000, disp:'Rigid box manufacturer in Tamil Nadu, selecting the rigid box for your product is difficult, but not with us. ',img:"https://img.freepik.com/free-photo/hands-full-colors_1160-680.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144",btn:'company website',url:'https://www.dappa.in/'},
      {name:'RBS Rigid Box', price:5000, disp:' At the heart of this enterprising city for perfect packaging options comes RBS - the city oldest, cheapest & finest Rigid Box manufacturer supplying thousands of boxes daily across the country and even overseas.',img:'https://img.freepik.com/free-photo/explosion-colored-powder-black-background_36888-259.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.rigidboxsivakasi.com/'},
      {name:'Aster Prints', price:3000, disp:'We “Aster Prints”, are Proprietorship Firm, engaged in manufacturing the best quality food packaging boxes such as, Cake Box, Sweet Box, Popcorn Box, snacks box, Cupcake box, Burger Box, Sandwich Box etc.',img:'https://img.freepik.com/free-psd/glass-logo-mockup-blue-fabric_49421-175.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'http://asterprints.com/'},
      {name:'BOXPERT', price:8000, disp:'Boxpert becomes the most trusted and preferred Printing and Packaging Partner of various Industrial customers. Boxpert is the best rigid box manufacturer in Sivakasi, Branch in Bangalore.',img:'https://img.freepik.com/free-vector/abstract-antelope-shape_42859-472.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.16504461444',btn:'company website',url:'https://www.boxpert.in/aboutus'},
      {name:'Aruna Packaging Works', price:10000, disp:'We offer branding and creative solution for all type of packaging and printing services like trademark labels, magazine, books, cartoon box, wallposter, notice, own design calendars and dairy etc',img:'https://img.freepik.com/free-photo/water-drop-pattern-surface-colorful-peacock-feather_23-2148114624.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/arun-package/'},
      {name:'Glory Package', price:2000, disp:'our products have offered a credibility to the organization name. We run with the aim of catering the finest quality products to our clients.',img:'https://img.freepik.com/free-psd/abstract-background-design_1297-88.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/glory-package/'},
      {name:'MSL Packaging Industries', price:7000, disp:'Specialist in all kind of Books,Packaging boxes, Commercial Lables and Boxes, Leaflets, Posters, Diaries, Calendars and all types of offset printing jobs.',img:'https://img.freepik.com/free-photo/golden-powder-explosion-black-background_44314-2393.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.justdial.com/jdmart/Sivakasi/MSL-Packaging-Industries-Sivakasi-Ho/9999P4560-4560-110409234308-F3T9_BZDET/catalogue'},
      {name:'VASANTHA PACKAGING INDUSTRY', price:6000, disp:'We are manufacturer of corrugated boxes . We do do multi colour printing for the boxes. We do big size of boxes in with large printing and die cut. We are specialised in large box printing and die cut for the big boxes',img:'https://img.freepik.com/free-psd/abstract-background-design_1297-87.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'http://www.vasanthapackaging.co.in/'},
      {name:'Pandiyan Packaging', price:1000, disp:'A quality PRINT HOUSE for all your printing needs such as Wedding Cards, Posters, Business Cards, Magazines, Wallpapers, Stationery, Calender, Notebooks and packaging items.',img:'https://img.freepik.com/free-vector/gradient-golden-background_23-2149036573.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/company/4843518/'},
    
    ];
    this.dispProducts = this.productsArray
  }
  onChange(range:any){
    console.log(range)
 
   var rangeArray:any = [];
    this.productsArray.filter((a:any)=>{
 
     
 
      if(range >=1000 && range <=2000 && a.price >=1000 && a.price<= 2000){
        rangeArray.push(a)
      }
      if(range >=3000 && range <=4000  && a.price >=3000 && a.price <=4000){
        rangeArray.push(a)
      }
      if(range >= 5000 && range <=6000  && a.price >=5000 && a.price <=6000){
        rangeArray.push(a)
      }
      if(range >= 7000 && range <=8000  && a.price >=7000 && a.price <=8000){
        rangeArray.push(a)
      }
      if(range >= 9000 && range <=10000  && a.price >=9000 && a.price <=10000){
        rangeArray.push(a)
      }
    })
 
    this.dispProducts =rangeArray;
   }
 
   onSubmit() {
    if(confirm( "you order Packaging box and the price range is " + this.prange  +" " )) {
      alert("Your order was send to the company. We will conduct you soon....");
    }

}
}