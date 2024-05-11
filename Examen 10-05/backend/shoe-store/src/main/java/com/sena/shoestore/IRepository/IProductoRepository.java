package com.sena.shoestore.IRepository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sena.shoestore.Entity.Producto;

@Repository
public interface IProductoRepository extends IBaseRepository<Producto, Long>{
    @Query(value = "select "
    + "nombre_producto, "
    + "cantidad "
    + "from productos "
    + "WHERE cantidad <=5;", nativeQuery = true)
    List<Producto> getList();
}
