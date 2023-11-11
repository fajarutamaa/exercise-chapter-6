function ResponseTemplate(data, message, status, error){
    return{
        data,
        message,
        status, 
        error,
    }
}

module.exports ={
    ResponseTemplate
}