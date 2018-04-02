export class User{
  constructor(
    public firebaseID:string,
    public facebookID:string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public phoneNumber: string,
    public school?: string,
    public education?: string,
    public proficiency?: string,
    public selfInfo?: string,
  ){}
}
