import emailjs from 'emailjs-com';

export const messageGen = data => {
    let msg = "";

    for (const item of data){
        msg += `Descripción ${(data.indexOf(item)) + 1} : ${item.proDescripcion}. `
    }

    return msg;
}

export const closeSession = () => {
    localStorage.removeItem('user');
    window.location.href = 'https://app-restaurante-reactjs.herokuapp.com/login';
}

 export const sendClient = (msg, usuEmail, usuNom) => {
    let paramsClient = {
        email_to: usuEmail,
        to_name: usuNom,
        message: msg
    }
    emailjs.send('service_qs3gule', 'template_ot1nw2j', paramsClient, 'user_cPmC9gX7RVOp4a3jo6Fb9');
}

export const sendManage = msg => {
    let paramsManage = {
        to_name: 'Gerente',
        message: msg
    }
    emailjs.send('service_qs3gule', 'template_x3nlju8', paramsManage, 'user_cPmC9gX7RVOp4a3jo6Fb9');
}