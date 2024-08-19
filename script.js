const userInfoChange = document.querySelector(".user-info-change");
const darkMode =document.querySelector(".dark-mode-btn")

darkMode.addEventListener("click",()=>{
    darkMode.classList.toggle('dark-btn')
    document.body.classList.toggle("dark-mode");
    document.querySelector(".main-container").classList.toggle("dark-main-container")
    document.querySelector("#user-info").classList.toggle("dark-user-info")
    console.log(darkMode.textContent);
    
    if(darkMode.textContent =="Dark mode"){
        darkMode.textContent="Light mode"
    }else{
        darkMode.textContent="Dark mode"
    }
    
})
userInfoChange.addEventListener('click',()=>{
    storeUserInfo();    
})
function getUserInfo(){
    const userInfoStored =localStorage.getItem('userInforamtion');
    if(userInfoStored){
        userInfo = JSON.parse(userInfoStored);
        document.getElementById("first-name").textContent = userInfo.firstName;
        document.getElementById("last-name").textContent = userInfo.lastName;
        document.querySelector("#country").textContent=userInfo.country;
        document.querySelector("#phone-number").textContent=userInfo.phoneNumber;
        document.querySelector("#state").textContent=userInfo.state;
        document.querySelector("#city").textContent=userInfo.city;
        document.querySelector("#village").textContent=userInfo.village;
    }else{
        storeUserInfo();    
    }
}

function storeUserInfo() {
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");
    const country = prompt("Enter your country:");
    const phoneNumber = prompt("Enter your phone number:");
    const state = prompt("Enter your state:");
    const city = prompt("Enter your city:");
    const village = prompt("Enter your village:");

    const userInfo = {
        firstName:firstName,
        lastName:lastName,
        country:country,
        phoneNumber:phoneNumber,
        state:state,
        city:city,
        village:village,
    };

    localStorage.setItem("userInforamtion",JSON.stringify(userInfo));
    getUserInfo();
}
getUserInfo();


