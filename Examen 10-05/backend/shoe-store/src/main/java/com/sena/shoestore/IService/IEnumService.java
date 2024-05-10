package com.sena.shoestore.IService;

import com.sena.shoestore.Utils.NomenclaturaEnum;
import com.sena.shoestore.Utils.TipoIdentificacionEnum;

public interface IEnumService {
    TipoIdentificacionEnum[] getTipoDocumento();

    NomenclaturaEnum[] getNomenclatura();
}
