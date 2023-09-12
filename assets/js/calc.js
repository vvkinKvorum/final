let square = document.getElementById('square');
let floor = document.getElementById('floor');
let materialType = document.getElementById('materialType');

let cost = 0;

function calculateCost(){
    console.log('calc cost')
    switch(Number(document.getElementById('materialType').value)) {
        case 0: cost = 0; break;
        case 1: cost = 1000; break;
        case 2: cost = 2000; break;
        case 3: cost = 3000; break;
        case 4: cost = 4000; break;
    }
    console.log('cost => ' + cost )

    function makeMoney(n) {
        return parseFloat(n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1 ");
    }

    totalCost = cost*(Number(document.getElementById('square').value))*(Number(document.getElementById('floor').value))
    console.log('totalCost => ' + totalCost )

    document.getElementById('totalCost').innerHTML = makeMoney(totalCost);;

}

// Площадь * Этажи * материал = СУММА

// totalCost = cost*(Number(document.getElementById('square').value))*(Number(document.getElementById('floor').value))
// console.log('totalCost => ' + totalCost )

// document.getElementById('totalCost').innerHTML = totalCost;






