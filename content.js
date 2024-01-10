console.log("[mcitomi] Kréta átlag számító betöltve. v.23.05.18");

const display = document.getElementsByClassName("k-footer-template");

if(document.URL.includes("TanuloErtekeles/Osztalyzatok")){
    
    console.log("[mcitomi] Átlag számolása...");

    let elements = document.getElementsByClassName("atlag kozepre");
    const checktable = setInterval(() => {
        if(elements.length != 0) {
            clearInterval(checktable);
            write(elements);
        }
    }, 50);
}

function write(elements) {
    let sum = 0, db = 0;
    for (let i = 0; i < elements.length; i++) {
        if(elements.item(i).textContent != "") {
            sum += Number((elements.item(i).textContent).replace(",","."));
            db++;
        } 
    }
    display.item(0).children[display.item(0).childElementCount - 2].textContent = `${(sum / db).toFixed(2)}`;
    console.log("[mcitomi] Átlag kiszámolva.");
}
