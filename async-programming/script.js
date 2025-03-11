console.log("Let's go async 🏎️!!!");

// Callback --> functions passed as params to another function.

function car(name, callback) {
  console.log("The model is " + name);
  callback();
}

function callCar() {
  console.log("Move on!");
}

car("BMW", callCar);

function greet(name) {
  setTimeout(() => {
    console.log("Hello " + name);
  }, 2000);
}

greet("Feranmi");

function fetchData(callback) {
  setTimeout(() => {
    callback("Data Received");
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});

let numbers = [2, 4, 6, 8];

numbers.map((item) => {
  console.log(item * 2);
});

function greetName(user, callback) {
  console.log("Good morning " + user);
  callback();
}

function displayCall() {
  console.log("Bye Bye!");
}

greetName("Kabeer", displayCall);

// Simulate user auth flow.
function getUser(userId, callback) {
  console.log("Hello");
  setTimeout(() => {
    console.log("User fetched from the DB");
    callback(null, { id: userId, username: "leaky😎😉" });
  }, 1000);
}

function validatePassword(user, callback) {
  setTimeout(() => {
    console.log("Password Validated.");
    callback(null, user);
  }, 1000);
}

function fetchUserPerm(user, callback) {
  setTimeout(() => {
    console.log("Permission retrived!");
    callback(null, { ...user, permission: ["read", "write"] });
  }, 1000);
}

function fetchUserProfile(user, callback) {
  setTimeout(() => {
    console.log("User's profile retrieved!");
    callback(null, {
      ...user,
      profile: { age: 26, email: "lakybass19@gmail.com" },
    });
  }, 1000);
}

function userResponse(user, callback) {
  setTimeout(() => {
    console.log("Response for the user", user);
    callback(null, "Success ✅");
  }, 1000);
}

// Callback hell starts here.
getUser(1, (err, user) => {
  if (err) {
    console.error(err);
  }

  validatePassword(user, (err, validUser) => {
    if (err) {
      console.error(err);
    }

    fetchUserPerm(validUser, (err, userWithPermission) => {
      if (err) return console.error(err);

      fetchUserProfile(userWithPermission, (err, userProfile) => {
        if (err) return console.error(err);

        userResponse(userProfile, (err, response) => {
          if (response) {
            console.info(response);
          } else {
            console.log(err);
          }
        });
      });
    });
  });
});

// Promise.
const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Promise resolved successfully");
  } else {
    reject("I no want --> Mi o fe");
  }
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

delay(2000).then(() => console.log("Executed after 2 seconds"))


// chaining promise
function firstTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("First task")
            resolve()
        }, 3000)
    })
}
function secondTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Second task")
            resolve()
        }, 3000)
    })
}

firstTask().then(secondTask).then(() => console.log("Tasks completed"))