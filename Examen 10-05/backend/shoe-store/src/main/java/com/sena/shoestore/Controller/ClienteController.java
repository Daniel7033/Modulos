package com.sena.shoestore.Controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.shoestore.DTO.ApiResponseDto;
import com.sena.shoestore.DTO.IClienteDto;
import com.sena.shoestore.Entity.Cliente;
import com.sena.shoestore.IService.IClienteService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("v1/api/cliente")
public class ClienteController extends ABaseController<Cliente, IClienteService>{
    public ClienteController (IClienteService service){
        super(service, "Cliente");
    }
    @GetMapping("/nombre/{nombreCliente}")
    public ResponseEntity<ApiResponseDto<List<IClienteDto>>> show(@PathVariable String nombreCliente){
			try{
                List<IClienteDto> entity = service.getFiltroNombre(nombreCliente);
				return ResponseEntity.ok(new ApiResponseDto<List<IClienteDto>>("Datos obtenidos", entity, true));
			} catch (Exception e){
				return ResponseEntity.internalServerError().body(new ApiResponseDto<List<IClienteDto>>(e.getMessage(), null, false));
			}
	}
    @GetMapping("/ciudad/{ciudad}")
    public ResponseEntity<ApiResponseDto<List<IClienteDto>>> showEntity(@PathVariable String ciudad){
			try{
                List<IClienteDto> entity = service.getFiltroCiudad(ciudad);
				return ResponseEntity.ok(new ApiResponseDto<List<IClienteDto>>("Datos obtenidos", entity, true));
			} catch (Exception e){
				return ResponseEntity.internalServerError().body(new ApiResponseDto<List<IClienteDto>>(e.getMessage(), null, false));
			}
	}

    @GetMapping("/estado/{estado}")
    public ResponseEntity<ApiResponseDto<List<IClienteDto>>> show(@PathVariable Boolean estado){
			try{
                List<IClienteDto> entity = service.getFiltroEstado(estado);
				return ResponseEntity.ok(new ApiResponseDto<List<IClienteDto>>("Datos obtenidos", entity, true));
			} catch (Exception e){
				return ResponseEntity.internalServerError().body(new ApiResponseDto<List<IClienteDto>>(e.getMessage(), null, false));
			}
	}
}
