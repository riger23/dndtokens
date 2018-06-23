function generateTokens() {
    let imageUrl = document.getElementById('imageUrl').value;
    let amount = document.getElementById('amount').value;
    let sizeElement = document.getElementById('size');
    let size = sizeElement.options[sizeElement.selectedIndex].value;
    console.log("Should generate tokens from "+imageUrl+ " " + amount + " times and size " + size);
    appendTokens(imageUrl, amount, size);
}

function appendTokens(imageUrl, amount, size) {
    let tokensSpace = document.getElementById('tokenSpace');
    for(var i = 0; i < amount; i++){
        let newToken = generateNewToken(imageUrl, size);
        tokensSpace.appendChild(newToken);
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

//TODO: Feature request: export to file
//TODO: Feature request: import to file
//TODO: Feature request: remove single tokens