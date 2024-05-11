package com.sena.shoestore.IService;

import java.util.List;
import java.util.Optional;

import com.sena.shoestore.DTO.IDescripcionVentasDto;
import com.sena.shoestore.Entity.DescripcionVentas;

public interface IDescripcionVentasService extends IBaseService<DescripcionVentas>{
    Optional<DescripcionVentas> getDescripcion(Long id);
}
