package com.sena.shoestore.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.shoestore.Entity.DescripcionVentas;
import com.sena.shoestore.IRepository.IBaseRepository;
import com.sena.shoestore.IRepository.IDescripcionVentasRepository;
import com.sena.shoestore.IService.IDescripcionVentasService;

@Service
public class DescripcionVentasService extends ABaseService<DescripcionVentas> implements IDescripcionVentasService{
    @Autowired
    private IDescripcionVentasRepository repository;

    @Override
    protected IBaseRepository<DescripcionVentas, Long> getRepository(){
        return repository;
    }
    @Override
	public void delete(Long id) {
		repository.deleteById(id);
	}
}
