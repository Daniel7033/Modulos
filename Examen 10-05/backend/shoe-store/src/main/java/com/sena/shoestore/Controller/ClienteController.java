package com.sena.shoestore.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.shoestore.Entity.Cliente;
import com.sena.shoestore.IService.IClienteService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("v1/api/cliente")
public class ClienteController extends ABaseController<Cliente, IClienteService>{
    public ClienteController (IClienteService service){
        super(service, "Cliente");
    }
}
