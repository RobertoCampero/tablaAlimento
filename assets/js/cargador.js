var index=1;
function PedidoModelo(producto,unidad,cantidad,precio,descripcion2,subtotal){
    this.producto=producto;
    this.unidad=unidad;
    this.cantidad=cantidad;
    this.precio=precio;
    this.descripcion2=descripcion2;
    this.subtotal=subtotal;
}
function CargarProducto(){
    var productoS=document.getElementById("categoriaDetalles").value;
    var unidadS=document.getElementById("unidadDetalles").value;
    var cantidadS=document.getElementById("cantidadDetalles").value;
    var precioS=document.getElementById("cantidadDetalles").value;
    var descripcion2S=document.getElementById("descripcionDetalles").value;
    var subtotalS=cantidadS*precioS;

    var Pedido1=new PedidoModelo(productoS,unidadS,cantidadS,precioS,descripcion2S,subtotalS);
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
    cell2.innerHTML=Pedido1.producto;
    cell3.innerHTML=Pedido1.descripcion2;
    cell4.innerHTML=Pedido1.unidad;
    cell5.innerHTML=Pedido1.cantidad;
    cell6.innerHTML=Pedido1.precio;
    cell7.innerHTML=Pedido1.subtotal;
    index++;
}