//Object: key, values and methods

const carA = {
  model: 2013,
  colour: "Black",
  brand: "Toyota",
  price: 2000,
  horsePower: 900,
};
carA.model = {newModel: 5050}
console.log(carA.model);
console.log(carA.colour);
console.log(carA.brand);

console.log(carA.price);

console.log(carA["horsePower"]);

// Example 2

const cars = {
  firstCar: carA,

  secondCar: {
    model: 2014,
    colour: "Green",
    brand: "Nissan",
    price: 20000,
    horsePower: 1000,
  },
};

const carAPrice = cars.firstCar.price;

// const carAPrice = cars["firstCar"]["price"]

console.log({ carAPrice });

//Object with Array

const cohort6 = {
  male: {
    names: ["Abdullah", "Mueez", "Idrees", "Ridwan"],
  },

  female: { name: "Lateefah" },
};

const firstStudent = cohort6.male.names[0];

console.log({ firstStudent });

const dltAfrica = [
  {
    cohorts: {
      cohort1: {
        names: ["Biodun", "Dolu", "Anike", "Shola"],
        hobbies: {
          Biodun: "Football",
          Dolu: "Eating",
          Anike: "Dancing",
          Shola: "Running",
        },
      },
    },
  },

  {
    tutors: {
      names: ["Anate", "SoliuA", "SoliuM", "Abdullah"],
      hobbies: {
        Anate: "Football",
        SoliuA: "Eating",
        SoliuM: "Dancing",
        Abdullah: "Running",
      },
    },
  },
];

const sholaHobby = dltAfrica[0].cohorts.cohort1.hobbies.Shola;

// const studentAndTuto

console.log({ sholaHobby });

const studentAndTutor = {
  [dltAfrica[1].tutors.names[0]]: dltAfrica[0].cohorts.cohort1.names[1],
};

console.log(studentAndTutor);


//Object with methods

// const dynamicKey = "date"

const carB = {
    name: "big daddy",
    brand: "Toyota",
    date: 2013,
    updateYear: function (newDate) {
        this.date = newDate
    }

}

carB.updateYear(3004)
console.log(carB.date)



//class work


const student = {
    name: "Soliu",
    age: 10,
    favNum: [1,2,3,4,5,6,7,8,9,10],
    favSum: function () {
        const sum = this.favNum.reduce((acc, curr) => acc + curr, 0)

        return sum
    }
}

console.log({sum: student.favSum()})




const player = {
  firstName: "Silva",
  lastName: "Thiago",

  age: 38,
  team: {
    clubName: "chelsea",
    location: "England",
    manager: "Pochettino"
  },

  jerseyNumber: 6
}

console.log(player)
console.log(player['team']['manager'])
console.log(player.team.clubName)

player.team.location = "South Africa"
console.log(player.team.location)

const myObject = {
  myMethod1: () => {},  // arrow function
  myMethod2: function(){}, // function declaration
  myMethod3(){}  // function Expression
}


const dog = {
  name: "Fluffy",
  age: 20,
  bark: () => {
    console.log("woof woof")
  }
}

console.log(dog.name)
dog.bark();


const employees = {
  boss: "Lateefat",
  secretary: "Fatimoh",
  sales: "Zimbi",
  accountant: "Deborah"
}

const employeeInfo = Object.keys(employees)
console.log(employeeInfo)

const session = {
  id: 1,
  date: "10-march-2025",
  device: "Mobile",
  browser: "Chrome"
}

const sessionEnteries = Object.entries(session)
console.log(sessionEnteries)

const user = {
  username: "John",
  password: 123456
}

const userinfo = Object.freeze(user)
console.log(userinfo)

userinfo.username = "Ali"
console.log(userinfo)