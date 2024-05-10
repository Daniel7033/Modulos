package com.sena.shoestore.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.shoestore.Entity.Cliente;
import com.sena.shoestore.IRepository.IBaseRepository;
import com.sena.shoestore.IRepository.IClienteRepository;
import com.sena.shoestore.IService.IClienteService;

@Service
public class ClienteService extends ABaseService<Cliente> implements IClienteService{
    @Autowired
    private IClienteRepository repository;

    @Override
    protected IBaseRepository<Cliente, Long> getRepository(){
        return repository;
    }
    @Override
	public void delete(Long id) {
		repository.deleteById(id);
	}
}
