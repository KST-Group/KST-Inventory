var dbConnect=require('../config/config');

module.exports =class UserModel{
  constructor(username,passwords,surname){
    this.username,
    this.passwords,
    this.surname
  }
  static fetchAll(){
    return dbConnect.execute("SELECT*FROM users");
  }
}