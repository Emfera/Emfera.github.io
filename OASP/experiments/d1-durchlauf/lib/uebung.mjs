import{writePolygonShp as l,writeDbf as m}from"../../r1-bda-mpoly/lib/shapefile.mjs";import{zipStore as p}from"../../r1-bda-mpoly/lib/zip.mjs";import{MPOLY as h}from"../../r1-bda-mpoly/lib/vorlage.mjs";const f={\u00E4:228,\u00F6:246,\u00FC:252,\u00C4:196,\u00D6:214,\u00DC:220,\u00DF:223,"\xA7":167,"\u2013":150,"\u201E":132,"\u201C":147},E=a=>"("+[...a].map(e=>e==="("||e===")"||e==="\\"?"\\"+e:e.charCodeAt(0)<128?e:"\\"+(f[e]??63).toString(8).padStart(3,"0")).join("")+")";function M(a){const e=[],t=n=>(e.push(n),e.length);t("<< /Type /Catalog /Pages 2 0 R >>"),t("PAGES"),t("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>");const s=[];for(const n of a){const o=`BT /F1 10 Tf 56 790 Td 13 TL
`+n.map(g=>E(g)+" '").join(`
`)+`
ET`,u=t(`<< /Length ${o.length} >>
stream
${o}
endstream`);s.push(t(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R >> >> /Contents ${u} 0 R >>`))}e[1]=`<< /Type /Pages /Kids [${s.map(n=>n+" 0 R").join(" ")}] /Count ${s.length} >>`;let r=`%PDF-1.4
`;const i=[];e.forEach((n,o)=>{i.push(r.length),r+=`${o+1} 0 obj
${n}
endobj
`});const d=r.length;return r+=`xref
0 ${e.length+1}
0000000000 65535 f 
`+i.map(n=>String(n).padStart(10,"0")+` 00000 n 
`).join("")+`trailer
<< /Size ${e.length+1} /Root 1 0 R >>
startxref
${d}
%%EOF
`,Uint8Array.from(r,n=>n.charCodeAt(0)&255)}const c=[["Bundesdenkmalamt \u2013 Abteilung f\xFCr Arch\xE4ologie","Gesch\xE4ftszahl: GZ 2026-0.123.456","Musterhausen am See, K\xE4rnten, H\xF6hensiedlung am Testberg, KG Musterdorf, Grundst\xFCcke Nr. 12/1 und 13","(Ma\xDFnahme Nr. 72199.26.01), Verfahren gem\xE4\xDF \xA7 10 Abs. 1 Denkmalschutzgesetz","Bescheid","Mit Schreiben vom 20.10.2026 hat Dr. Hans Beispiel um Erteilung der Bewilligung zur Durchf\xFChrung einer","Nachforschung nach arch\xE4ologischen Denkmalen an Ort und Stelle durch eine arch\xE4ologische Grabung, also durch","Ver\xE4nderungen der Erd-","oberfl\xE4che, im Gebiet H\xF6hensiedlung am Testberg, auf den Grundst\xFCcken Nr. 12/1 und 13, EZ 7, KG Musterdorf,","Gemeinde Musterhausen am See, politischer Bezirk Testbezirk, K\xE4rnten, angesucht."],["Spruch","Dem Antrag wird stattgegeben \u2026 in der Zeit vom 2.11.2026 bis 30.11.2026, gem\xE4\xDF \xA7 10 Abs. 1 DMSG, unter der","Leitung der Nachforschung durch Mag. Erika Muster, Teststra\xDFe 1, 9000 Testort und der Fundverwahrung erteilt."]],x=[[[[60400,165230],[60400,165260],[60440,165260],[60440,165230],[60400,165230]],[[60410,165240],[60420,165240],[60420,165245],[60410,165245],[60410,165240]]]];function P(a,e){const t=a(e["EPSG:31255"],e["EPSG:31287"]),s=x.map(n=>n.map(o=>o.map(u=>t.forward(u)))),{shp:r,shx:i}=l([s]),{dbf:d}=m(h.fields,[{id:1,Gemeinde:"Musterhausen am See",KGname:"Musterdorf",Mnr:"72199.26.01",Mnart:"G",Fundart:"Siedlung",Datierung:"Eisenzeit",SE:0,GstNrBEF:"12/1",Erhaltung:"B",Area:1150}]);return p([{name:"MPoly_72199.26.01.shp",data:r},{name:"MPoly_72199.26.01.shx",data:i},{name:"MPoly_72199.26.01.dbf",data:d},{name:"MPoly_72199.26.01.prj",data:new TextEncoder().encode(h.prj)},{name:"MPoly_72199.26.01.cpg",data:new TextEncoder().encode("UTF-8")}])}const T=`Point,Easting,Northing,Elevation
FP1,60395.512,165225.104,512.331
FP2,60450.020,165228.771,513.004
FP3,60445.250,165270.330,
`,B=[["\xDCBUNGSUNTERLAGE \u2013 erfunden, kein Bescheid des Bundesdenkmalamtes",...c[0]],c[1]];export{c as BESCHEID,x as FLAECHE_GK,T as FP_CSV,B as UEBUNG_BESCHEID,M as pdfAusZeilen,P as shapeZipLambert};