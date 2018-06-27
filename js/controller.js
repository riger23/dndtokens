var tokens = [];

function generateTokens() {
    let imageUrl = document.getElementById('imageUrl').value;
    let amount = document.getElementById('amount').value;
    let sizeElement = document.getElementById('size');
    let size = sizeElement.options[sizeElement.selectedIndex].value;
    appendTokens(imageUrl, amount, size);
}

function appendTokens(imageUrl, amount, size) {
    let tokensSpace = document.getElementById('tokenSpace');
    for(var i = 0; i < amount; i++){
        let newToken = generateNewToken(imageUrl, size);
        tokensSpace.appendChild(newToken);
        tokens.push({imageUrl: imageUrl, amount: amount, size: size});
        console.log("tokens: " + tokens.length);
    }
}

function generateNewToken(imageUrl, size) {
    let sizeClass = "medium";
    switch (size){
        case 'large':
            sizeClass = "large"

    }
    let image = document.createElement('img');
    image.setAttribute('src', imageUrl);
    image.setAttribute('class', 'token-image');
    let tokenDiv = document.createElement('div');
    tokenDiv.setAttribute('class', 'token token-'+sizeClass);
    tokenDiv.appendChild(image);

    return tokenDiv;
}

function clearAndReset() {
    let tokenSpace = document.getElementById('tokenSpace');
    while (tokenSpace.firstChild){
        tokenSpace.removeChild(tokenSpace.firstChild);
    }
    let imageUrl = document.getElementById('imageUrl');
    imageUrl.value = "";
    let amount = document.getElementById('amount');
    amount.value = 1;
    let sizeElement = document.getElementById('size');
    sizeElement.selectedIndex = 0;
}

function printTokens() {
    window.print();
}

function saveLocally(){
    let text = tokens.map(function (token) {
        return JSON.stringify(token);
    }).join();
    
    var a = document.createElement("a");
    document.body.appendChild(a);

    a.style = "display: none";

    var json = text,
        blob = new Blob([text], {type: "text/plain;charset=utf-8"}),
        url = window.URL.createObjectURL(blob);

    a.href = url;
    a.download = "tokens.txt";
    a.click();
    window.URL.revokeObjectURL(url);


}

//TODO: Feature request: export to file
//TODO: Feature request: import to file
//TODO: Feature request: remove single tokens
