
 export const  widget = ()=>{

    const sign=(mod)=>{
        console.log(mod)
        var sign
        switch (mod) {
            case '1':
            return sign='Km/h';
            case '2':
            return sign='%';
            case '3':
            return sign='°C';
            case '4':
            return sign='°C';
            default:
            return sign=' -- '; 
          }
          
    }

    return{
        sign
    }
}