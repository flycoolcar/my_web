function ajax(url,sucess,error) {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function (param) {
        // console.log('ajax成功！', xmlhttp.readyState, 'status', xmlhttp.status);
        if (xmlhttp.readyState == 4) {

            if (xmlhttp.status == 200 || xmlhttp.status == 304) {
                // console.log(xmlhttp.responseText);
                sucess(xmlhttp);

            } else {
                console.log('错误响应');
            }

        }
    }
}