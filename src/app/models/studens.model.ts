export class studentsModel{

    name: string="";
alternate_names: string="";
species: string="";
gender: string="";
house:string="" ;
dateOfBirth!: Date ;
yearOfBirth!: number ;
wizard!: boolean;
ancestry: string="";
eyeColour: string="";
hairColour: string="";
wand!: {
wood: string,
core: string,
length: number
};
patronus:string="" ;
hogwartsStudent!: boolean;
hogwartsStaff!: boolean;
actor: string="";
alternate_actors:string[]=[];
alive: boolean=false;
image!: File;


setStudent(student: any):void {
  
    
    this.alternate_names = student.alternate_names || '';
    this.name = student.name || '';
    this.species = student.species || '';
    this.gender = student.gender || '';
    this.house = student.house;
    this.dateOfBirth = student.dateOfBirth || '';
    this.yearOfBirth= student.yearOfBirth || '';
    this.wizard = student.wizard || '';
    this.ancestry = student.ancestry || '';
    this.eyeColour = student.eyeColour || '';
    this.hairColour = student.hairColour || '';
    this.wand = student.wand ;
    this.patronus = student.patronus || '';
    this.hogwartsStudent= student.hogwartsStudent || '';
    this.hogwartsStaff = student.hogwartsStaff || '';
    this.alternate_actors = student.alternate_actors || '';
    this.actor = student.actor || '';
    this.alive = student.alive || false;
    this.image = student.file;
   
  } 
}