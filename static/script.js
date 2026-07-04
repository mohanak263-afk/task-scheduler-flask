// ---------------- Search ----------------

const taskSection = document.querySelector(".tasks");

if(taskSection){

const searchInput=document.createElement("input");

searchInput.placeholder="🔍 Search Tasks";

searchInput.classList.add("search-box");

taskSection.insertBefore(searchInput,taskSection.children[1]);

searchInput.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const cards=document.querySelectorAll(".task-card");

cards.forEach(card=>{

const title=card.querySelector("h3").innerText.toLowerCase();

const desc=card.querySelector("p").innerText.toLowerCase();

if(title.includes(value)||desc.includes(value))
card.style.display="block";
else
card.style.display="none";

});

});

// ---------------- Filter ----------------

const filter=document.createElement("select");

filter.classList.add("filter-box");

filter.innerHTML=`

<option value="all">All Tasks</option>

<option value="completed">Completed</option>

<option value="pending">Pending</option>

`;

taskSection.insertBefore(filter,taskSection.children[2]);

filter.addEventListener("change",function(){

const cards=document.querySelectorAll(".task-card");

cards.forEach(card=>{

const status=card.innerText.toLowerCase();

if(filter.value==="all")
card.style.display="block";

else if(filter.value==="completed")
card.style.display=status.includes("completed")?"block":"none";

else
card.style.display=status.includes("pending")?"block":"none";

});

});

}

// ---------------- Dark Mode ----------------

const darkBtn=document.createElement("button");

darkBtn.innerHTML="🌙 Dark Mode";

darkBtn.className="dark-btn";

document.body.appendChild(darkBtn);

darkBtn.addEventListener("click",function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

darkBtn.innerHTML="☀ Light Mode";

}else{

darkBtn.innerHTML="🌙 Dark Mode";

}

});