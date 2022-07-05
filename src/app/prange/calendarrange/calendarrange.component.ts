import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendarrange',
  templateUrl: './calendarrange.component.html',
  styleUrls: ['./calendarrange.component.css']
})
export class CalendarrangeComponent implements OnInit {
  productsArray: any;
  dispProducts: any;
  prange: any;

  constructor() { }

  ngOnInit(): void {
    this.productsArray=[
      {name:'Kalai Printers', price:4500, disp:'We Kalai Calendars is an most reputed printing company in Sivakasi.We always provide quality printing service to our reputed Customers at an affordable price ', img:'https://img.freepik.com/free-psd/arrangement-mock-up-table-calendar-indoors_23-2149017180.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'http://www.kalaicalendars.com/'},
      {name:'Asok Calendar corporation', price:4000, disp:'We are one of the most well-established firms engaged in the manufacturing and supplying of a wide range of Calendars. We are offering a wide assortment of Calendars.',img:"https://img.freepik.com/free-psd/decorative-flat-lay-calendar-mockup_23-2148174765.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144",btn:'company website',url:'https://asokcallendarcorpporation.com/home.htm'},
      {name:'Karpaga Calendars', price:2500, disp:'Karpagaa Calendars in Sivakasi, Tamilnadu, India is top skilled in providing the world-class services in printing the Calendars Printing with professional team, who hold the proficiency of professionally handling the precise needs of the customers',img:"https://img.freepik.com/free-psd/arrangement-mock-up-table-calendar-indoors_23-2149017182.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144",btn:'company website',url:'http://karpagaacalendars.com/'},
      {name:'NK Cardss', price:3000, disp:'We do all type of Calendar Jobs to deliver in all over tamilnadu & Bangalore and then Malayasia & Singapore , we are specialized in monthly & daily sheet calendars.',img:'https://img.freepik.com/free-psd/desk-calendar-mockup_358694-3.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.indiamart.com/nkcardss/'},
      {name:'Anand Screen Printers', price:3500, disp:'We are one of the leading Manufacturer and supplier of Daily and Monthly calendars and also providing best printing services to our valuable coustomers till date',img:'https://img.freepik.com/free-psd/hanging-space-theme-calendar-mockup_23-2148222032.jpg?size=338&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://aspsivakasi.com/'},
      {name:'Sibhu prints', price:2000, disp:'SIBHU PRINTS is one of the best leading offset printing unit in Sivakasi, Tamil nadu,  We have started printing monthly calendars, daily calendars, diaries.',img:'https://img.freepik.com/free-psd/minimalist-mock-up-calendar-assortment_23-2149004667.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'http://sibhuprints.com/'},
      {name:'The Coronation Arts & Crafts', price:1500, disp:'Whatever you are looking for you can expect us to have it available for you.We providing our customers with high quality products at the best price .',img:'https://img.freepik.com/free-vector/abstract-antelope-shape_42859-472.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.16504461444',btn:'company website',url:'https://www.coronationarts.com/index.html'},
      {name:'Christian Print Media', price:1000, disp:' our customers list have been spread across Tamil Nadu for printing daily calenders in Tamil and across various states of india for printing calendars in different languages like Kannada, Telugu, Malayalam and Hindi.',img:'https://img.freepik.com/free-psd/horizontal-desk-calendar-mockup-3d-rendering_322208-236.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://christianprintmedia.com/2022/home/'},
      {name:'Sushitra Agencies', price:500, disp:'We are one among Quality Offset Printers in Sivakasi. Our main target is to provide quality and make customer happy.',img:'https://img.freepik.com/free-psd/minimalist-standing-wall-calendar-mockup_15431-691.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'http://www.susitraagencies.com/?gclid=Cj0KCQjw-JyUBhCuARIsANUqQ_JeViUSbLWwV5teKAj7xTgPC5wWHMICxp6Gvj4uMDl5bOeFE9HLhSAaAvIVEALw_wcB'},
      {name:'The Safire Offset Printers', price:1000, disp:'As a complete print solution provider, Safire has a very impressive and elaborate pre-press setup. Quality is our priority.',img:"https://img.freepik.com/free-photo/abstract-colorful-paper-wave-background-3d-render-illustration_6735-1715.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144",btn:'company website',url:'https://www.safireprint.com/services.php'},
      {name:'Genius Arts', price:5000, disp:'We offer commercial printing services to produce Posters, Magazines, Calendars, Diaries, Notebooks, Carton Boxes, Labels, Paper bags and Packing boxes.',img:'https://img.freepik.com/free-psd/abstract-background-design_1297-87.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://geniusarts.in/'},
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
      if(range >= 4500 && range <=5000  && a.price >=4500 && a.price <=5000){
        rangeArray.push(a)
      }
    })

    this.dispProducts =rangeArray;
   }

   onSubmit() {
    if(confirm( "you order product and the price range is " + this.prange  +" " )) {
      alert("Your order was send to the company....  We will conduct you soon....");
    }
 }
}
