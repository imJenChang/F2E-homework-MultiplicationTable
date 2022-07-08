let table = document.querySelector('#table');

for(let i=2;i<10;i++) {
    let contentBox = document.createElement('div');
    contentBox.setAttribute('class','contentBox');
    table.appendChild(contentBox);

    let contentNumTitle = document.createElement('div');
    contentNumTitle.textContent = i;
    contentNumTitle.setAttribute('class','contentNumTitle');
    contentBox.appendChild(contentNumTitle); 
    
    for(let j=1; j<10; j++){
        let contentNum = document.createElement('div');
        contentNum.setAttribute('class','contentNum');
        let str = '';
        str += `${i} x ${j} = ${i * j}`;
        contentNum.textContent = str;
        contentBox.appendChild(contentNum); 
    }
}

