const cohorts = [
    {email: "idrees@gmail.com", password: "idrees123", user: "Idrees"},
    {email: "Abdullah@gmail.com", password: "abdullah123", user: "Abdullah"},
    {email: "muiz@gmail.com", password: "muiz123", user: "muiz"},
    {email: "feranmi@gmail.com", password: "feranmi123", user: "feranmi"},
    {email: "lateefah@gmail.com", password: "lateefah123", user: "lateefah"},
]

const loginForm = document.getElementById('loginForm')
const errorDiv = document.getElementById('error')


async function fetchUserData(email, password) {
    await new Promise(resolve => setTimeout(resolve, 3000))

    return cohorts.find(cohort => cohort.email === email && cohort.password === password);
}


async function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // check if the fields are empty 
    if(!email || !password){
        errorDiv.textContent = "please fill in both fields"
        return;
    }

    errorDiv.textContent = 'fetching user data....' //// 

    const user = await fetchUserData(email, password); // simulating the network delay in the fetching of data

    if(user){
        errorDiv.textContent = '';// clear any previous error message
        setTimeout(() => {
            alert(`Hi ${user.user}! you are logged in`);
            loginForm.reset();

        }, 100)
        


    }else{
        errorDiv.textContent = "invalid credentials"
    }
}


loginForm.addEventListener('submit', handleLogin)

const cardContainer = document.getElementById('cardContainer');

cardContainer.innerHTML = cohorts.map(cohort => `
    <div id="usercard">
            <p>Email: ${cohort.email}</p>
            <p>User: ${cohort.user}</p>
    
        </div>
    `)