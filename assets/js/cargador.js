var index=1;
var suma=0;
function PedidoModelo(producto,unidad,cantidad,precio,descripcion2){
    this.producto=producto;
    this.unidad=unidad;
    this.cantidad=cantidad;
    this.precio=precio;
    this.descripcion2=descripcion2;
}
function CargarProducto(){
    var productoS=document.getElementById("a1");
    var unidadS=document.getElementById("a2");
    var cantidadS=document.getElementById("a3");
    var precioS=document.getElementById("a4");
    var descripcion2S=document.getElementById("a5");

    var Pedido1=new PedidoModelo(productoS,unidadS,cantidadS,precioS,descripcion2S);
    console.log(Pedido1);

    var table1=document.getElementById("tablaSolicitud");
    var row = table1.insertRow(-1);
    var cell1=row.insertCell(0);
    var cell2 =row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4 =row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6 =row.insertCell(5);
    var cell7 =row.insertCell(6);
    cell1.innerHTML=index;
    cell2.innerHTML=Pedido1.producto.value;
    cell3.innerHTML=Pedido1.descripcion2.value;
    cell4.innerHTML=Pedido1.unidad.value;
    cell5.innerHTML=Pedido1.cantidad.value;
    cell6.innerHTML=Pedido1.precio.value;
    cell7.innerHTML=suma;
    index++;
}