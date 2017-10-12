// function constructor

/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function () {
    console.log(2017 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/



/*

// Object.create

var personProto = {
    calculateAge: function () {
        console.log(2017 - yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {
        value: 'Jane'
    },
    yearOfBirth: {
        value: 1969
    },
    job: {
        value: 'designer'
    }
});

*/



/*

// Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2017 - el;
}

function isFUllAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }

}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFUllAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

*/





// First class function: functions returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you explain what UI design is?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What do you teach, ' + name + '?');
        }
    } else {
        return function (name) {
            console.log('Hi ' + name + ', what do you do?');
        }
    }
}

var tearcherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

tearcherQuestion('John');
tearcherQuestion('Jane');
tearcherQuestion('Ram');
tearcherQuestion('Shyam');
designerQuestion('Hari');
designerQuestion('Sita');

interviewQuestion('teacher')('Sita');
