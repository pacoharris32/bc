// baja_california_data.js

const stateAquifers = [

    {
        clave: "0201",
        nombre: "TIJUANA",
        dma: "-1.664020",
        dnc: "4.6",
        r: "19.5",
        veas: "16.564020",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0201.pdf"
    },
    {
        clave: "0202",
        nombre: "TECATE",
        dma: "1.335145",
        dnc: "0.0",
        r: "14.1",
        veas: "12.764855",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0202.pdf"
    },
    {
        clave: "0203",
        nombre: "EL DESCANSO",
        dma: "0.500911",
        dnc: "0.4",
        r: "2.7",
        veas: "1.799089",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0203.pdf"
    },
    {
        clave: "0204",
        nombre: "LOS MÉDANOS",
        dma: "0.487167",
        dnc: "0.1",
        r: "1.8",
        veas: "1.212833",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0204.pdf"
    },
    {
        clave: "0205",
        nombre: "LAS PALMAS",
        dma: "0.824781",
        dnc: "0.0",
        r: "11.2",
        veas: "10.375219",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0205.pdf"
    },
    {
        clave: "0206",
        nombre: "LA MISIÓN",
        dma: "0.471866",
        dnc: "0.3",
        r: "8.3",
        veas: "7.528134",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0206.pdf"
    },
    {
        clave: "0207",
        nombre: "GUADALUPE",
        dma: "-17.958130",
        dnc: "0.1",
        r: "18.8",
        veas: "36.658130",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0207.pdf"
    },
    {
        clave: "0208",
        nombre: "OJOS NEGROS",
        dma: "-4.434376",
        dnc: "0.0",
        r: "22.3",
        veas: "26.734376",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0208.pdf"
    },
    {
        clave: "0209",
        nombre: "LAGUNA SALADA",
        dma: "1.037084",
        dnc: "0.0",
        r: "17.8",
        veas: "16.762916",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0209.pdf"
    },
    {
        clave: "0210",
        nombre: "VALLE DE MEXICALI",
        dma: "-432.044272",
        dnc: "2.5",
        r: "520.5",
        veas: "950.044272",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0210.pdf"
    },
    {
        clave: "0211",
        nombre: "ENSENADA",
        dma: "-8.057320",
        dnc: "0.0",
        r: "3.7",
        veas: "11.757320",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0211.pdf"
    },
    {
        clave: "0212",
        nombre: "MANEADERO",
        dma: "-6.528785",
        dnc: "0.0",
        r: "33.8",
        veas: "40.328785",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0212.pdf"
    },
    {
        clave: "0213",
        nombre: "SANTO TOMÁS",
        dma: "-4.310128",
        dnc: "0.2",
        r: "6.5",
        veas: "10.610128",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0213.pdf"
    },
    {
        clave: "0214",
        nombre: "SAN VICENTE",
        dma: "3.249438",
        dnc: "1.4",
        r: "28.0",
        veas: "23.350562",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0214.pdf"
    },
    {
        clave: "0215",
        nombre: "CAÑÓN LA CALENTURA",
        dma: "-6.644887",
        dnc: "0.6",
        r: "9.9",
        veas: "15.944887",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0215.pdf"
    },
    {
        clave: "0216",
        nombre: "LA TRINIDAD",
        dma: "-4.930506",
        dnc: "0.0",
        r: "22.4",
        veas: "27.330506",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0216.pdf"
    },
    {
        clave: "0217",
        nombre: "SAN RAFAEL",
        dma: "-30.313671",
        dnc: "0.0",
        r: "12.4",
        veas: "42.713671",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0217.pdf"
    },
    {
        clave: "0218",
        nombre: "SAN TELMO",
        dma: "-13.716370",
        dnc: "0.0",
        r: "8.5",
        veas: "22.216370",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0218.pdf"
    },
    {
        clave: "0219",
        nombre: "CAMALÚ",
        dma: "-4.470989",
        dnc: "0.0",
        r: "7.8",
        veas: "12.270989",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0219.pdf"
    },
    {
        clave: "0220",
        nombre: "COLONIA VICENTE GUERRERO",
        dma: "-26.134311",
        dnc: "1.1",
        r: "15.6",
        veas: "40.634311",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0220.pdf"
    },
    {
        clave: "0221",
        nombre: "SAN QUINTÍN",
        dma: "-37.906838",
        dnc: "0.0",
        r: "24.3",
        veas: "62.206838",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0221.pdf"
    },
    {
        clave: "0222",
        nombre: "SAN FELIPE-PUNTA ESTRELLA",
        dma: "-1.850877",
        dnc: "5.0",
        r: "10.4",
        veas: "7.250877",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0222.pdf"
    },
    {
        clave: "0223",
        nombre: "VALLE CHICO-SAN PEDRO MÁRTIR",
        dma: "1.636462",
        dnc: "0.0",
        r: "13.8",
        veas: "12.163538",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0223.pdf"
    },
    {
        clave: "0224",
        nombre: "EL ROSARIO",
        dma: "0.392741",
        dnc: "0.2",
        r: "5.8",
        veas: "5.207259",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0224.pdf"
    },
    {
        clave: "0225",
        nombre: "BAHÍA DE SAN LUIS GONZAGA",
        dma: "3.404015",
        dnc: "2.0",
        r: "5.5",
        veas: "0.095985",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0225.pdf"
    },
    {
        clave: "0226",
        nombre: "BAHÍA DE LOS ÁNGELES",
        dma: "0.593835",
        dnc: "0.0",
        r: "1.1",
        veas: "0.506165",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0226.pdf"
    },
    {
        clave: "0227",
        nombre: "VILLA DE JESÚS MARÍA",
        dma: "0.370464",
        dnc: "0.1",
        r: "2.3",
        veas: "1.829536",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0227.pdf"
    },
    {
        clave: "0228",
        nombre: "LLANOS DEL BERRENDO",
        dma: "9.706767",
        dnc: "10.4",
        r: "21.1",
        veas: "0.993233",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0228.pdf"
    },
    {
        clave: "0229",
        nombre: "JAMAU",
        dma: "6.307175",
        dnc: "0.5",
        r: "6.9",
        veas: "0.092825",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0229.pdf"
    },
    {
        clave: "0230",
        nombre: "SAN FERNANDO-SAN AGUSTÍN",
        dma: "0.892315",
        dnc: "0.4",
        r: "3.0",
        veas: "1.707685",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0230.pdf"
    },
    {
        clave: "0231",
        nombre: "SANTA CATARINA",
        dma: "0.229861",
        dnc: "0.0",
        r: "0.7",
        veas: "0.470139",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0231.pdf"
    },
    {
        clave: "0232",
        nombre: "PUNTA CANOAS-SAN JOSÉ",
        dma: "0.311671",
        dnc: "0.0",
        r: "0.7",
        veas: "0.388329",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0232.pdf"
    },
    {
        clave: "0233",
        nombre: "LAGUNA DE CHAPALA",
        dma: "0.584998",
        dnc: "0.6",
        r: "1.2",
        veas: "0.015002",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0233.pdf"
    },
    {
        clave: "0234",
        nombre: "LA BACHATA-SANTA ROSALITA",
        dma: "0.359291",
        dnc: "0.0",
        r: "0.5",
        veas: "0.140709",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0234.pdf"
    },
    {
        clave: "0235",
        nombre: "NUEVO ROSARITO",
        dma: "4.422622",
        dnc: "0.3",
        r: "5.2",
        veas: "0.477378",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0235.pdf"
    },
    {
        clave: "0236",
        nombre: "LA RUMOROSA-TECATE",
        dma: "1.088671",
        dnc: "0.0",
        r: "1.8",
        veas: "0.711329",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0236.pdf"
    },
    {
        clave: "0237",
        nombre: "EL CHINERO",
        dma: "1.520579",
        dnc: "0.2",
        r: "4.1",
        veas: "2.379421",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0237.pdf"
    },
    {
        clave: "0238",
        nombre: "MATOMI-PUERTECITOS",
        dma: "1.467333",
        dnc: "3.3",
        r: "4.8",
        veas: "0.032667",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0238.pdf"
    },
    {
        clave: "0239",
        nombre: "EL HUERFANITO",
        dma: "0.498175",
        dnc: "0.0",
        r: "0.5",
        veas: "0.001825",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0239.pdf"
    },
  {
        clave: "0240",
        nombre: "CALAMAJUÉ",
        dma: "0.100000",
        dnc: "0.0",
        r: "0.1",
        veas: "0.000000",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0240.pdf"
    },
    {
        clave: "0241",
        nombre: "AGUA AMARGA",
        dma: "0.889374",
        dnc: "0.0",
        r: "0.9",
        veas: "0.010626",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0241.pdf"
    },
    {
        clave: "0242",
        nombre: "LA BOCANA-LLANOS DE SAN PEDRO",
        dma: "4.091240",
        dnc: "0.7",
        r: "4.8",
        veas: "0.008760",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0242.pdf"
    },
    {
        clave: "0243",
        nombre: "SAN RAFAEL-LA PALMA",
        dma: "0.594269",
        dnc: "0.4",
        r: "1.0",
        veas: "0.005731",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0243.pdf"
    },
    {
        clave: "0244",
        nombre: "EL PROGRESO-EL BARRIL",
        dma: "1.851836",
        dnc: "0.5",
        r: "2.4",
        veas: "0.048164",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0244.pdf"
    },
    {
        clave: "0245",
        nombre: "ROSARITO",
        dma: "0.733276",
        dnc: "0.5",
        r: "6.2",
        veas: "4.966724",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0245.pdf"
    },
    {
        clave: "0246",
        nombre: "SAN SIMÓN",
        dma: "-2.331355",
        dnc: "3.3",
        r: "27.2",
        veas: "26.231355",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0246.pdf"
    },
    {
        clave: "0247",
        nombre: "EL SOCORRO",
        dma: "0.584412",
        dnc: "0.2",
        r: "1.9",
        veas: "1.115588",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0247.pdf"
    },
    {
        clave: "0248",
        nombre: "REAL DEL CASTILLO",
        dma: "1.069333",
        dnc: "0.0",
        r: "11.7",
        veas: "10.630667",
        pdf: "https://sigagis.conagua.gob.mx/gas1/Edos_Acuiferos_18/BajaCalifornia/DR_0248.pdf"
    }
];

