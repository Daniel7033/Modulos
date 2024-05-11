package com.sena.shoestore.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "detalle_compra")
public class DetalleCompra extends ABaseEntity{
    @Column(name = "cantidad")
    private Integer cantidad;

    @Column(name = "sub_total")
    private Double subTotal;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "compra_id", nullable = false)
    private OrdenCompra compra;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "producto_id", nullable = false)
    private Producto producto;

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    public Double getSubTotal() {
        return subTotal;
    }

    public void setSubTotal(Double subTotal) {
        this.subTotal = subTotal;
    }

    public OrdenCompra getCompra() {
        return compra;
    }

    public void setCompra(OrdenCompra compra) {
        this.compra = compra;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }
    
}
