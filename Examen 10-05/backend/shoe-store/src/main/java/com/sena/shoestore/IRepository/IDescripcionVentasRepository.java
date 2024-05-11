package com.sena.shoestore.IRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sena.shoestore.Entity.DescripcionVentas;
import com.sena.shoestore.DTO.IDescripcionVentasDto;

@Repository
public interface IDescripcionVentasRepository extends IBaseRepository<DescripcionVentas, Long>{
    @Query(value = "SELECT "
	+ "v.id , "
    + "producto_id, "
    + "p.nombre_producto as nombreProducto, "
    + "p.descripcion, "
    + "d.cantidad, "
    + "p.precio, "
    + "(p.precio * d.cantidad) as subTotal "
    + "from descripcion_ventas d "
    + "Inner join productos p ON d.producto_id = p.id "
    + "inner join ventas v ON d.ventas_id = v.id "
    + "WHERE v.id = :id ;"
    , nativeQuery = true)
    Optional<DescripcionVentas> getDescripcion(@Param("id") Long id);
}
