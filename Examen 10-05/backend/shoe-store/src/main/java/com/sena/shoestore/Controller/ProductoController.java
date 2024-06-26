package com.sena.shoestore.Controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.shoestore.DTO.ApiResponseDto;
import com.sena.shoestore.Entity.Producto;
import com.sena.shoestore.IService.IProductoService;
import com.sena.shoestore.DTO.IProductoDto;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("v1/api/producto")
public class ProductoController extends ABaseController<Producto, IProductoService>{
    public ProductoController (IProductoService service){
        super(service, "Producto");
    }
    @GetMapping("/dashboard")
    public ResponseEntity<ApiResponseDto<List<IProductoDto>>> show(){
			try{
				return ResponseEntity.ok(new ApiResponseDto<List<IProductoDto>>("Datos obtenidos", service.getList(), true));
			} catch (Exception e){
				return ResponseEntity.internalServerError().body(new ApiResponseDto<List<IProductoDto>>(e.getMessage(), null, false));
			}
	}
}
