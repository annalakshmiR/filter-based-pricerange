import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitationrange',
  templateUrl: './invitationrange.component.html',
  styleUrls: ['./invitationrange.component.css']
})
export class InvitationrangeComponent implements OnInit {
  dispProducts: any;
  productsArray: any;
  prange: any;

  constructor() { }

  ngOnInit(): void {
    this.productsArray=[
      {name:'Lovely Cards', price:6000, disp:'We can create customize Invitation cards for low cost and high Quality', img:'https://img.freepik.com/free-vector/card-template-with-ethnic-ornament-element_1159-31650.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website'},
      {name:'The Safire Offset Printers', price:1000, disp:'As a complete print solution provider, Safire has a very impressive and elaborate pre-press setup. Quality is our priority.',img:"https://img.freepik.com/free-photo/abstract-colorful-paper-wave-background-3d-render-illustration_6735-1715.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144",btn:'company website',url:'https://lovely-cards.com/'},
      {name:'Madan Cards', price:4000, disp:'Madan Cards & Arts is one of the high quality manufacturers of wedding invitations in India. The concern has machinery to serve pre-pressing, printing and finishing operations.',img:"https://img.freepik.com/free-photo/hands-full-colors_1160-680.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144",btn:'company website',url:'https://www.safireprint.com/services.php'},
      {name:'Sri Sangam Printers', price:3000, disp:' We do Note book printing, school diaries, New year Diary, invitation cards, Daily calendars, Monthly calendars, ledger works, exam papers, bill books, AD Notices, wall notices etc.,',img:'https://img.freepik.com/free-photo/abstract-acrylic-drop-water_69379-79.jpg?size=338&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'http://www.madancards.com/'},
      {name:'Janaki Printers', price:5000, disp:'Manufacturer and supplier of registers, notepads, writing pads, stickers, writing sheets, diaries and executive books',img:'https://img.freepik.com/free-photo/explosion-colored-powder-black-background_36888-259.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://srisangamprinters.weebly.com/'},
      {name:'Jayamani Arts', price:3000, disp:'Whatever you are looking for you can expect us to have it available for you.We providing our customers with high quality products at the best price .',img:'https://img.freepik.com/free-psd/glass-logo-mockup-blue-fabric_49421-175.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/jayamani-arts-sivakasi/'},
      {name:'Ashok Arts', price:8000, disp:'ASHOK ARTS is listed in Trade Indias list of verified sellers offering supreme quality of etc. Buy in bulk from us for the best quality products and service.',img:'https://img.freepik.com/free-vector/abstract-antelope-shape_42859-472.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.16504461444',btn:'company website',url:'https://www.tradeindia.com/Seller-2854513-ASHOK-ARTS/product-services.html'},
      {name:'Venus Print Solution', price:10000, disp:'We offer branding and creative solution for all type of printing services like trademark labels, magazine, books, cartoon box, wallposter, notice, own design calendars and dairy etc',img:'https://img.freepik.com/free-photo/water-drop-pattern-surface-colorful-peacock-feather_23-2148114624.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/venusartprinters/'},
      {name:'Raj Cards', price:2000, disp:'A quality PRINT HOUSE for all your printing needs such as Wedding Cards, Posters, Business Cards, Magazines, Wallpapers,  Stationery, Calender, Notebooks.',img:'https://img.freepik.com/free-psd/abstract-background-design_1297-88.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.rajcards.in/'},
      {name:'Suriya Fine Arts', price:7000, disp:'Suriya Fine Arts creates indigenous traditional and privileged invitations. We are one of the leading manufacturers of wedding invitation cards that include Hindu, Muslim and Christian wedding invitation cards with the utmost quality.',img:'https://img.freepik.com/free-photo/golden-powder-explosion-black-background_44314-2393.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'http://suryafinearts.com/'},
      {name:'Ragav Cards', price:6000, disp:'We design and manufacture wedding cards in our Own Brand. We have 40 years of experience in Wedding card and Printing Industry.',img:'https://img.freepik.com/free-psd/abstract-background-design_1297-87.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://enakukalyanam.in/index.php?os/product_show/1'},
      {name:'Srinath Fine Arts', price:1000, disp:'We are one among Quality Offset Printers in Sivakasi. Our main target is to provide quality and make customer happy.',img:'https://img.freepik.com/free-vector/gradient-golden-background_23-2149036573.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'http://www.srinathfinearts.com/srinath-wedding-cards.asp'},
    
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
     if(confirm( "you order Invitation card and the price range is " + this.prange  +" " )) {
       alert("Your order was send to the company....  We will conduct you soon....");
     }

}
}