let temp = 50;
// let checkTemp = +prompt('Check Temp');

if(temp < 0){
    console.log('Extremely cold outside');
}else if(temp < 16){
    console.log('Cold Outside');
}else if(temp < 25){
    console.log('Weather is Okay');
}else if(temp < 35){
    console.log('lets drink some energy drink');
}else if(temp < 45){
    console.log('Turn on AC');
}else{
    console.log('Extremely Hot Outside');
}
