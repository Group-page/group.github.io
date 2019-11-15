let team_name = `The Optimizers`;
let statusText = `A team that makes everything better`;
let statusArr = team_name.split(``);
let text_animation = document.querySelector(`.text_animation`);
let status = document.querySelector(`.status`);
let discover = document.querySelector(`.discover`);
let first_pade = document.querySelector(`.first-page`);
let main_page = document.querySelector(`.main-page`);
let members_row = document.querySelector(`.mgt50px`);
let menu_toggle = document.querySelector(`.menu-toggle`);
let nav = document.querySelector(`.nav-links`);
let navLinks = document.querySelectorAll(`.nav-links li`);
let open = document.querySelector(`#open`);
let close = document.querySelector(`#close`);


//welcome page
statusArr.forEach((elem, index) => {
    let li = document.createElement(`li`);
    li.id = `t${index}`;
    li.textContent = `${elem}`;
    text_animation.appendChild(li);
});  

 function set(){
    setTimeout(() => {
    text_animation.classList.remove(`hidden`);
    }, 500);
}
set();

let i = 0;
function typeText(){
 	if ( i < statusText.length){
	status.textContent += statusText.charAt(i) ;
	i++;
}
setTimeout(typeText, 100);
}
setTimeout(typeText, 5000);

setTimeout(() => {
    discover.classList.remove(`hidden`);
}, 10000);

function mainPage(){
    first_pade.style.display = `none`;
    main_page.style.display = ``;
}
 discover.addEventListener(`click`, mainPage);

//header  

function menuToggle(){
    nav.classList.toggle(`nav-active`);
    menu_toggle.classList.toggle(`bar`); 
    
    navLinks.forEach((link, index) =>{
        if(link.style.animation){
            link.style.animation = ``;
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });
}
menu_toggle.addEventListener(`click`, menuToggle);



let members = [
	{
		img: `laura.jpg`,
		name: `Laura`,
        prof: `front-end developer`,
        http: `https://h-laura.github.io`
    },
    {
		img: `bella.jpg`,
		name: `Bella`,
        prof: `front-end developer`,
        http: `https://bellakocharyan.github.io`
	},
	{
		img: `rob.jpg`,
		name: `Robert`,
        prof: `front-end developer`,
        http: ` `
	},
	{
		img: `meri.jpg`,
		name: `Meri`,
        prof: `front-end developer`,
        http: `https://merihak2000.github.io/`
	},
	{
		img:  `artur.jpg`,
		name: `Artur`,
		prof: `front-end developer`,
		http: `https://buludyanarthur.github.io/info/`
    }
    
];

members = members.sort((a, b) => Math.random() - 0.5);

    for(let i = 0; i < members.length; i++){
	let member = document.createElement(`div`);
    member.classList.add(`member`);
    members_row.appendChild(member);
 
    let imgBox = document.createElement(`div`);
    imgBox.classList.add(`imgBox`);
    member.appendChild(imgBox);

    let img = document.createElement(`img`);
    img.src = `./images/${members[i].img}`;
    imgBox.appendChild(img);

    let details = document.createElement(`div`);
    details.classList.add(`details`);
    member.appendChild(details);
    
    let name = document.createElement(`h3`);
    name.classList.add(`name`);
    name.textContent = `${members[i].name}`
    details.appendChild(name);
    
    let br = document.createElement(`br`);
    name.appendChild(br);
    let prof = document.createElement(`a`);
    prof.classList.add(`prof`);
    prof.textContent = `${members[i].prof}`;
    name.appendChild(prof); 

    let readMore = document.createElement(`a`);
    readMore.classList.add(`read-more`);
     readMore.textContent = `Read more`;
    readMore.id = `${members[i].name}`;
 	readMore.setAttribute(`href`, `${members[i].http}` );
 	//readMore.style.targetNew="tab";
    details.appendChild(readMore);
}




