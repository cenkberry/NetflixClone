export function App() {
  return (
    
     <div className="container bg-dark text-light text-center">
     <button className="btn btn-warning my-2 mybut">button</button>
     <div className="para"></div>
     </div>
     
  );
}

let mypara = document.querySelector('.para');
let items = ["pizza","tomato","bread","spagetti","fish"];
for(let x in items){
  let newDiv = document.createElement('div');
  newDiv.innerHTML = items[x];
  mypara.append(newDiv);
};