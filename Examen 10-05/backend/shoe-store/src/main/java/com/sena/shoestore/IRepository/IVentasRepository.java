package com.sena.shoestore.IRepository;

import org.springframework.stereotype.Repository;

import com.sena.shoestore.Entity.Ventas;

@Repository
public interface IVentasRepository extends IBaseRepository<Ventas, Long>{
    
}
