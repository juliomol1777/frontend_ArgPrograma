export class Persona{
  id:number;
  fullname:string;
  position:string;
  ubication:string;
  about:string;
  image:string;
  image_background:string;
  email:string;

 constructor(id:number, fullname:string,   position:string, ubication:string, about:string,
             image:string, image_background:string, email:string)
 {

     this.id=id;
     this.fullname=fullname;
     this.position=position;
     this.ubication=ubication;
     this.about=about;
     this.image=image;
     this.image_background=image_background;
     this.email=email;
 }

}
