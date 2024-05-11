package com.sena.shoestore.IRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sena.shoestore.DTO.IClienteDto;
import com.sena.shoestore.Entity.Cliente;

@Repository
public interface IClienteRepository extends IBaseRepository<Cliente, Long>{
    @Query(value = "SELECT "
    + "* "
    + "FROM clientes "
    + "WHERE nombre_cliente LIKE CONCAT('%' :nombreCliente '%'); "
    , nativeQuery = true)
    List<IClienteDto> getFiltroNombre(@Param("nombreCliente") String nombreCliente);

    @Query(value = "SELECT "
    + "* "
    + "FROM clientes "
    + "WHERE ciudad LIKE CONCAT('%' :ciudad '%'); "
    , nativeQuery = true)
    List<IClienteDto> getFiltroCiudad(@Param("ciudad") String ciudad);

    @Query(value = "SELECT "
    + "* "
    + "FROM clientes "
    + "WHERE estado LIKE CONCAT('%' :estado '%'); "
    , nativeQuery = true)
    List<IClienteDto> getFiltroEstado(@Param("estado") Boolean estado);
}
