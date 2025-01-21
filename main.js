const Producto = function (marca, modelo, mililitros, precio, stock) {
    this.marca = marca
    this.modelo = modelo
    this.mililitros = mililitros
    this.precio = precio
    this.stock = stock
}
let producto1 = new Producto("versace", "eros flame edt", 200, 225000, 15)
let producto2 = new Producto("armaf", "club de nuit intense edt", 105, 60000, 10)
let producto3 = new Producto("antonio banderas", "the icon elixir", 100, 57000, 20)
let producto4 = new Producto("issey miyake", "leau dissey edt", 125, 230000, 10)
let producto5 = new Producto("jean paul gaultier", "scandal le parfum", 100, 215000, 10)
let producto6 = new Producto("dior", "sauvage parfum", 100, 301000, 15)
let producto7 = new Producto("paco rabanne", "million gold", 100, 205000, 5)

let lista = [producto1, producto2, producto3, producto4, producto5, producto6, producto7]

if (localStorage.getItem("productos")) {
    lista = JSON.parse(localStorage.getItem("productos"))
} else {
    lista = lista
}

function filtrarProducto() {
    Swal.fire({
        title: 'Ingresa el perfume que deseas buscar',
        input: 'text',
        showCancelButton: true,
        confirmButtonText: 'Buscar',
        showLoaderOnConfirm: true,

        preConfirm: (palabraClave) => {
            palabraClave = palabraClave.trim().toUpperCase();
            let resultado = lista.filter((producto) => producto.modelo.toUpperCase().includes(palabraClave));

            if (resultado.length > 0) {
                let tableHtml = '<table><tr><th>Marca</th><th>Modelo</th><th>Mililitros</th><th>Precio</th><th>Stock</th></tr>';
                resultado.forEach((producto) => {
                    tableHtml += `<tr><td>${producto.marca}</td><td>${producto.modelo}</td><td>${producto.mililitros}</td><td>${producto.precio}</td><td>${producto.stock}</td></tr>`;
                });
                tableHtml += '</table>';

                Swal.fire({
                    title: 'Este es el resultado de tu búsqueda',
                    html: tableHtml,
                });
            } else {
                Swal.fire({
                    title: 'No se encuentran coincidencias',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        }
    });
}

function agregarProducto() {

    Swal.fire({

        title: `agregar perfume`,
        html: `<label>marca:</label> <input id="marca-input" class="swal2-input" type="text" autofocus>

        <label>modelo:</label><input id="modelo-input" class="swal2-input" type="text" step="0.01">

        <label>mililitros:</label><input id="mililitros-input" class="swal2-input" type="number" step="1">
        
        <label>precio:</label><input id="precio-input" class="swal2-input" type="number" step="1">

        <label>stock:</label><input id="stock-input" class="swal2-input" type="number" step="1">`,

        showCancelButton: true,
        confirmButtonText: "agregar",
        cancelButtonText: "cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            let marca = document.getElementById("marca-input").value.trim();
            let modelo = document.getElementById("modelo-input").value.trim();
            let mililitros = document.getElementById("mililitros-input").value.trim();
            let precio = document.getElementById("precio-input").value.trim();
            let stock = document.getElementById("stock-input").value.trim();

            if (isNaN(precio) || isNaN(stock) || marca === "" || modelo === "" || isNaN(mililitros)) {
                Swal.fire(
                    {
                        icon: "error",
                        title: "Error",
                        text: "por favor ingresa valores validos"
                    }
                ); return
            }
            let producto = new Producto(marca, modelo, mililitros, precio, stock)

            if (lista.some((elemento) => elemento.modelo === producto.modelo)) {
                Swal.fire({
                    icon: "warning",
                    title: "Advertencia",
                    text: "El producto ya existe en la lista"
                }); return

            }
            lista.push(producto)

            localStorage.setItem("productos", JSON.stringify(lista))

            Swal.fire({
                icon: "succes",
                title: "Producto Agregado",
                text: `se agrego el producto ${producto.modelo} a la lista`,
                timer: 3000
            })
            console.table(lista)

        }
    })
}

let agregar = document.getElementById("agregar")
agregar.addEventListener("click", agregarProducto)

let filtrar = document.getElementById("filtrar")
filtrar.addEventListener("click", filtrarProducto)
