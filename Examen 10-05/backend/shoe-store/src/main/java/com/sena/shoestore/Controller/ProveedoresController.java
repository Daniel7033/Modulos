package com.sena.shoestore.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.shoestore.Entity.Proveedores;
import com.sena.shoestore.IService.IProveedoresService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("v1/api/proveedores")
public class ProveedoresController extends ABaseController<Proveedores, IProveedoresService>{
    public ProveedoresController (IProveedoresService service){
        super(service, "Proveedores");
    }
}
