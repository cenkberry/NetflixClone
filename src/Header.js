const menuitems = 
[
  {
    id: "Ana Sayfa",
    url: "./index.html"
  },
  {
   id: "Bitkiler",
   link: "./bitkiler.html"
 },
 {
  id: "Arajmanlar",
  link: "./arajmanlar.html"
},
{
  id: "Buketler",
  link: "./buketler.html"
},
{
  id: "Nişan&Evlilik",
  link: "./nisanev.html"
},
{
  id: "İletişim",
  link: "./contact.html"
}
];
  const menu = document.querySelector('.menu');
  let result = menuitems.map( item => `<a class="nav-link" aria-current="page" href="${item.link}">${item.id}</a>`).join("");
  menu.innerHTML = result;

export function Header(){  
  return(
  <header className="container-xl">
    <div className="row">
      
      <div className="col-12 flexy mt-1 border">
          <img className="logobox" src="./logo.png" alt="" />
      </div>

      <ul className="col-12 flexy mt-1 border menu"></ul>
   </div>
  </header>
)
};
