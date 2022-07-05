import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notebookrange',
  templateUrl: './notebookrange.component.html',
  styleUrls: ['./notebookrange.component.css']
})
export class NotebookrangeComponent implements OnInit {
  prange: any;
  productsArray: any;
  dispProducts: any;

  constructor() { }

  ngOnInit(): void {
      this.productsArray=[
        {name:'Champion Printing', price:500, disp:'CHAMPION is the leading service provider of all types of Offset Printing Services in Sivakasi, India',img:"https://img.freepik.com/free-photo/abstract-colorful-paper-wave-background-3d-render-illustration_6735-1715.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144",btn:'company website',url:'https://www.championprinting.in/'},
        {name:'Yessar Agencies', price:4000, disp:'We YESSAR AGENCIES are well known as one of the quality and reputed offset printers based on Sivakasi, India , the second big printing centre next to Guttenburg in Germany.',img:"https://img.freepik.com/free-photo/hands-full-colors_1160-680.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144",btn:'company website',url:'http://www.yessaragencies.com/'},
        {name:'Geetha Prints', price:3000, disp:'We complete projects efficiently and on schedule, and go above and beyond to form lasting relationships with our clients.',img:'https://img.freepik.com/free-photo/abstract-acrylic-drop-water_69379-79.jpg?size=338&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.geethaprints.in/'},
        {name:'SR Print Systems', price:5000, disp:'SR Print Systems latest computer facilities are all state-of-art technology that can give you limitless possibilities in graphics, layout and publication design. ',img:'https://img.freepik.com/free-photo/explosion-colored-powder-black-background_36888-259.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'http://www.printsystems.in/bookprinting.php'},
        {name:'Soorya NoteBook', price:4500, disp:'We are engaged to supply all kinds of monthly calendars, daily calendars, table calendars, diaries, school and college notebook, label printing, sweet box printing, agarbathi box printing and all kinds of printing as per the clients needs and requirements.',img:'https://img.freepik.com/free-psd/glass-logo-mockup-blue-fabric_49421-175.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/sooryatraders/'},
        {name:'Green Apple NoteBook Company', price:3500, disp:'Best School Note Book Manufacturers in Sivakasi.All type of schools, college notebooks and diaries. Custom made notebooks play major role in our production.',img:'https://img.freepik.com/free-vector/abstract-antelope-shape_42859-472.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.16504461444',btn:'company website',url:'http://www.moderncards.in/'},
        {name:'Ellora Note Book Printing', price:10000, disp:'We at Ellora Stationery breathe creativity and are inspired by it. Our creative energies aid us in the process of ideation, innovation and expression. ',img:'https://img.freepik.com/free-photo/water-drop-pattern-surface-colorful-peacock-feather_23-2148114624.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://ellorastationery.com/school-note-book-printing.html'},
        {name:'SFA Print Pvt Ltd', price:2000, disp:'SFA Print is a full service business company providing successful printing solutions for individuals and businesses of all sizes tailored to meet their special needs. Your business is in good hands!',img:'https://img.freepik.com/free-psd/abstract-background-design_1297-88.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.sfaprint.co.in/services.php'},
        {name:'Nandha Diaries & Note Books', price:2500, disp:'Nandha Diaries & Note Books is a Stationery manufacturer in Sivakasi, Tamil Nadu',img:'https://img.freepik.com/free-photo/golden-powder-explosion-black-background_44314-2393.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.justdial.com/jdmart/Sivakasi/Nandha-Diaries-And-Note-Books-Near-Phoenix-Digital-Print-Sivakasi-East/9999P4562-4562-110812151421-S7Y8_BZDET/catalogue'},
        {name:'Sri Jayam NoteBooks', price:1500, disp:'We provide superior and excellent quality Note Making service at a highly affordable price. Long-lasting Notebooks offered by us beget some distinct qualities',img:'https://img.freepik.com/free-psd/abstract-background-design_1297-87.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://sites.google.com/site/srijayamnotebookssivakasi/'},
        {name:'Vetri Note Books', price:1000, disp:'WE READY TO GIVE ALL YOUR REQUIREMENTS FOR SCHOOL NOTE BOOKS LIKE, SCHOOL HAND BOOKS, CURSIVE WRITING BOOKS, EXAM SHEETS,EXAM BOOKLETS, DAILY & MONTHLY CALENDARS, YEAR DIARY AND ALL PRINTING JOBS.',img:'https://img.freepik.com/free-vector/gradient-golden-background_23-2149036573.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://vetri-fine-arts.business.site/?utm_source=gmb&utm_medium=referral'},
      
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

    if(range >=1500 && range <=2000 && a.price >=1500 && a.price<= 2000){
      rangeArray.push(a)
    }
    if(range >=2500 && range <=3000  && a.price >=2500 && a.price <=3000){
      rangeArray.push(a)
    }
    if(range >= 3500 && range <=4000  && a.price >=3500 && a.price <=4000){
      rangeArray.push(a)
    }
    if(range >= 4500 && range <=5000  && a.price >=4500 && a.price <=5000){
      rangeArray.push(a)
    }
    
  })

  this.dispProducts =rangeArray;
 }

 onSubmit() {
  if(confirm( "you order NoteBook printing and the price range is " + this.prange  +" " )) {
    alert("Your order was send to the company....  We will conduct you soon....");
  }
}
}


