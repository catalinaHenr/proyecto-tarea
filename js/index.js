
var app = {};
var miCallback = datos =>{
    console.log(datos);
    app.mascotas=datos;
    var html = ""
    
    app.mascotas.map(mascotas => {
        html+="<img src='"+mascotas.img+"'><img>";
        for (let propiedad of Object.keys(mascotas)){
            html+="<li>"+propiedad+": "+mascotas[propiedad]+"</li>";
        }
        html+="<hr/>"
    })
    document.getElementById("results").innerHTML = html;

    const $titulo = document.getElementById("titulo");
    const $results = document.getElementById("results");
    const $app = document.getElementById("app");

    console.log($titulo);
    console.log($results);
    console.log($app);

    $titulo.style.backgroundColor = "#F1F45D";
    $titulo.style.borderLeft = "50px";
    $titulo.style.paddingLeft = "1rem";
    $titulo.style.textAlign="center";
    $app.style.textAlign="center";
}   
