async function getData() {
    try {
        const response = await fetch('https://api.spacexdata.com/v4/rockets');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Llamar a la función cuando se cargue la página
document.addEventListener('contenedor', getData);


//paginacion

let currentPage = 1;
const itemsPerPage = 5;

function paginate(data, page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
}



function renderPage(data, page) {
    const paginatedData = paginate(data, page);
    const container = document.getElementById('data-container');
    container.innerHTML = ''; // Limpiar el contenedor

    paginatedData.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <h2>${item.name}</h2>
            <p>Height: ${item.height.meters} meters</p>
            <p>Mass: ${item.mass.kg} kg</p>
            <p>Company: ${item.company}</p>
        `;
        container.appendChild(itemElement);
    });

    // Actualizar el número de página
    document.getElementById('page-number').textContent = Page ${page};
}

function setupPaginationControls(data) {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderPage(data, currentPage);
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderPage(data, currentPage);
        }
    });
}