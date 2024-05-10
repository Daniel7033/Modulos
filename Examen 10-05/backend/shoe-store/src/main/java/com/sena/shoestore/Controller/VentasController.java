package com.sena.shoestore.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.shoestore.Entity.Ventas;
import com.sena.shoestore.IService.IVentasService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("v1/api/ventas")
public class VentasController extends ABaseController<Ventas, IVentasService>{
    public VentasController (IVentasService service){
        super(service, "Ventas");
    }
}
