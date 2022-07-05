import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magazinerange',
  templateUrl: './magazinerange.component.html',
  styleUrls: ['./magazinerange.component.css']
})
export class MagazinerangeComponent implements OnInit {
  prange: any;
  productsArray: any;
  dispProducts: any;

  constructor() { }

  ngOnInit(): void {
    this.productsArray=[
      {name:'Senthil Offset Printers', price:1000, disp:' We are proud to be recognized as the #1 publication book printers in Sivakasi, Tamil Nadu manufacturing and delivering our premium quality goods all around the globe.',img:'https://img.freepik.com/free-photo/abstract-acrylic-drop-water_69379-79.jpg?size=338&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.senthiloffsetprinters.com/products'},
      {name:'Radha Fine Arts', price:2000, disp:'We are providing Printing Solutions of creative, infinite design and sophisticated color printing services, which can give your brand and products an improved look and feel.',img:'https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-56228.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/radha-fine-arts/printing-solutions.html'},
      {name:'Champion Litho Press', price:3000, disp:'Manufacturer and supplier of registers, notepads, Brouchers, writing pads, stickers, writing sheets, diaries and executive books',img:'https://img.freepik.com/free-photo/explosion-colored-powder-black-background_36888-259.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/champion-litho-press/'},
      {name:'The Safire Offset Printers', price:4000, disp:'As a complete print solution provider, Safire has a very impressive and elaborate pre-press setup. Quality is our priority.',img:"https://img.freepik.com/free-photo/abstract-colorful-paper-wave-background-3d-render-illustration_6735-1715.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144",btn:'company website',url:'https://www.safireprint.com/'},
      {name:'Sri Sai Digital', price:5000, disp:'Sri Sai Digital is One of India’s Leading State of the art commercial colour printing firms, located in Sivakasi, the Printing Capital of India.',img:"https://img.freepik.com/free-photo/hands-full-colors_1160-680.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144",btn:'company website',url:'https://www.indiamart.com/sri-sai-digital-sivakasi/'},
      {name:'Bishop Art Printers', price:6000, disp:'Bishop Art Printers is committed to producing the best offset printing, with a wide range of finishing services',img:'https://img.freepik.com/free-photo/abstract-acrylic-drop-water_69379-79.jpg?size=338&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'http://bishopartprinters.in/#'},
      {name:'Kumaran Fine Arts', price:7000, disp:'Kumaran Fine Arts service provider of high-quality Wall Calendars, Table Calendar, Brochure Printing Services, Diaries Printing Service, Label Printing, Award Certificate Printing Service, Paper Envelope Printing Service.',img:'https://img.freepik.com/free-psd/glass-logo-mockup-blue-fabric_49421-175.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/kumaran-fine-arts/products-and-services.html'},
      {name:'Jai Santhosh Offset Press', price:8000, disp:'Whatever you are looking for you can expect us to have it available for you.We providing our customers with high quality products at the best price .',img:'https://img.freepik.com/free-vector/abstract-antelope-shape_42859-472.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.16504461444',btn:'company website',url:"https://www.indiamart.com/jaisanthosh-offset-press/"},
      {name:'Hari Fine Arts', price:9000, disp:'We offer branding and creative solution for all type of printing services like trademark labels, magazine, books, cartoon box, wallposter, notice, own design calendars and dairy etc',img:'https://img.freepik.com/free-photo/water-drop-pattern-surface-colorful-peacock-feather_23-2148114624.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/hari-fine-arts/other-products.html'},
      {name:'Sri Eswari Fine Arts', price:10000, disp:'A quality PRINT HOUSE for all your printing needs such as Wedding Cards, Posters, Business Cards, Magazines, Wallpapers,  Stationery, Calender, Notebooks.',img:'https://img.freepik.com/free-psd/abstract-background-design_1297-88.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/sri-eswari-fine/'},
      {name:'Black Elephant Print & Bind', price:11000, disp:'Black Elephant Print N Bind is the leading Manufacturer, Wholesaler, Trader and Service Provider of Cardboard Box, Hardbound Notebook, Leather Diary, Offset Printing Services and much more.',img:'https://img.freepik.com/free-photo/golden-powder-explosion-black-background_44314-2393.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/black-elephant-print-bind/'},
      {name:'Shri Lingam Printing', price:12000, disp:'SHRI LINGAM PRINTING N TRADING is group of printing industry with organized by 25 Years professionally experienced team and Service experts to deliver the quality/ innovative products with perfect Time line at competitive cost.',img:'https://img.freepik.com/free-psd/abstract-background-design_1297-87.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/shri-lingam-printing-n/'},
      
    ];
    this.dispProducts = this.productsArray
  }
  onChange(range:any){
    console.log(range)
 
   var rangeArray:any = [];
    this.productsArray.filter((a:any)=>{
 
      if(range >=0 && range <=0 && a.price >=0 && a.price<= 0){
        rangeArray.push(a)
      }
 
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
      if(range >= 11000 && range <=12000  && a.price >=11000 && a.price <=12000){
       rangeArray.push(a)
     }
    })
 
    this.dispProducts =rangeArray;
   }
 
   onSubmit() {
     if(confirm( "you order Magazine and the price range is " + this.prange  +" " )) {
       alert("Your order was send to the company.We will conduct you soon....");
     } 
    }

}