package com.sena.shoestore.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "proveedores")
public class Proveedores extends ABaseEntity{
    @Column(name = "nit")
    private String nit;
    @Column(name = "razon_social")
    private String razonSocial;
    @Column(name = "nombre_contacto")
    private String nombre;
    @Column(name = "cargo_contacto")
    private String cargo;
    @Column(name = "telefono_contacto")
    private String telefono;
    @Column(name = "direccion")
    private String direccion;
    public String getNit() {
        return nit;
    }
    public void setNit(String nit) {
        this.nit = nit;
    }
    public String getRazonSocial() {
        return razonSocial;
    }
    public void setRazonSocial(String razonSocial) {
        this.razonSocial = razonSocial;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getCargo() {
        return cargo;
    }
    public void setCargo(String cargo) {
        this.cargo = cargo;
    }
    public String getTelefono() {
        return telefono;
    }
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
    public String getDireccion() {
        return direccion;
    }
    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }
    
}
