//=======================================
//main javascript
//=======================================

//load localStorage
load();

//=============variables
const close = document.querySelector(".close");
const alert = document.querySelector(".alert");
const noti = document.querySelector(".notification-svg");
const notiContent = document.querySelector(".notification-content");
const memberName = ["Alex Green","Amanda Doe","Joe Hayes","Dave Smith"];
const searchUser = document.querySelector(".search-user");
const input = document.querySelector("#searchName");
const timezone = document.querySelector(".timezone");
const settingsButton = document.querySelector(".settings-button");
const sendMessage = document.querySelector(".message-button");
const messageArea = document.querySelector(".message-user");

//=============close alert
close.addEventListener('click', function () {
  alert.style.display = "none";
});

///=============toggle display of notifications
noti.addEventListener('click', function () {
    notiContent.classList.toggle("show");
});

//=============create list of members for search-user
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

//=============when searchUser receives input, it will display matched members
searchUser.addEventListener('input', function() {
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

//=============add eventlistener to settings button to save or cancel settings
 settingsButton.addEventListener('click',function(e) {
   const set = document.createElement('div');
   set.className = "done";
   const settings = document.querySelector(".settings");
   settings.appendChild(set);
   setTimeout(function(){
     settings.removeChild(set);
   }, 3000);
   //target save button and call function save()
   if(e.target.textContent == "Save"){
     console.log('saved');
     save();
     set.textContent = "*settings saved";
     //target cancel button and call function load()
  } else if(e.target.textContent == "Cancel"){
    console.log('canceled');
    load();
    set.textContent = "*settings canceled";
  }
 });

//=============add eventlistener to send button and append message
 sendMessage.addEventListener('click',function (e) {
   if(e.target.textContent == "Send") {
     const sent = document.createElement('div');
     sent.className = "done";
     const message = document.querySelector(".message");
     message.appendChild(sent);
     setTimeout(function(){
        message.removeChild(sent);
      }, 3000);
     //if memberName and message both exist
     if (memberName.indexOf(input.value) !=-1 && messageArea.value != "") {
       sent.textContent = "*message sent";
    //if no user input or user does not exist
    } else if (memberName.indexOf(input.value) ==-1) {
      sent.textContent = "*user does not exist";
    //if no message input
    } else if (messageArea.value == "") {
      sent.textContent = "*please enter your message before hitting the 'send' button";
    }
   }
 });
