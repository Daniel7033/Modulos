package com.sena.shoestore.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.shoestore.Entity.DescripcionVentas;
import com.sena.shoestore.IService.IDescripcionVentasService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("v1/api/descripcion_ventas")
public class DescripcionVentasController extends ABaseController<DescripcionVentas, IDescripcionVentasService>{
    public DescripcionVentasController (IDescripcionVentasService service){
        super(service, "DescripcionVentas");
    }
}
