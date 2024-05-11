package com.sena.shoestore.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.shoestore.Entity.OrdenCompra;
import com.sena.shoestore.IService.IOrdenCompraService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("v1/api/orden_compra")
public class OrdenCompraController extends ABaseController<OrdenCompra, IOrdenCompraService>{
    public OrdenCompraController (IOrdenCompraService service){
        super(service, "OrdenCompra");
    }
}
