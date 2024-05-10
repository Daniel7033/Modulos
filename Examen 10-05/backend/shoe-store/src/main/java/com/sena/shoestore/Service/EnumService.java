package com.sena.shoestore.Service;

import org.springframework.stereotype.Service;

import com.sena.shoestore.IService.IEnumService;
import com.sena.shoestore.Utils.NomenclaturaEnum;
import com.sena.shoestore.Utils.TipoIdentificacionEnum;

@Service
public class EnumService implements IEnumService{
    @Override
    public TipoIdentificacionEnum[] getTipoDocumento(){
        return TipoIdentificacionEnum.values();
    }
    
    @Override
    public NomenclaturaEnum[] getNomenclatura(){
        return NomenclaturaEnum.values();
    }

    
}
