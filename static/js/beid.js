var AbbrMois = new Array(12);

AbbrMois[0] = new Array("JAN","01");
AbbrMois[1] = new Array("FEB", "FEV", "02");
AbbrMois[2] = new Array("MAAR", "MARS", "MÄR", "MAR", "03");
AbbrMois[3] = new Array("APR", "AVR", "04", "4");
AbbrMois[4] = new Array("MEI", "MAI", "MAI", "05");
AbbrMois[5] = new Array("JUN", "JUIN", "06");
AbbrMois[6] = new Array("JUL", "JUIL", "07");
AbbrMois[7] = new Array("AUG", "AOUT", "08");
AbbrMois[8] = new Array("SEP", "SEPT", "09");
AbbrMois[9] = new Array("OKT", "OCT", "10");
AbbrMois[10] = new Array("NOV", "11");
AbbrMois[11] = new Array("DEC", "DEC", "DEZ", "12");

function get_month_num(month_string) {
	for (var i = 0; i < 12; i++) {
    	regExp = new RegExp(AbbrMois[i].join("|"), "i");
        	if (regExp.test(month_string)) {
            	var month = (i + 1);
                break;
            }
        }
    return month;
}

function convert_beid_date(bd) {
	var reg = new RegExp("[ .]+", "g"); 	// Trouve les espaces ou les points de separation
	bdt = bd.split(reg) 				// separe jour, mois et annee
	bdt[1] = get_month_num(bdt[1]); 	// converti le nom du mois en son numero
	if (bdt[1]<10) {					// ajoute un zero devant le numero du mois si necessaire
		bdt[1] = "0" + bdt[1].toString();
	}
	return bdt.join("/"); 				// retourne la date convertie en chaine date pour django
}

  var keyStr = "ABCDEFGHIJKLMNOP" +
               "QRSTUVWXYZabcdef" +
               "ghijklmnopqrstuv" +
               "wxyz0123456789+/" +
               "=";

  function encode64(input) {
     input = escape(input);
     var output = "";
     var chr1, chr2, chr3 = "";
     var enc1, enc2, enc3, enc4 = "";
     var i = 0;

     do {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
           enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
           enc4 = 64;
        }

        output = output +
           keyStr.charAt(enc1) +
           keyStr.charAt(enc2) +
           keyStr.charAt(enc3) +
           keyStr.charAt(enc4);
        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";
     } while (i < input.length);

     return output;
  }