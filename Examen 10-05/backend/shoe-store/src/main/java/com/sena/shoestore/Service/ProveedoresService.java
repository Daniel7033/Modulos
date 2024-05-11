package com.sena.shoestore.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.shoestore.Entity.Proveedores;
import com.sena.shoestore.IRepository.IBaseRepository;
import com.sena.shoestore.IRepository.IProveedoresRepository;
import com.sena.shoestore.IService.IProveedoresService;

@Service
public class ProveedoresService extends ABaseService<Proveedores> implements IProveedoresService{
    @Autowired
    private IProveedoresRepository repository;

    @Override
    protected IBaseRepository<Proveedores, Long> getRepository(){
        return repository;
    }
    @Override
	public void delete(Long id) {
		repository.deleteById(id);
	}
}
