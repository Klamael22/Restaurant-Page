function pageLoadMenu() {
    const content = document.getElementById('content');
    const heading = document.createElement('h2');
    const pDiv = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    heading.innerHTML = 'Menu';
    p1.innerHTML = '<b>Lorem ipsum</b> dolor sit amet consectetur adipisicing elit. Voluptates corporis commodi, cupiditate nesciunt voluptate';
    p2.innerHTML = ' <b>est aliquam</b> tenetur iusto ratione. Nobis id expedita at in alias, molestias excepturi officia corrupti minus maiores quae'
    p3.innerHTML = '<b>eum quam debitis</b> enim eaque ut minima explicabo omnis quis quibusdam sed ipsum officiis. Dolore alias fugiat facere.';

   content.innerHTML = '';

    content.appendChild(heading);
    content.appendChild(pDiv);
    pDiv.appendChild(p1);
    pDiv.appendChild(p2);
    pDiv.appendChild(p3);
}

export{pageLoadMenu}