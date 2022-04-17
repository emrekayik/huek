const robot = require("robotjs");

const hueek = {}

hueek.width = robot.getScreenSize().width;
hueek.height = robot.getScreenSize().height;

console.log(hueek.width*0.10);

const cordinates1 = {
    x1: 10,
    y1: 10,
    x2: hueek.width*0.10,
    y2: 10,
    x3: 10,
    y3: hueek.height*0.50,
    x4: hueek.width*0.10,
    y4: hueek.height*0.50,
    x5: 10,
    y5: hueek.height*0.90,
    x6: hueek.width*0.10,
    y6: hueek.height*0.90,
}
const cordinates2 = {
    x1: hueek.width*0.10,
    y1: 10,
    x2: hueek.width*0.50,
    y2: 10,
    x3: hueek.width*0.50,
    y3: hueek.height*0.50,
    x4: hueek.width*0.10,
    y4: hueek.height*0.50,
    x5: hueek.width*0.10,
    y5: hueek.height*0.90,
    x6: hueek.width*0.50,
    y6: hueek.height*0.90,
}
const cordinates3 = {
    x1: hueek.width*0.90,
    y1: 10,
    x2: hueek.width-10,
    y2: 10,
    x3: hueek.width-10,
    y3: hueek.height*0.50,
    x4: hueek.width*0.90,
    y4: hueek.height*0.50,
    x5: hueek.width*0.90,
    y5: hueek.height*0.90,
    x6: hueek.width-10,
    y6: hueek.height*0.90,
}

const colors1 = {
    color1: robot.getPixelColor(cordinates1.x1,cordinates1.y1),
    color2: robot.getPixelColor(cordinates1.x2,cordinates1.y2),
    color3: robot.getPixelColor(cordinates1.x3,cordinates1.y3),
    color4: robot.getPixelColor(cordinates1.x4,cordinates1.y4),
    color5: robot.getPixelColor(cordinates1.x5,cordinates1.y5),
    color6: robot.getPixelColor(cordinates1.x6,cordinates1.y6)
}
const colors2 = {
    color1: robot.getPixelColor(cordinates2.x1,cordinates2.y1),
    color2: robot.getPixelColor(cordinates2.x2,cordinates2.y2), 
    color3: robot.getPixelColor(cordinates2.x3,cordinates2.y3),
    color4: robot.getPixelColor(cordinates2.x4,cordinates2.y4),
    color5: robot.getPixelColor(cordinates2.x5,cordinates2.y5),
    color6: robot.getPixelColor(cordinates2.x6,cordinates2.y6)
}
const color3 = {
    color1: robot.getPixelColor(cordinates3.x1,cordinates3.y1),
    color2: robot.getPixelColor(cordinates3.x2,cordinates3.y2),
    color3: robot.getPixelColor(cordinates3.x3,cordinates3.y3),
    color4: robot.getPixelColor(cordinates3.x4,cordinates3.y4),
    color5: robot.getPixelColor(cordinates3.x5,cordinates3.y5),
    color6: robot.getPixelColor(cordinates3.x6,cordinates3.y6)
}


const hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

console.log(hexToRgb(colors1.color1));
console.log(colors2);
console.log(color3);


//  get colors from screen areas.
/*

---------------------------------
|*******************************|
|*******************************|
|**                           **|
|**                           **|
|**                           **|
|**                           **|
|**                           **|
---------------------------------
            |   |
            |   |
        --------------
        |   |    |   |  
        --------------  

* işaretleri renklerin alınacağı yerler.
*/
