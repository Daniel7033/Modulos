package com.sena.shoestore.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.shoestore.DTO.IClienteDto;
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
    @Override
    public List<IClienteDto> getFiltroNombre(String nombreCliente) {
        return repository.getFiltroNombre(nombreCliente);
    }
    @Override
    public List<IClienteDto> getFiltroCiudad(String ciudad) {
        return repository.getFiltroCiudad(ciudad);
    }
    @Override
    public List<IClienteDto> getFiltroEstado(Boolean estado) {
        return repository.getFiltroEstado(estado);
    }

    
}
