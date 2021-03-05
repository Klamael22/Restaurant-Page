function pageLoadHome() {
    const content = document.getElementById('content');
    const heading = document.createElement('h2');
    const image = document.createElement('img');
    const pDiv = document.createElement('div');
    const p = document.createElement('p');

    heading.innerHTML = 'Chicken Tikka Masala\'s!';
    image.src = 'https://cafedelites.com/wp-content/uploads/2018/04/Best-Chicken-Tikka-Masala-IMAGE-1-1024x1536.jpg';
    p.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis commodi, cupiditate nesciunt voluptate est aliquam tenetur iusto ratione. Nobis id expedita at in alias, molestias excepturi officia                         corrupti minus maiores quae eum quam debitis enim eaque ut minima explicabo omnis quis quibusdam sed ipsum officiis. Dolore alias fugiat facere.';

    content.innerHTML = '';
    
    content.appendChild(heading);
    content.appendChild(image);
    content.appendChild(pDiv);
    pDiv.appendChild(p);
}

export{pageLoadHome}