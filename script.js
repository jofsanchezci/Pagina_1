document.addEventListener('DOMContentLoaded', function() {
    // Datos de la simulación del modelo
    var trace1 = {
        x: [1, 2, 3, 4, 5],
        y: [10, 15, 13, 17, 22],
        mode: 'lines+markers',
        type: 'scatter'
    };

    var data = [trace1];

    var layout = {
        title: 'Simulación de Modelo Matemático',
        xaxis: {
            title: 'X Axis'
        },
        yaxis: {
            title: 'Y Axis'
        }
    };

    Plotly.newPlot('plot', data, layout);
});
