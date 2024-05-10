package com.sena.shoestore.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.shoestore.Entity.Ventas;
import com.sena.shoestore.IRepository.IBaseRepository;
import com.sena.shoestore.IRepository.IVentasRepository;
import com.sena.shoestore.IService.IVentasService;

@Service
public class VentasService extends ABaseService<Ventas> implements IVentasService{
    @Autowired
    private IVentasRepository repository;

    @Override
    protected IBaseRepository<Ventas, Long> getRepository(){
        return repository;
    }
    @Override
	public void delete(Long id) {
		repository.deleteById(id);
	}
}
