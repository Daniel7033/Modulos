package com.sena.shoestore.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.shoestore.Entity.DetalleCompra;
import com.sena.shoestore.IRepository.IBaseRepository;
import com.sena.shoestore.IRepository.IDetalleCompraRepository;
import com.sena.shoestore.IService.IDetalleCompraService;

@Service
public class DetalleCompraService extends ABaseService<DetalleCompra> implements IDetalleCompraService{
    @Autowired
    private IDetalleCompraRepository repository;

    @Override
    protected IBaseRepository<DetalleCompra, Long> getRepository(){
        return repository;
    }
    @Override
	public void delete(Long id) {
		repository.deleteById(id);
	}
}
