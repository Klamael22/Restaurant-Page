function pageLoadContact() {
    const content = document.getElementById('content');
    const heading = document.createElement('h2');
    const pDiv = document.createElement('div');
    const p = document.createElement('p');

    heading.innerHTML = 'Contact us!';
    p.innerHTML = 'Call us at: 999-888-7777<br>Email us at: ouremail@chickentikkamasala.com';

    content.innerHTML = '';

    content.appendChild(heading);
    content.appendChild(pDiv);
    pDiv.appendChild(p);
}

export{pageLoadContact}