function generateAquiferAccordionPanels() {
    const accordion = document.getElementById('aquiferAccordion');

    stateAquifers.forEach(aquifer => {
        const panelDiv = document.createElement('div');
        panelDiv.classList.add('AccordionPanel');

        const panelTab = document.createElement('div');
        panelTab.classList.add('AccordionPanelTab');
        panelTab.textContent = `${aquifer.clave} ${aquifer.nombre}`;
        panelDiv.appendChild(panelTab);

        const panelContent = document.createElement('div');
        panelContent.classList.add('AccordionPanelContent');

        const table = document.createElement('table');
        table.setAttribute('width', '100%');
        table.setAttribute('border', '0');

        table.innerHTML = `
            <tr>
                <td colspan="2">&nbsp;</td>
            </tr>
            <tr>
                <td align="left">DMA* / ** :</td>
                <td align="left" valign="middle">${aquifer.dma} hm<sup>3</sup>/año</td>
            </tr>
            <tr>
                <td align="left">DNC*** :</td>
                <td align="left" valign="middle">${aquifer.dnc} hm<sup>3</sup>anuales</td>
            </tr>
            <tr>
                <td align="left">R**** :</td>
                <td align="left" valign="middle">${aquifer.r} hm<sup>3</sup>/año</td>
            </tr>
            <tr>
                <td align="left">VEAS***** :</td>
                <td align="left" valign="middle">${aquifer.veas} hm<sup>3</sup>anuales</td>
            </tr>
            <tr>
                <td align="left">PDF :</td>
                <td align="left" valign="middle"><a href="${aquifer.pdf}" target="_new">Documento</a></td>
            </tr>
        `;
        panelContent.appendChild(table);
        panelDiv.appendChild(panelContent);
        accordion.appendChild(panelDiv);
    });
}

// Llama a la función para generar los paneles cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', generateAquiferAccordionPanels);