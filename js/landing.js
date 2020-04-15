function changeService()
{
	var service_select_element = document.getElementById("service");
    var service_select = service_select_element.options[service_select_element.selectedIndex].value;
	
	document.getElementById("translate-panel").style.display = "none";
	document.getElementById("article-panel").style.display = "none";
	document.getElementById("resume-panel").style.display = "none";
	
	if (service_select == "translate")
	{
		document.getElementById("translate-panel").style.display = "";
	}
	else if (service_select == "seo-article" || service_select == "pro-article" || service_select == "subject-research")
	{
		document.getElementById("article-panel").style.display = "";
	}
	else if (service_select == "resume-writing")
	{
		document.getElementById("resume-panel").style.display = "";
	}
}

function changeWordsCount()
{
	var words_select_element = document.getElementById("words");
    var words_value = words_select_element.options[words_select_element.selectedIndex].value;
	
	var min_value = Math.floor(words_value / 801) + 1;
	
	var daysList = document.getElementById("days");
	// clear all options
	daysList.innerHTML = "";
	// add options 
	var option = document.createElement("option");
	option.text = "More then on week";
	option.value = 8;
	daysList.add(option, daysList[0]);
	
	for (var i = 7; i >= 1; i--)
	{
		if (i < min_value)
		{
			continue;
		}
		
		var option = document.createElement("option");
		if (i == 1)
		{
			option.text = i + " day";
		}
		else if (i == 7)
		{
			option.text = "7 days / 1 Week";	
		}
		else
		{
			option.text = i + " days";	
		}
		option.value = i;
		daysList.add(option, daysList[0]);
	}
	var option = document.createElement("option");
	option.text = "Pick Days";
	option.value = "";
	daysList.add(option, daysList[0]);
}

function checkPrice()
{
	// take the language as factor
	var service_select_element = document.getElementById("service");
    var service_select = service_select_element.options[service_select_element.selectedIndex].value;
	
	var serviceFactor = 1;
	if (service_select == "translate")
	{
		serviceFactor = 1;
	}
	else if (service_select == "seo-article")
	{
		serviceFactor = 1.05;
	}
	else if (service_select == "subject-research")
	{
		serviceFactor = 1.2;
	}
	else if (service_select == "resume-writing")
	{
		serviceFactor = 0.95;
	}
	else if (service_select == "pro-writing")
	{
		serviceFactor = 1.1;
	}
	else if (service_select == "")
	{
		var errorMsg = document.getElementById("error_massage");
		errorMsg.style.display = "";
		errorMsg.innerHTML = "Please Pick Service";
		return false;
	}
	
	// take the language as factor
	var lang_select_element = document.getElementById("lang");
    var lang_select = lang_select_element.options[lang_select_element.selectedIndex].value;
	
	var langFactor = 1;
	if (lang_select == "english")
	{
		langFactor = 1;
	}
	else if (lang_select == "russian")
	{
		langFactor = 0.8;
	}
	else if (lang_select == "spanish")
	{
		langFactor = 1.1;
	}
	else if (lang_select == "")
	{
		var errorMsg = document.getElementById("error_massage");
		errorMsg.style.display = "";
		errorMsg.innerHTML = "Please Pick a language";
		return false;
	}
	
	// get the main cost from the number of words
	var words_select_element = document.getElementById("words");
    var words_value = words_select_element.options[words_select_element.selectedIndex].value;
	if (words_value == "")
	{
		var errorMsg = document.getElementById("error_massage");
		errorMsg.style.display = "";
		errorMsg.innerHTML = "Please Pick Word Count";
		return false;
	}
	var wordPrice = 15 * (parseInt(words_value) / 800);
	
	var finalPrice = Math.round(serviceFactor * langFactor * wordPrice);
	document.getElementById("price_est_text").innerHTML = "The project cost is around <b>" + finalPrice + "$</b>";
	document.getElementById("price_est_text").style.fontSize = "32px";
	
	// move to place and open it
	var priceLocation = document.getElementById("price_answer");
	priceLocation.style.display = "";
	priceLocation.scrollIntoView({behavior: 'smooth'});
	
	var errorMsg = document.getElementById("error_massage");
	errorMsg.style.display = "none";
	return false;
}

function closeErrorMassage()
{
	document.getElementById("error_massage").style.display = "none";
}