class User {
  public id: number;
  private email: string;
  public city: string = "chennai";
  protected courseCount: number = 1;
  constructor(id: number, email: string) {
    this.id = id;
    this.email = email;
  }
  get getAppleEmail(): string {
    return `email id is ${this.email} and city is ${this.city}`;
  }
  set coursecount(courseCount: number) {
    if (courseCount <= 0) {
      throw new Error("error");
    } else {
      this.courseCount++;
    }
  }
  private deleteToken(): void {
    console.log("token deleted!");
  }
}
class subUser extends User {
    isFamily:boolean = true;
    changecourseCountCount(){
    this.courseCount = 8 ;
    }
}
let newuser = new User(32, "m@m.com");

export {};
