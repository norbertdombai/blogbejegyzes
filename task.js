$(function () {
    const myAjax=new MyAjax();
    const posts = [];
    const szuloElem = $(".megjelenit");
    let apivegpont = "http://localhost:3000/posts";
 
myAjax.getAdat(apivegpont, posts, kiir);

$("#ujadat").on("click", () => {
    let ujadat={
        title: "új bejegyzés",
        description: "új bejegyzés leírás",
        userid: 100,
        lajk: "1"
    }
    myAjax.postAdat(apivegpont,ujadat);
});
$("#modosit").on("click", () => {
    let ujadat={
        title: "új bejegyzés",
        description: "új bejegyzés leírás",
        userid: 100,
        lajk: "2"
      }
    myAjax.putAdat(apivegpont,ujadat,2);
});

$("#torol").on("click", () => {
    
    myAjax.deleteAdat(apivegpont,1);
});

let keresomezo = $("#kereses");
keresomezo.on("keyup", () => {
    let apivegpont="http://localhost:3000/posts";
    apivegpont += "?q=" + keresomezo.val();
    console.log(apivegpont);
    myAjax.getAdat(apivegpont, posts, kiir);
});



//database.json "adatbázis" elemeinek kiiratása
    function kiir(tomb) {
        console.log(tomb);
        let sablon = "";
        tomb.forEach((elem) => {
            sablon += `
            <div >
            <h3 >${elem.title}</h3>
            <p>${elem.description} </p>
            <p>${elem.userid}</p>
            <span class="ar">${elem.lajk}</span>
            <button class="torles">Törlés</button>
        </div>
            `;
        });
        szuloElem.html(sablon);
    }

    });