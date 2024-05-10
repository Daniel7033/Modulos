package com.sena.shoestore.IRepository;

import org.springframework.stereotype.Repository;

import com.sena.shoestore.Entity.Cliente;

@Repository
public interface IClienteRepository extends IBaseRepository<Cliente, Long>{
    
}
