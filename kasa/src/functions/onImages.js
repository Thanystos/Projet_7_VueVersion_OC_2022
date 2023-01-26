import img from '../assets/images/Gull_portrait_ca_usa.jpg'
export function isLight(imgEl) {
    let blockSize = 1, // Représente le nombre de pixels que je voudrai sauter
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i,
        length,
        titleLength,
        rgb = {r:0,g:0,b:0},
        count = 0,
        luma;

    let image = new Image();
    image.crossOrigin = "anonymous";
    image.src = img;
    console.log(imgEl);
    height = canvas.height = image.height;
    width = canvas.width = image.width;
    context.drawImage(image, 0, 0);
    data = context.getImageData(0, 0, width, height);

    length = data.data.length;
    console.log(length);
    titleLength = ~~(length * 0.21);

    i = length;

    while ((i -= blockSize * 4) > (length - titleLength)) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i+1];
        rgb.b += data.data[i+2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r/count);
    rgb.g = ~~(rgb.g/count);
    rgb.b = ~~(rgb.b/count);

    luma = 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;

    return (luma);
}