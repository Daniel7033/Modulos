package com.sena.shoestore.IService;

import com.sena.shoestore.Entity.Cliente;

import java.util.List;
import java.util.Optional;

import com.sena.shoestore.DTO.IClienteDto;

public interface IClienteService extends IBaseService<Cliente>{
    List<IClienteDto> getFiltroNombre(String nombreCliente);
    List<IClienteDto> getFiltroCiudad(String ciudad);
    List<IClienteDto> getFiltroEstado(Boolean estado);
}
