export class Persona{
  id:number;
  fullname:string;
  position:string;
  ubication:string;
  about:string;
  image:string;

 constructor(id:number, fullname:string,   position:string, ubication:string, about:string,
             image:string)
 {

     this.id=id;
     this.fullname=fullname;
     this.position=position;
     this.ubication=ubication;
     this.about=about;
     this.image=image;
 }

}
