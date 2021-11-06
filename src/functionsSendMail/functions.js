export const messageGen = data => {
    var msg = "";

    for (let item of data){

        let keys = Object.keys(item);

        msg += `Artículo ${(datos.indexOf(item)) + 1}\n\n`

        for (let j = 0; j < keys.length; j++){
            if (keys[j] !== 'usuId' && keys[j] !== 'usuImagen'){
                msg += `${keys[j]} = ${item[keys[j]]}`;
                msg += `\n`;
            }
        }

        msg += `\n`;
    }
    return msg;
}