package com.sena.shoestore.IService;

import java.util.List;

import com.sena.shoestore.DTO.IProductoDto;
import com.sena.shoestore.Entity.Producto;

public interface IProductoService extends IBaseService<Producto>{
    List<IProductoDto> getList() throws Exception;
}
