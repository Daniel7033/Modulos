package com.sena.shoestore.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "descripcion_ventas")
public class DescripcionVentas extends ABaseEntity{
    @Column(name = "nombre_producto", length = 45, nullable = false)
    private String nombreProducto;

    @Column(name = "precio", nullable = false)
    private Double precio;
    
    @Column(name = "cantidad", nullable = false)
    private Integer cantidad;

    @Column(name = "descuento", nullable = true)
    private Double descuento;

    @Column(name = "sub_total", nullable = false)
    private Double subTotal;
    
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "ventas_id", nullable = false)
    private Ventas venta;
    
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "producto_id", nullable = false)
    private Producto producto;

    public String getNombreProducto() {
        return nombreProducto;
    }

    public void setNombreProducto(String nombreProducto) {
        this.nombreProducto = nombreProducto;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    public Double getDescuento() {
        return descuento;
    }

    public void setDescuento(Double descuento) {
        this.descuento = descuento;
    }

    public Double getSubTotal() {
        return subTotal;
    }

    public void setSubTotal(Double subTotal) {
        this.subTotal = subTotal;
    }

    public Ventas getVenta() {
        return venta;
    }

    public void setVenta(Ventas venta) {
        this.venta = venta;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }
    
}

