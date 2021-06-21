
const btn = document.querySelector("#btn");

btn.addEventListener("click",addTable)


function addTable(){
  let borderBg = document.querySelector("#borderBg").value;
  let bodyBg = document.querySelector("#bodyBg").value;
  let row = document.querySelector("#row").value;
  let column = document.querySelector("#column").value;
 let tableContainer = document.querySelector(".tableContainer")
  const table = document.querySelector("#table");

    
  if (row >= 11 || column >= 11 || row === "" || column === "" || row < 0 || column < 0 ){ 
    alert('Invalid number!') }
  else{
  
    for(let i = 0; i < row; i++){
      let tr = table.insertRow();
      tr.style.backgroundColor = `${bodyBg}`
    
      if(i >= 5){
        tableContainer.style.overflowY = "scroll";
      }
      for(let j = 0; j < column; j++){
      
          let td = tr.insertCell();
          td.style.borderColor = `${borderBg}`
          // td.style.border = `2px solid ${borderBg}`
        
      }  
    }
  } 
}
