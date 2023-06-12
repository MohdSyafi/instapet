
const utils = ()=>{

    const baseURL = process.env.REACT_APP_API_ENDPOINT;

    const swalCustomClass = 
    {
            popup: 'swalCustPopup',
            confirmButton: 'swalCustConfirmBtn',
            title:'swalCustTitle',
            htmlContainer:'swalCustHtmlContainer',
    };

    function GetSwalCustomClass (){

        return swalCustomClass;
    }

    function GetApiUrl(){
        return baseURL;
    }

    return{
        GetSwalCustomClass,
        GetApiUrl
    }
}

export default utils;