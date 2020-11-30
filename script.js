let mensajes = new Array();

function mensaje(name, text, fecha) {
    this.name = name;
    this.text = text;
    this.fecha = fecha;
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

const drawApp = () => {
 
    document.getElementById("app").innerHTML = `
    <nav class="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
        <div class="container"><a class="navbar-brand logo" href="#">Mi Proyecto</a><button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse"
                id="navbarNav">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item" role="presentation"><a class="nav-link active" href="project-page.html">Project Page</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <main class="page project-page">
        <section class="portfolio-block project">
            <div class="container">
                <div class="heading">
                    <h2>Taller 1</h2>
                </div>
                <div class="image" style="background-image:url(&quot;assets/img/tech/image4.jpg&quot;);"></div>
            </div>
            <div class="container">
                <form class="d-flex flex-column" data-bs-hover-animate="bounce">
                    <h1 style="color:rgba(11,124,237,0.53);">Caja de Comentarios</h1>
                    <input class="form-control" type="text" placeholder="Nombre Autor" id="nombre">
                    <input class="form-control" type="text" placeholder="Detalle" style="height:100px;margin-top:10px;" id="detalle">
                    <button class="btn btn-primary" type="button"
                        style="margin-top:10px;" id="boton" onclick="obtenerComentario()">Enviar</button>
                    
                </form>
            <form class="d-flex flex-column" data-bs-hover-animate="bounce">
                <div class="d-flex flex-column" id="tablaComentarios">
                ${mensajes.map(msj =>{
                    return `
                    <div class="caja">
                    <div class="titulo">${msj.name} ${msj.fecha}</div>
                    <div>${msj.text}</div>
                    </div>
                    `
                }).join('')}
                </div>

            </form>
            </div>
        </section>
    </main>
    <footer class="page-footer">
        <div class="container">
            <div class="links"><a href="#">About me</a><a href="#">Contact me</a><a href="#">Projects</a></div>
            <div class="social-icons"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-instagram-outline"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a></div>
        </div>
    </footer>
    <script src="./assets/js/jquery.min.js"></script>
    <script src="./assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="./assets/js/script.min.js"></script>
  `
};

drawApp();

const obtenerComentario = () => {
    var nom = document.getElementById("nombre").value;
    var detalle = document.getElementById("detalle").value;
   
    var msj = new mensaje(nom, detalle, today);
    if (mensajes.length > 3) {
        mensajes.shift();
    }
    if (detalle != "" && detalle.length < 200) {
        mensajes.push(msj)
    }else{
        alert("Error ingrese detalle y no sobrepase los 200");
    }

    drawApp();
};


