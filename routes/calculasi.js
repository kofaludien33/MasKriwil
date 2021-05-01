var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
	var centimeter	= "cm";
	var berat 		= parseFloat(req.body.Tberat);
	var tinggi 		= parseFloat(req.body.Ttinggi);
	var bmi			= 0;
	var tubuh		= "";
	var linkgambar 	= "";
	
	if(centimeter=="cm"){
		var meter = tinggi / 100;
	}
	
	bmi = parseFloat(berat / (meter*meter)).toFixed(1);
	if(bmi<16){
		tubuh = "Gizi Buruk";
		linkgambar ='http://localhost:3000/images/1.jpg';
	}else if(bmi<17){
		tubuh = "Kueceng";
		linkgambar ='http://localhost:3000/images/2.jpg';
	}else if(bmi<18.5){
		tubuh = "Kurang Makan";
		linkgambar ='http://localhost:3000/images/3.jpg';
	}else if(bmi<25){
		tubuh = "Lumayan";
		linkgambar ='http://localhost:3000/images/4.jpg';
	}else if(bmi<30){
		tubuh = "Lemu";
		linkgambar ='http://localhost:3000/images/5.jpg';
	}else if(bmi<35){
		tubuh = "Kelemon";
		linkgambar ='http://localhost:3000/images/6.jpg';
	}else if(bmi<40){
		tubuh = "Poso Ae Lur";
		linkgambar ='http://localhost:3000/images/7.jpg';
	}else{
		tubuh = "Gak Sue Diabetes";
		linkgambar ='http://localhost:3000/images/8.jpg';
	}
	

	res.render('index', { 
			result	:true,
			title	:'BMI CALCULATOR',
			berat	: berat,
			tinggi	: tinggi,
			bmi		: bmi,
			tubuh	: tubuh,
			linkgambar: linkgambar,
			baseUrl	: "http://localhost:3000/",
		}
	);
});

module.exports = router;