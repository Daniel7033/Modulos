package com.sena.shoestore.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.shoestore.Entity.DetalleCompra;
import com.sena.shoestore.IService.IDetalleCompraService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("v1/api/detalle_compra")
public class DetalleCompraController extends ABaseController<DetalleCompra, IDetalleCompraService>{
    public DetalleCompraController (IDetalleCompraService service){
        super(service, "DetalleCompra");
    }
}
