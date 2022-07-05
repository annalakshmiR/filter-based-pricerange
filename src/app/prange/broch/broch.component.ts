import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-broch',
  templateUrl: './broch.component.html',
  styleUrls: ['./broch.component.css']
})
export class BrochComponent implements OnInit {
  productsArray:any=[]
  dispProducts:any
  prange:any


  constructor() { }

  ngOnInit(): void {
    this.productsArray=[
      
      {name:'The Safire Offset Printers', price:600, disp:'As a complete print solution provider, Safire has a very impressive and elaborate pre-press setup. Quality is our priority.',img:"https://img.freepik.com/free-photo/abstract-colorful-paper-wave-background-3d-render-illustration_6735-1715.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144",btn:'Company website',url:"https://safireprint.com/"},
      {name:'Sri Sai Digital', price:1300, disp:'Sri Sai Digital is One of India’s Leading State of the art commercial colour printing firms, located in Sivakasi, the Printing Capital of India.',img:"https://img.freepik.com/free-photo/hands-full-colors_1160-680.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144",btn:'Company website',url:"https://www.justdial.com/jdmart/Sivakasi/Sri-Sai-Digital-Near-to-Sri-Balaji-Offset-Bus-Stand/9999P4562-4562-190124120619-B6U7_BZDET/catalogue/services"},
      {name:'Bishop Art Printers', price:3000, disp:'Bishop Art Printers is committed to producing the best offset printing, with a wide range of finishing services',img:'https://img.freepik.com/free-photo/abstract-acrylic-drop-water_69379-79.jpg?size=338&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'Company website',url:'http://www.bishopartprinters.in/'},
      {name:'AKWITH Fine Arts', price:2600, disp:'Manufacturer and supplier of registers, notepads, Brouchers, writing pads, stickers, writing sheets, diaries and executive books',img:'https://img.freepik.com/free-photo/explosion-colored-powder-black-background_36888-259.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'Company website',url:'https://akwith-fine-arts.business.site/'},
      {name:'Deva Offset Printers', price:2200, disp:'Deva Printers is a leading multicolor offset printer in Sivakasi and a one-stop solution if you are looking for a creative as well as an Offset Printing specialist.',img:'https://img.freepik.com/free-psd/glass-logo-mockup-blue-fabric_49421-175.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'Company website',url:'https://offsetprinters-sivakasi.business.site/'},
      {name:'The Champion Litho Press', price:1800, disp:'Whatever you are looking for you can expect us to have it available for you.We providing our customers with high quality products at the best price .',img:'https://img.freepik.com/free-vector/abstract-antelope-shape_42859-472.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.16504461444',btn:'Company website',url:'https://www.championprinting.in/portfolio.html'},
      {name:'N.R. Distributors ', price:1400, disp:'We offer branding and creative solution for all type of printing services like trademark labels, magazine, books, cartoon box, wallposter, brouchers, notice, own design calendars and dairy etc',img:'https://img.freepik.com/free-photo/water-drop-pattern-surface-colorful-peacock-feather_23-2148114624.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'Company website',url:'https://www.nrdistributor.in/duplex-board-cake-box.html'},
      {name:'Raj Printers', price:1000, disp:'We deliver quality printing products. Customer is our best.',img:'https://img.freepik.com/free-psd/abstract-background-design_1297-88.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'Company website',url:'https://www.indiamart.com/rajprinterssivakasi/printing-services.html'},
      {name:'Gupta Printers', price:7000, disp:'Specialist in all kind of Books, Commercial Lables and Boxes, Brouchure, Leaflets, Posters, Diaries, Calendars and all types of offset printing jobs.',img:'https://img.freepik.com/free-photo/golden-powder-explosion-black-background_44314-2393.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'Company website',url:'https://www.theguptaprinters.com/index.html'},
      {name:'Genius Arts', price:600, disp:'We offer commercial printing services to produce Posters, Brouchure, Magazines, Calendars, Diaries, Notebooks, Carton Boxes, Labels, Paper bags and Packing boxes.',img:'https://img.freepik.com/free-psd/abstract-background-design_1297-87.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'Company website',url:'https://www.geniusarts.in/'},
      {name:'Sree Shanmuga Process', price:200, disp:'A quality PRINT HOUSE for all your printing needs such as Wedding Cards, Posters, Business Cards, Magazines, Brouchure, Wallpapers, Stationery, Calender, Notebooks',img:'https://img.freepik.com/free-vector/gradient-golden-background_23-2149036573.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'Company website',url:'https://www.justdial.com/Sivakasi/Sree-Shanmuga-Process-Near-Sangeethas-Lodge-Sivakasi-Ho/9999P4562-4562-100928101012-R7C5_BZDET'},
    
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
    if(confirm( "you order Brochure and the price range is " + this.prange  +" " )) {
      alert("Your order was send to the company....  We will conduct you soon....");
    }
    
  }
 

}
