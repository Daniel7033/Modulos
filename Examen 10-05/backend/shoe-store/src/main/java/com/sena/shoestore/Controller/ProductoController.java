package com.sena.shoestore.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.shoestore.Entity.Producto;
import com.sena.shoestore.IService.IProductoService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("v1/api/producto")
public class ProductoController extends ABaseController<Producto, IProductoService>{
    public ProductoController (IProductoService service){
        super(service, "Producto");
    }
}
