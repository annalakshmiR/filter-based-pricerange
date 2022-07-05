import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  productsArray: any;
  dispProducts: any;
  prange: any;

  constructor() { }

  ngOnInit(): void {
    this.productsArray=[
      {name:'Maharasi Cards', price:200, disp:'We always provide quality printing service to our reputed clients at an affordable price. Also we provide dedicated customer support to get their printing needs fulfilled.', img:'https://img.freepik.com/free-photo/flat-lay-assortment-colourful-paper-sheets_23-2148603798.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/maharishi-cards/products.html#4616470712'},
      {name:'Grace Offset Printers', price:1800, disp:'As a complete print solution provider, Grace printers has a very impressive and elaborate pre-press setup. Quality is our priority.',img:"https://img.freepik.com/free-photo/abstract-colorful-paper-wave-background-3d-render-illustration_6735-1715.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144",btn:'company website',url:'https://www.justdial.com/jdmart/Sivakasi/Grace-Offset-Printers-Opposite-To-Old-East-Post-Office/9999P4562-4562-160913125044-E9L5_BZDET/catalogue/services'},
      {name:'Sri Sai Digital', price:2000, disp:'Sri Sai Digital is One of India’s Leading State of the art commercial colour printing firms, located in Sivakasi, the Printing Capital of India.',img:"https://img.freepik.com/free-photo/hands-full-colors_1160-680.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144",btn:'company website',url:'https://www.justdial.com/jdmart/Sivakasi/Sri-Sai-Digital-Near-to-Sri-Balaji-Offset-Bus-Stand/9999P4562-4562-190124120619-B6U7_BZDET/catalogue/services'},
      {name:'Bishop Art Printers', price:1400, disp:'Bishop Art Printers is committed to producing the best offset printing, with a wide range of finishing services',img:'https://img.freepik.com/free-photo/abstract-acrylic-drop-water_69379-79.jpg?size=338&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'http://bishopartprinters.in/serv.html'},
      {name:'PNA Printograph', price:400, disp:'Manufacturer and supplier of registers, notepads, writing pads, stickers, writing sheets, diaries and executive books',img:'https://img.freepik.com/free-photo/explosion-colored-powder-black-background_36888-259.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/pna-printograph/products-and-services.html'},
      {name:'RATHINAM OFFSET PRINTING PRESS', price:3000, disp:'Rathinam offset Printers is a leading multicolor offset printer in Sivakasi and a one-stop solution if you are looking for a creative as well as an Offset Printing specialist.',img:'https://img.freepik.com/free-psd/glass-logo-mockup-blue-fabric_49421-175.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/rathinamoffsetprintingpress/'},
      {name:'JNB Traders', price:600, disp:'All types of offset printing including Trade Labels, Packaging Cartons, Posters, Invitations, Calendars, Magazines, Business Cards etc',img:'https://img.freepik.com/free-vector/abstract-antelope-shape_42859-472.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.16504461444',btn:'company website',url:'https://www.indiamart.com/jnbtraderssivakasi/'},
      {name:'Hari Fine Arts', price:2200, disp:'We offer branding and creative solution for all type of printing services like trademark labels, magazine, books, cartoon box, wallposter, notice, own design calendars and dairy etc',img:'https://img.freepik.com/free-photo/water-drop-pattern-surface-colorful-peacock-feather_23-2148114624.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/hari-fine-arts/'},
      {name:'Bgp Printers', price:2600, disp:'We are one of the most demanded and most popular printing and packaging companies since 2006 found around the internet and all over the state. ',img:'https://img.freepik.com/free-psd/abstract-background-design_1297-88.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/ragav-graphics/'},
      {name:'Happy Prints', price:3000, disp:'Specialist in all kind of Books, Commercial Lables and Boxes, Leaflets, Posters, Diaries, Calendars and all types of offset printing jobs.',img:'https://img.freepik.com/free-photo/golden-powder-explosion-black-background_44314-2393.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.justdial.com/jdmart/Sivakasi/Happy-Prints-Near-Vivekanatha-Trading-Corporation-Sivakasi-East/9999P4562-4562-130927223029-P2S5_BZDET/catalogue?type=aboutus'},
      {name:'Sri Nilaa Trading Company', price:1000, disp:'We offer commercial printing services to produce Posters, Magazines, Calendars, Diaries, Notebooks, Business cards, Carton Boxes, Labels, Paper bags and Packing boxes.',img:'https://img.freepik.com/free-psd/abstract-background-design_1297-87.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/sri-nilaa-trading-company/products.html'},
      {name:'Sree Shanmuga Process', price:800, disp:'A quality PRINT HOUSE for all your printing needs such as Wedding Cards, Posters, Business Cards, Magazines, Wallpapers, Stationery, Calender, Notebooks',img:'https://img.freepik.com/free-vector/gradient-golden-background_23-2149036573.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.justdial.com/Sivakasi/Sree-Shanmuga-Process-Near-Sangeethas-Lodge-Sivakasi-Ho/9999P4562-4562-100928101012-R7C5_BZDET'},
    
    ];
    this.dispProducts = this.productsArray
  }
  onChange(range:any){
    console.log(range)

   var rangeArray:any = [];
    this.productsArray.filter((a:any)=>{

      if(range >=200 && range <=600 && a.price >=200 && a.price<= 600){
        rangeArray.push(a)
      }
      if(range >=1000 && range <=1400  && a.price >=1000 && a.price <=1400){
        rangeArray.push(a)
      }
      if(range >= 1800 && range <=2200  && a.price >=1800 && a.price <=2200){
        rangeArray.push(a)
      }
      if(range >= 2600 && range <=3000  && a.price >=2600 && a.price <=3000){
        rangeArray.push(a)
      }
    })

    this.dispProducts =rangeArray;
   }

  
   onSubmit() {
    if(confirm( "you order Business card and the price range is " + this.prange  +" " )) {
      alert("Your order was send to the company....  We will conduct you soon....");
    }

}
}
