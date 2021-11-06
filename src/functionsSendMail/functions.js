export const messageGen = data => {
    let msg = "";

    for (const item of data){
        msg += `Descripción ${(data.indexOf(item)) + 1} : ${data.proDescripcion}. `
    }

    return msg;
}

export const closeSession = () => {
    localStorage.removeItem('user');
    window.location.href = 'https://app-restaurante-reactjs.herokuapp.com/login';
}