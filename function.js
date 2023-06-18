async function getCountries() {
  const url = "https://restcountries.com/v3.1/all";
  const rp = await fetch(url);
  const rs = await rp.json();
  console.log(rs);
  var txt = "";
  rs.forEach((e) => {
    txt += `<div class="card">
		<div><img src='${e.flags.png}'></div>
		<div class="card-body">
		  <h3>${e.name.official}</h3>
		  <p><b>Country Code:</b>
		  	<span>${e.cca2}</span>,<span>${e.cca3}</span> </p>	
	  	  <p>
			${e.name.nativeName}
		  </p>
		  <p><b>Alternative Country Name:</b>
			  <span>${e.altSpellings}</span>
			</p>
		  <p><b>Country Calling Code:</b>
		  <span>${e.idd.root}</span> </p>
		</div>
	  </div>`;
  });
  document.getElementById(
    "country-container"
  ).innerHTML = `<div class=main-cards>${txt}</div>`;
}
getCountries();
