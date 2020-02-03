var Part = require('../src/part');

class Shop {
  constructor({name}) {
    this.name = name;
    this.inventory = {}
  }

  addInventory(part) {
    var name = part.name
    this.inventory[name] = part

  }
}

module.exports = Shop







// class Shop {
//   constructor({name}) {
//     this.name = name;
//     this.inventory = {};
//   }
//   addInventory(part) {
//     this.inventory[part.type] = part;
//     if(part.validTypes) {
//       var partType = part.type;
//
//     }
//     console.log(partType);
//   }
// }
