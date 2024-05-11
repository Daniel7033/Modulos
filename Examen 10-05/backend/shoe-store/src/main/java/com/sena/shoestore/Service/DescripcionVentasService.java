package com.sena.shoestore.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.shoestore.DTO.IDescripcionVentasDto;
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
    @Override
    public Optional<DescripcionVentas> getDescripcion(Long id) {
        return repository.getDescripcion(id);
    }
    
}
