// Ausgabe von Hallo Welt in der Konsole
console.log("Hallo Welt");

// Berechnung der Fakultät mittels rekursiver Methode
function faculty_rekursiv( n ) {
	// welchen Wert hat n? - wenn n gleich 1 ist, dann muessen wri 1 zurückgeben
	if (n == 1) {
		return 1;
	}
	
	// wenn n > 1, dann koennen wir das machen (fac aufrufen)
	return n * faculty_rekursiv( n  -  1 );
};

// Berechnung der Fakultät mittels Schleife
function faculty_schleife( zahl ) {
	var n = 1; // Zum hochzaehlen
	var m = 1; // Ergebnis (Fakultät)
	while ( n <= zahl ) {
	m = m * n;
	n = n + 1;
	console.log(m);
	}
	return m;
};

// Funktion zur Berechnung eines Quadrats
function sqr(x) {
	return x * x;
}


// Ausgabe diverser Dinge in der Konsole
i = 5
while(i<10) {
	i = i + 1;
	console.log(i)
};

x = 2;
n = 3;
zahl = 5;
console.log (sqr(x));
console.log (faculty_rekursiv(n));
console.log (faculty_schleife(zahl));

// ************************************************************* 
// ******************RECHNER AUF INDEX.html********************* 
// ************************************************************* 
// Funktion zum Berechnen der Fakultät
function faculty_uebung( eineZahl ) {
	var n = 1; // Zum hochzaehlen
	var m = 1; // Ergebnis (Fakultät)
	while ( n <= eineZahl ) {
	m = m * n;
	n = n + 1;
	console.log(m);
	}
	return m;
};

// Funktion zum auslesen/schreiben der Daten + Aufruf der Berechnungsfunktion
function ausrechnen() {
	var eingabe = document.getElementById("eingabe").value
	var ausgabe = faculty_uebung(eingabe)
	document.getElementById("ausgabe").value = ausgabe
}

// Aufruf der Funktion
document.getElementById("berechnen").addEventListener("click",ausrechnen)

// *************************************************************
// ************************************************************* 
// ************************************************************* 