package com.sena.shoestore.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.shoestore.IService.IEnumService;
import com.sena.shoestore.Utils.NomenclaturaEnum;
import com.sena.shoestore.Utils.TipoIdentificacionEnum;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("v1/api/enum")
public class EnumController {
    @Autowired
    public IEnumService service;

    @GetMapping("/tipo_identificacion")
    public TipoIdentificacionEnum[] getTipoDocumento(){
        return service.getTipoDocumento();
    }

    @GetMapping("/nomenclatura")
    public NomenclaturaEnum[] getNomenclatura(){
        return service.getNomenclatura();
    }
}
