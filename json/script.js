console.log("Welcome to JSON -- {} class");

fetch("./person.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    
    const addId = { id: 1, ...data };

    console.log(addId);

    const add = addId.address;

    const desAdd = [add.number, add.street, add.city];

    const [first, second, third] = desAdd;
    console.log(`I live at number ${first} ${second} str, ${third}`);
  });
