export class Experiencia{
  id:number;
  position: string;
  company: string;
  start: string;
  end: string;
  time: string;
  mode: string;
  place: string;
  image: string;

 constructor(id:number, position:string, company:string, start:string, end:string,
  time:string, mode:string, place:string, image: string)
 {

     this.id=id;
     this.position=position;
     this.company=company;
     this.start=start;
     this.end=end;
     this.time=time;
     this.mode=mode;
     this.place=place;
     this.image=image;
 }

}
