

// Variável para controlar a ordem de classificação
var priceSortOrder = 0; // 0 para crescente, 1 para decrescente

// Função para ordenar a tabela por preço
function sortTable(column) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.querySelector(".table");
    switching = true;

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;

            x = rows[i].getElementsByTagName("td")[2]; // Coluna de preço
            y = rows[i + 1].getElementsByTagName("td")[2];

            if (x && y) {
                var xPrice = parseFloat(x.innerText.replace('$', '').replace(',', ''));
                var yPrice = parseFloat(y.innerText.replace('$', '').replace(',', ''));

                if (priceSortOrder === 0) {
                    if (xPrice > yPrice) {
                        shouldSwitch = true;
                        break;
                    }
                } else {
                    if (xPrice < yPrice) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }

    // Alternar a ordem de classificação
    priceSortOrder = 1 - priceSortOrder;
    updatePriceSortIndicator();
}

// Atualizar o indicador de ordem de classificação
function updatePriceSortIndicator() {
    var priceSortIndicator = document.getElementById("price-sort");
    if (priceSortOrder === 0) {
        priceSortIndicator.innerHTML = " &#x2193;"; // Seta para baixo
    } else {
        priceSortIndicator.innerHTML = " &#x2191;"; // Seta para cima
    }
}

document.getElementById("search").addEventListener("keyup", function () {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.querySelector(".table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
});

// Inicializar o indicador de ordem de classificação
updatePriceSortIndicator();


