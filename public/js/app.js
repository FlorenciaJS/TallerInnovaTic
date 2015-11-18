var listarBarrios = function(){
	//Instanciamos el objeto XMLHttpRequest en la variable xhr
	var xhr = new XMLHttpRequest();

	//Realizamos una petición pasando como parámetros el método get, la url del recurso y true para que realice la petición de manera asíncrona
	xhr.open('GET','http://190.255.52.99:6080/arcgis/rest/services/ServiciosVisor/Gobernacion/MapServer/2/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson',true);
	xhr.send(null);

	// Cuando el estado de la petición cambia, se ejecuta la siguiente función:
	xhr.onreadystatechange = function(){
		// Si el estado de la petición es 4 (COMPLETED)
		if(xhr.readyState == 4){

			// Asignamos la respuesta del servidor a la variable barrios
			var barrios = xhr.responseText;
			// Convertimos la variable en un Objeto de tipo JSON
			barrios = JSON.parse(barrios).features;

			//Recorremos el objeto JSON y en cada iteración accedemos a la propiedad nombre y la imprimimos en el elemento lista
			for (var i = 0; i <= barrios.length -1; i++) {
				document.getElementById('lista').innerHTML += "<li>" + barrios[i].attributes.nombre + "</li></br>";
			}
		} 
	}
}