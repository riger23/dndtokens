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
    tokens.push({imageUrl: imageUrl, amount: amount, size: size});
    for(var i = 0; i < amount; i++){
        let newToken = generateNewToken(imageUrl, size);
        tokensSpace.appendChild(newToken);
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
    tokens = [];
    removeTokens();
    let imageUrl = document.getElementById('imageUrl');
    imageUrl.value = "";
    let amount = document.getElementById('amount');
    amount.value = 1;
    let sizeElement = document.getElementById('size');
    sizeElement.selectedIndex = 0;
    clearInput();
}

function printTokens() {
    window.print();
}

function saveLocally(){
    let text = JSON.stringify(tokens);

    var a = document.createElement("a");
    document.body.appendChild(a);

    a.style = "display: none";

    var blob = new Blob([text], {type: "text/plain;charset=utf-8"}),
        url = window.URL.createObjectURL(blob);

    a.href = url;
    a.download = "tokens.txt";
    a.click();
    window.URL.revokeObjectURL(url);
}

function triggerImport() {
    let importField = document.getElementById("importTokenField");
    importField.click();
}

function importTokens(event){
    let input = event.target;
    let fileReader = new FileReader();
    fileReader.onload = function () {
        let text = fileReader.result;
        let storedTokens = JSON.parse(text);
        removeTokens();
        for(var i = 0; i < storedTokens.length; i++){
            appendTokens(storedTokens[i].imageUrl, storedTokens[i].amount, storedTokens[i].size);
        }
    };
    fileReader.readAsText(input.files[0]);
    clearInput();
}

function removeTokens() {
    let tokenSpace = document.getElementById('tokenSpace');
    while (tokenSpace.firstChild){
        tokenSpace.removeChild(tokenSpace.firstChild);
    }
}

function clearInput(){
    let importTokenField = document.getElementById('importTokenField');
    importTokenField.value = "";
}

//TODO: Feature request: remove single tokens
