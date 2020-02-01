var Being = require('../src/being');
var Part = require('../src/part');

class Ship {
  constructor({name, type, odometer, fuelCapacity, fuel, captian, maxCrew, parts}) {
    this.name = name;
    this.validTypes = ["military", "passenger", "cargo"]
    this.type = this.validTypes.includes(type) ? type : undefined;
    this.maxCrew = maxCrew;
    this.odometer = odometer || 0;
    this.fuelCapacity = fuelCapacity || 10;
    this.fuel = fuel || 0;
    this.captian = captian;
    this.crew = [];
    this.cargo = [];
    this.parts = parts || {};
  }

  addCrew(members) {
    for (var i = 0; i < members.length; i++) {
      if(members[i] instanceof Being) {
        this.crew.push(members[i]);
      }
    }
    if (this.crew.length >= this.maxCrew) {
      this.crew.splice(this.maxCrew);
    }
    // members.forEach(member => {
    //   this.crew.push(member);
  }

  loadCargo(cargo) {
    if (cargo instanceof Part) {
      this.cargo.push(cargo);
    }
  }

  updatePart(part) {
    if (part.type === undefined) {
      return
    }
    // setting a var to check if there is computer in the array of this.parts. Looks into this.parts and checks if there is an existing part.
    var existingPart = this.parts[part.type]
    // setting a var that says if there's an existing part use the value of that part other wise set the value to 0.
    var partValue = existingPart ? existingPart.value : 0
    // if there is a value subtract the existing value from the new value
    var diff = partValue - part.value;
    // the new part gets assigned to part
    this.parts[part.type] = part;
    // return the difference between the values
    return diff
  }

  checkReadiness() {
    var status = {
      readyToFly: false,
      notes: ""
    }
    if (!this.captian) {
      status.notes = 'Cannot fly without a captian'
    } else if (!this.fuel) {
      status.notes = 'Cannot fly without fuel'
    } else if (!Object.keys(this.parts).length) {
      status.notes = 'Cannot fly without all parts'
    } else {
      status.notes = 'Good to go!'
      status.readyToFly = true
    }
    return status;
  }
}

module.exports = Ship;
