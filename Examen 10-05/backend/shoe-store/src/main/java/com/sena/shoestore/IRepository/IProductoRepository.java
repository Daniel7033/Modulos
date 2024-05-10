package com.sena.shoestore.IRepository;

import org.springframework.stereotype.Repository;

import com.sena.shoestore.Entity.Producto;

@Repository
public interface IProductoRepository extends IBaseRepository<Producto, Long>{
    
}
