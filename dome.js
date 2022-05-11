//生成随机车牌号函数
function randomCoding() {
    let number = "";
    let n = 6;
    for (var i =1 ;i < n ;i++) {
        number += Math.floor(Math.random() * 10);
    };
    let letters = 'abcdefghjkmnrstuvwxyz';
    let randomNum = Math.round(Math.random() * 26);
    let randomLetter = letters.charAt(randomNum).toUpperCase();
    let chars = ['贵','川','湘','粤','海','京','渝','沪','浙','云',];
    let region = chars[Math.round(Math.random()*10)];
    let vehicle = region + randomLetter+number;
    console.log(vehicle);

}
randomCoding();