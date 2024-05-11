package com.sena.shoestore.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.shoestore.DTO.ApiResponseDto;
import com.sena.shoestore.DTO.IClienteDto;
import com.sena.shoestore.DTO.IDescripcionVentasDto;
import com.sena.shoestore.Entity.DescripcionVentas;
import com.sena.shoestore.IService.IDescripcionVentasService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("v1/api/descripcion_ventas")
public class DescripcionVentasController extends ABaseController<DescripcionVentas, IDescripcionVentasService>{
    public DescripcionVentasController (IDescripcionVentasService service){
        super(service, "DescripcionVentas");
    }

    //Tristemente, indefine el id y el frontend no lo lee como Long
    @GetMapping("{id}")
    public ResponseEntity<ApiResponseDto<Optional<DescripcionVentas>>> show(@PathVariable Long id){
        try {
            Optional<DescripcionVentas> entity = service.findById(id);
            return ResponseEntity.ok(new ApiResponseDto<Optional<DescripcionVentas>>("Registro encontrado", entity, true));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(new ApiResponseDto<Optional<DescripcionVentas>>(e.getMessage(), null, false));
        }
    }
}
