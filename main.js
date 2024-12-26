const Producto = function(nombre, precio, stock, tipodeproducto){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.tipodeproducto = tipodeproducto
}
let producto1 = new Producto("Disco Solido Ssd 480gb Kingston A400 Sata Iii", 45000,6,"ssd")
let producto2 = new Producto("Memoria Ram Kingston Fury Beast 8GB 3200 Mhz", 24200,5,"memoria ram")
let producto3 = new Producto("Micro Amd Ryzen 3 3200g 4.0 Ghz + Rx Vega", 84600,15,"procesador")
let producto4 = new Producto("Placa de Video MSI Nvidia Geforce RTX 3050", 264800,10,"placa de video")
let producto5 = new Producto("Gabinete Gamer Zer01 Gaming Pollux 4 Fan", 52938,3,"gabinete")
let producto6 = new Producto("Fuente 500W Gamemax VP-500 80 PLUS Bronze", 55100,23,"fuente de poder")
let producto7 = new Producto("Disco Solido SSD 1TB Kingston NV2 M.2 NVMe", 72700,20,"ssd")
let producto8 = new Producto("Placa de Video MSI Nvidia Geforce RTX 4060", 456900,6,"placa de video")
let producto9 = new Producto("Procesador AMD Ryzen 7 5700G de 8 núcleos y 4.6GHz", 228800,5,"procesador")

let listaProductos = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9]

function filtroproductos(){
    let palabraClave= prompt("Buscar...").toUpperCase()
    let resultado = listaProductos.filter( (producto)=> producto.nombre.toUpperCase().includes(palabraClave)  )


    if(resultado.length>0){
        console.table(resultado)
    }else{
        alert("No se encontro el producto")
    }
}

filtroproductos()