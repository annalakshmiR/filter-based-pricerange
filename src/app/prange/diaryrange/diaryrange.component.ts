import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diaryrange',
  templateUrl: './diaryrange.component.html',
  styleUrls: ['./diaryrange.component.css']
})
export class DiaryrangeComponent implements OnInit {
  productsArray: any;
  dispProducts: any;
  prange: any;

  constructor() { }

  ngOnInit(): void {
    this.productsArray=[
      {name:'The Coronation Arts Crafts', price:500, disp:'We specialize in the manufacture of Books, (Both Hard cover as well as Soft cover) with section sewing and perfect bound finish.', img:'https://img.freepik.com/free-photo/top-view-colorful-paper-circles_23-2148632484.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.coronationarts.com/'},
      {name:'The Safire Offset Printers', price:1500, disp:'As a complete print solution provider, Safire has a very impressive and elaborate pre-press setup. Quality is our priority.',img:"https://img.freepik.com/free-photo/abstract-colorful-paper-wave-background-3d-render-illustration_6735-1715.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144",btn:'company website',url:'https://www.safireprint.com/services.php'},
      {name:'Daya Graphics Diary', price:1000, disp:'We have an expertise in high end products for corporate, office and elite users. Since our establishment, innovation creativity and commitment to change have been the strongest pillars of our organization',img:"https://img.freepik.com/free-photo/hands-full-colors_1160-680.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144",btn:'company website',url:'http://dayagraphicsdiary.com/'},
      {name:'Bishop Art Printers', price:2000, disp:'Bishop Art Printers is committed to producing the best offset printing, with a wide range of finishing services',img:'https://img.freepik.com/free-photo/abstract-acrylic-drop-water_69379-79.jpg?size=338&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'http://bishopartprinters.in/serv.html'},
      {name:'Majestic  Printers', price:3500, disp:'Majestic Printers is one of India’s leading manufacturers of premium quality notebooks, corporate diaries, and other paper products.',img:'https://img.freepik.com/free-photo/explosion-colored-powder-black-background_36888-259.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'http://majesticprintimpex.com/'},
      {name:'Roja Note Book Company', price:3000, disp:'We are a leading Manufacturer of customized diary and roja small size diary from Sivakasi, India..',img:'https://img.freepik.com/free-psd/glass-logo-mockup-blue-fabric_49421-175.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://www.rojanotebookcompany.com/printed-diary.html'},
      {name:'Matrikas Diary', price:4000, disp:'Whatever you are looking for you can expect us to have it available for you.We providing our customers with high quality products at the best price .',img:'https://img.freepik.com/free-vector/abstract-antelope-shape_42859-472.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.16504461444',btn:'company website',url:'https://matrikas.co.in/'},
      {name:'Orient Color Art Printers Pvt Ltd', price:4500, disp:'We offer branding and creative solution for all type of printing services like trademark labels, magazine, books, cartoon box, wallposter, notice, own design calendars and dairy etc',img:'https://img.freepik.com/free-photo/water-drop-pattern-surface-colorful-peacock-feather_23-2148114624.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'http://theorientunicornn.com/'},
      {name:'Ellora stationery', price:5000, disp:'Manufacturer and supplier of registers, notepads, writing pads, stickers, writing sheets, diaries and executive books',img:'https://img.freepik.com/free-photo/explosion-colored-powder-black-background_36888-259.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://ellorastationery.com/'},
      {name:'Lovely cards', price:2500, disp:'A quality PRINT HOUSE for all your printing needs such as Wedding Cards, Posters, Business Cards, Magazines, Wallpapers,  Stationery, Calender, Notebooks.',img:'https://img.freepik.com/free-psd/abstract-background-design_1297-88.jpg?size=626&ext=jpg&ga=GA1.2.1379686886.1650446144',btn:'company website',url:'https://lovely-cards.com/'},
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
    if(confirm( "you  order Diary and the price range is " + this.prange  +" " )) {
      alert("Your order was send to the company....  We will conduct you soon....");
    }

}
}
