package com.sena.shoestore.Entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "orden_compra")
public class OrdenCompra extends ABaseEntity{
    @Column(name = "fecha_compra")
    private Date fechaCompra;

    @Column(name = "total")
    private Double total;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "proveedores_id", nullable = false)
    private Proveedores proveedores;

    public Date getFechaCompra() {
        return fechaCompra;
    }

    public void setFechaCompra(Date fechaCompra) {
        this.fechaCompra = fechaCompra;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public Proveedores getProveedores() {
        return proveedores;
    }

    public void setProveedores(Proveedores proveedores) {
        this.proveedores = proveedores;
    }
    
}
