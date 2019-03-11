
let lis = document.getElementsByClassName("menu-item"),
	ul = document.getElementsByClassName("menu"),
	hdr = document.getElementById("title"),
	adv = document.querySelectorAll(".adv"),
	clm = document.getElementsByClassName("column"),
	dv = document.getElementsByClassName("prompt");

//console.log(lis[2]);
//console.log(hdr);
//console.log(adv[0].parentNode);
console.log(dv);

lis[1].parentNode.insertBefore(lis[2], lis[1]);

let liElem = document.createElement("li");
liElem.classList.add("menu-item");
lis[1].parentNode.appendChild(liElem);
liElem.innerHTML = "Пятый";

document.body.style.backgroundImage = "url(img/apple_true.jpg)";

hdr.innerHTML = "Мы продаем только подлинную технику Apple";
adv[0].parentNode.removeChild(adv[0]);

let like = prompt("Please, write your attitude to tehnology of Apple");

//dv.parentNode.appendChild(like);
document.getElementsByClassName("prompt")[0].innerHTML = like;
//document.dv[0].innerHTML = like;