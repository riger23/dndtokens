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
    let downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', 'data:text/plain;charset=utf-u,'+encodeURIComponent(text));
    downloadAnchor.setAttribute('download', 'tokens.txt');
    downloadAnchor.click()
}

//TODO: Feature request: export to file
//TODO: Feature request: import to file
//TODO: Feature request: remove single tokens