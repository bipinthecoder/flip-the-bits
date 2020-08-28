let matrix = [[0,0,0],[0,0,0],[1,1,1]];
let globalSize = 1;
window.addEventListener("load",()=>{
    let searchBox  = document.getElementById("input");
    let startBtn = document.getElementById("startBtn");

    startBtn.addEventListener("click",getInput);
});

function getInput(){
    let searchBox  = document.getElementById("input");
    let N = parseInt(searchBox.value);
    globalSize = N;
    console.log("value is",searchBox.value);
    // let matrix = [[0,0,0],[0,0,0],[1,1,1]]

    renderMatrix(matrix,N);
}

function renderMatrix(array,size) {
    let table = document.createElement("table");
    let alphabet = 65;
    let limit = alphabet + size;
    let numeric = 1;
    for(let i = 0; i <= size; i ++){
        let tr = document.createElement("tr");
        if(i == 0){
            let th1 = document.createElement("th");
            tr.append(th1);
            let forIndex = 0;
            while(alphabet < limit){
                let th = document.createElement("th");
                th.textContent = String.fromCharCode(alphabet); //using ASCII to fill Alphabets
                th.setAttribute("class","alphabet");
                th.setAttribute("value",forIndex.toString());
                th.addEventListener("click",flipMatrix);
                tr.append(th);
                alphabet ++;
                forIndex ++;
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
                    td.setAttribute("name","gray");
                    td.addEventListener("click",flipMatrix);
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
}

function flipMatrix(e){
    // console.log(e.target.innerHTML)
    let value = e.target.getAttribute("class");
    if(value === "gray"){
        let i = Number(e.target.innerHTML) - 1;
        for(let j = 0; j < globalSize; j ++){
            matrix[i][j] = matrix[i][j] == 0 ? 1 : 0;
        }
        renderMatrix(matrix,globalSize);

    }
    else if(value === "alphabet"){
        console.log(e.target.innerHTML);
        let index = Number(e.target.getAttribute("value"));
        for(let k = 0; k < globalSize; k ++){
            matrix[k][index] = matrix[k][index] === 0 ? 1 : 0;
        }
        renderMatrix(matrix,globalSize);
    }


}