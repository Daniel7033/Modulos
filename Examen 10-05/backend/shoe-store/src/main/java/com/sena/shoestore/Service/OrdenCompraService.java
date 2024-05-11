package com.sena.shoestore.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.shoestore.Entity.OrdenCompra;
import com.sena.shoestore.IRepository.IBaseRepository;
import com.sena.shoestore.IRepository.IOrdenCompraRepository;
import com.sena.shoestore.IService.IOrdenCompraService;

@Service
public class OrdenCompraService extends ABaseService<OrdenCompra> implements IOrdenCompraService{
    @Autowired
    private IOrdenCompraRepository repository;

    @Override
    protected IBaseRepository<OrdenCompra, Long> getRepository(){
        return repository;
    }
    @Override
	public void delete(Long id) {
		repository.deleteById(id);
	}
}
