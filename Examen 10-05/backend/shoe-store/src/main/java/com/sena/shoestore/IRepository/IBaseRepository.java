package com.sena.shoestore.IRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sena.shoestore.Entity.ABaseEntity;

@Repository
public interface IBaseRepository<T extends ABaseEntity, ID> extends JpaRepository<T, Long>{
    
}
