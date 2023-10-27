function func() {
    let elements = document.getElementsByName('select');
    let checkValue = '';
    for(let i = 0 ; i < elements.length ; i++){
        if(elements.item(i).checked){
            checkValue = elements.item(i).value;
        }        
    }
    switch (checkValue) {
        case "Google":
            document.url.action = "https://www.google.co.jp/search";
            break;
        case "Images":
            document.url.action = "https://www.bing.com/images/search";
            break;
        case "YouTube":
            document.url.action = "https://www.youtube.com/results?search_query=";
            break;
        case "Map":
            document.url.action = "https://www.google.co.jp/maps/place/";
            break;
        default:
            break;
    }    
    document.url.submit();
}
