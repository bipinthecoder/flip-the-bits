
window.addEventListener("load",()=>{
    let searchBox  = document.getElementById("input");
    let startBtn = document.getElementById("startBtn");

    startBtn.addEventListener("click",getInput);
});

function getInput(){
    let searchBox  = document.getElementById("input");
    let N = parseInt(searchBox.value);
    console.log("value is",searchBox.value);
    let matrix = [[0,0,0],[0,0,0],[1,1,1]]

    renderMatrix(matrix,N);
}

function renderMatrix(array,size) {
    // let array = [[0,0,0],[0,0,0],[1,1,1]];
    let table = document.createElement("table");
    let alphabet = 65;
    let limit = alphabet + size;
    let numeric = 1;
    for(let i = 0; i <= size; i ++){
        let tr = document.createElement("tr");
        if(i == 0){
            let th1 = document.createElement("th");
            tr.append(th1);
            while(alphabet < limit){
                let th = document.createElement("th");
                th.textContent = String.fromCharCode(alphabet);
                tr.append(th);
                alphabet ++;
                console.log("working here");
            }
        }
        else{
            let k = i - 1;
            let j = 0;
            let count = 0;
            while(j <= size && count < size){
                let td = document.createElement("td");
                if(j == 0){
                    td.innerHTML = numeric;
                    numeric ++;
                    td.setAttribute("class","gray");
                }
                else{
                    td.innerHTML = array[k][count];
                    count ++;
                }
                tr.append(td);
                j ++;
            }

        }
        table.append(tr);
    }
    table.style.marginTop = "5px";
    let displayDiv = document.getElementById("display");
    displayDiv.append(table);
    console.log(table);
}