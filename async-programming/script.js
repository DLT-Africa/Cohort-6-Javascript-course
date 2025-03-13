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

firstTask().then(secondTask).then(() => console.log("Tasks completed"));


// more on Promises

const registerUser = new Promise((resolve, reject) => {

  let success = false;

  setTimeout(() => {

    if(success) {
      resolve("The operation is successful")
    }else {
      reject("The operation failed")
    }
    
  }, 2000);
});


registerUser.then((positiveResult) => {
  console.log({resolve: positiveResult})
}).catch((negativeResult) => {
  console.log({reject: negativeResult})
}).finally(() => {
  console.log("The operation completed")
});



// Async/await: Simplifies the asynchronus handling process


//creating a promise
const fetchMyData = () => {
  return new Promise((resolve) => {

    setTimeout(() => {

      resolve("Data Fetched")
      
    }, 2000);
  })
}


const handleFetchData = async () => {
  
  const data = await fetchMyData();
  console.log({result: data})
}


handleFetchData();



// Example 2------Simulation

const cohort = {name: "Mueez", height: "77", skin: "fair"}

const fetchCohortData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {

      resolve(cohort)
      
    }, 3000);
  })
}

const processCohortData = (data) => {
  return new Promise ((resolve) => {
    setTimeout(() => {

      resolve(data)
    }
    
    , 4000)
  })
}


const savaCohortData = (processedData) => {
  return new Promise ((resolve) => {
    setTimeout(() => {

      resolve(processedData)
      
    }, 5000);
  })
}




const handleCohortData = async () => {
  console.log("Starting point");


  const data = await fetchCohortData()

  console.log({step1: data});

  let processData
  const getProcessData = await processCohortData(data);


  if(getProcessData) {

    const numHeight = Number(getProcessData.height)

    const newResult = {...getProcessData, height: numHeight}


    processData = newResult

  }
  
  console.log({step2: processData});



  const savedData = await savaCohortData(processData);

  console.log({step3: savedData});


}


handleCohortData();


//  Error Handling in async /await


const fetchUser = () => {
  return new Promise ((resolve) => {

    setTimeout(() => {
      resolve('User Fetched')
    }, 5000);
  })
}


const fetchPost = () => {

  return new Promise((resolve) => {
    setTimeout(() => {

      resolve("Posts fetched successfully")
      
    }, 5000);
  })
}


const handleUserAndPost = async () => {

  
  try {
    console.log("fetching user and posts")

    const user =  await fetchUser();
    const posts = await fetchPost();
    // const [user , posts] = await Promise.all([fetchUser(), fetchPost()])

    console.log(`User: ${user}`)
    console.log(`Posts: ${posts}`)
    
  } catch (error) {

    console.log(`Error: ${error}`)
    
  }finally {
    console.log("operation completed")
  }

}

handleUserAndPost();



// class work

//Inscructions

// 1. Create  function to simulate fetching user data from a database (use setTimeout)
// 2. Create another function to simulate fetching user tasks from a database
// 3. Use async/await with try..catch to handle errors
// 4. Simulate a case where the user is not found, and another where the tasks fail to load

//Correction 


const users = {
  1: {id: 1, name: "Soliu", skin: "Dark"},
  2: {id: 2, name: "Ridwan", skin: "Light"},
  3: {id: 3, name: "Feranmi", skin: "Dark"}

}


const getTheUser =  (userID) => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

    


      
      if (users[userID]) {

        resolve(users[userID])
        
      }else {

        reject(new Error("User not available in the database"))
      }

      
    }, 2000);
  })
}


const getUserTask =  (userID) => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      const tasks = {
        1: ["Dance", "Give up"],
        2: ["Cook", "Break fast"],
        3: ["Attend meeting"]

      }


      
      if (users[userID] && tasks[userID])  {

        resolve(tasks[userID])
        
      }else {

        reject(new Error("User with this task is not available in the database"))
      }

      
    }, 2000);
  })
}


const getUserAndTask = async (userID) => {
  
try {

  console.log("Fetching user....")

  const user = await getTheUser(userID);

  console.log({user});



  console.log(`Fetching ${user?.name}'s task`);

  const userTask = await getUserTask(userID);

  console.log(`${user?.name}'s has this task: ${userTask}`);
  
} catch (error) {

  console.log(`Error : ${error}`)
  
}finally {

  console.log("Operation completed")
}

}



getUserAndTask("4")