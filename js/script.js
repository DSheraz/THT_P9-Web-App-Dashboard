//=======================================
//main javascript
//=======================================

//load localStorage
load();

//variables
const close = document.querySelector(".close");
const alert = document.querySelector(".alert");
const noti = document.querySelector(".notification-svg");
const notiContent = document.querySelector(".notification-content");
const memberName = ["Alex Green","Amanda Doe","Joe Hayes","Dave Smith"];
const searchUser = document.querySelector(".search-user");
const input = document.querySelector("#searchName");
const timezone = document.querySelector(".timezone");
const buttonJS = document.querySelectorAll(".button-js");
const messageArea = document.querySelector(".message-user");
const settings = document.querySelector(".settings");
const message = document.querySelector(".message");

//functions

//=============create list of members for search-user
function membersSearchContainer() {
  const memberContainer = document.createElement("div");
  memberContainer.className = "search-member-container";
  for(let i=0; i<memberName.length; i+=1) {
    const member = document.createElement("div");
    member.className = "search-member";
    member.textContent = memberName[i];
    memberContainer.appendChild(member);
    searchUser.appendChild(memberContainer);
    memberContainer.style.display = "none";
    member.style.display = "none";
  }
}

//=============function to save settings to localStorage
function save() {
  const public = document.querySelector("#public");
  const emailNoti = document.querySelector("#emailNoti");
  localStorage.setItem('public',public.checked);
  localStorage.setItem('emailNoti',emailNoti.checked);
  localStorage.setItem('timezone',timezone.selectedIndex);
}

//=============function to get saved settings from localStorage
function load() {
  const public = JSON.parse(localStorage.getItem('public'));
  const emailNoti = JSON.parse(localStorage.getItem('emailNoti'));
  const timezone = localStorage.getItem('timezone');
  document.querySelector("#public").checked = public;
  document.querySelector("#emailNoti").checked = emailNoti;
  document.querySelector(".timezone").selectedIndex = timezone;
}

//=============function to insert message after button is clicked
function pop(widget) {
  const messagePop = document.createElement('div');
  messagePop.className = "done";
  widget.appendChild(messagePop);
  setTimeout(function(){
     widget.removeChild(messagePop);
   }, 3000);
}

//eventlisteners

//=============close alert
close.addEventListener('click', function () {
  alert.style.display = "none";
});

///=============toggle display of notifications
noti.addEventListener('click', function () {
    notiContent.classList.toggle("show");
});

//=============when searchUser receives input, it will display matched members
searchUser.addEventListener('input', function() {
  membersSearchContainer();
  const member = document.querySelectorAll(".search-member");
  const memberContainer = document.querySelector(".search-member-container");
  for(let i=0; i<member.length; i+=1){
    if (input.value === "") {
      memberContainer.style.display = "none";
      member[i].style.display = "none";
    } else if (member[i].textContent.toLowerCase().indexOf(input.value) !=-1 ) {
      console.log(member[i]);
      memberContainer.style.display = "block";
      member[i].style.display = "block";
      memberContainer.addEventListener('click', function(e) {
        input.value = e.target.textContent;
        memberContainer.style.display = "none";
        member[i].style.display = "none";
      });
    } else {
      memberContainer.style.display = "block";
      member[i].style.display = "none";
    }
  }
});

//=============add eventlistener to settings and message buttons

for(let i=0; i<buttonJS.length; i+=1) {
 buttonJS[i].addEventListener('click',function (e) {
   //send message
   if(e.target.textContent == "Send") {
     pop(message);
     const messagePop = document.querySelector(".done");
     //if memberName and message both exist
     if (memberName.indexOf(input.value) !=-1 && messageArea.value != "") {
       messagePop.textContent = "*message sent";
    //if no user input or user does not exist
    } else if (memberName.indexOf(input.value) ==-1) {
      messagePop.textContent = "*user does not exist";
    //if no message input
    } else if (messageArea.value == "") {
      messagePop.textContent = "*please enter your message before hitting the 'send' button";
    }
  } else if(e.target.textContent == "Save") {    //save settings
     console.log('saved');
     pop(settings);
     const messagePop = document.querySelector(".done");
     save();
     messagePop.textContent = "*settings saved";
  } else if(e.target.textContent == "Cancel"){     //cancel settings
    console.log('canceled');
    pop(settings);
    const messagePop = document.querySelector(".done");
    load();
    messagePop.textContent = "*settings canceled";
  }
 });
}
