let previous = document.getElementById('previous');
let next = document.getElementById('next');
let image = document.getElementById('img');
let name = document.getElementById('name');
let designation = document.getElementById('designation');


let num = 0
let details = [
  {
    img : "./asssets/download.jpeg",
    name : "Ahtasham Mustafa",
    design : "python developer",
  },
  {
    img : "./asssets/download (1).jpeg",
    name : "Bilal Riaz",
    design : "Web developer",
  },
  {
    img : "./asssets/download (2).jpeg",
    name : "Sufyan Ahmed",
    design : " Designer",
  },
]

setprofile(num)
function Previousbutton()
{
  console.log("clicked");
  num--
  setprofile(num);
  
}
function Nextbutton()
{
  console.log(num); 
  num++
  setprofile(num);

}

function setprofile(num)
{
  image.src = details[num].img
  name.textContent = details[num].name
  designation.textContent = details[num].design
}