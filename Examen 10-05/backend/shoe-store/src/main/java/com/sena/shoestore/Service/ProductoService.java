package com.sena.shoestore.Service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.shoestore.DTO.IProductoDto;
import com.sena.shoestore.Entity.Producto;
import com.sena.shoestore.IRepository.IBaseRepository;
import com.sena.shoestore.IRepository.IProductoRepository;
import com.sena.shoestore.IService.IProductoService;

@Service
public class ProductoService extends ABaseService<Producto> implements IProductoService{
    @Autowired
    private IProductoRepository repository;

    @Override
    protected IBaseRepository<Producto, Long> getRepository(){
        return repository;
    }

    @Override
	public void delete(Long id) {
		repository.deleteById(id);
	}

    @Override
    public List<IProductoDto> getList() throws Exception {
        return repository.getList();
    }
}
