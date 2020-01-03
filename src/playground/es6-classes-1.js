class Person{
    constructor(name, age){
        this.name = name || 'test';
        this.age = age || 0 ;
    }
    getGreeting(){
        return `${this.name} is ${this.age} year(s) old`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old`;
    }
}

class Student extends Person{
    constructor(name, age, major = 'Undecided'){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
    
         if(this.hasMajor()){
            description += `Their major is ${this.major}.`;
        }
    return description;
    }
}


class Traveler extends Person{
    constructor(name, age, homelocation){
        super(name,age);
        this.homelocation = homelocation;
    }
    hasHometown(){
        return !!this.homelocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();

        if(this.hasHometown()){
            greeting += `, and hometown is ${this.homelocation}.`
        }
        return greeting;
    }
}

const Puu = new Traveler('Puu-chan',25, 'Beijin')
console.log(Puu.getGreeting());