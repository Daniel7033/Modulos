package com.sena.shoestore.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.sena.shoestore.Entity.DescripcionVentas;
import com.sena.shoestore.Entity.Producto;
import com.sena.shoestore.Entity.Ventas;
import com.sena.shoestore.IRepository.IBaseRepository;
import com.sena.shoestore.IRepository.IClienteRepository;
import com.sena.shoestore.IRepository.IVentasRepository;
import com.sena.shoestore.IService.IDescripcionVentasService;
import com.sena.shoestore.IService.IVentasService;

@Service
public class VentasService extends ABaseService<Ventas> implements IVentasService{
    @Autowired
    private IVentasRepository repository;

    @Override
    protected IBaseRepository<Ventas, Long> getRepository(){
        return repository;
    }
    @Lazy
    private final IDescripcionVentasService ventasService;

    public VentasService(@Lazy IDescripcionVentasService ventasService, IVentasRepository repository) {
        this.repository = repository;
		this.ventasService = ventasService;
    }

    @Override
	public void delete(Long id) {
		repository.deleteById(id);
	}

}
