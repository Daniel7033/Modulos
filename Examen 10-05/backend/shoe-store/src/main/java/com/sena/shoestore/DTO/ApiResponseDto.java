package com.sena.shoestore.DTO;

public class ApiResponseDto<T> {
    private Boolean status;
    private T data;
    private String message;
    
    /* Constructor generico */
    public ApiResponseDto() {
    }

    /* Constructor con parametros*/
    public ApiResponseDto(String message, T data, Boolean status) {
        this.message = message;
        this.data = data;
        this.status = status;
    }

    /* Encapsulamiento Getter y Setter */
    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    
    
}
