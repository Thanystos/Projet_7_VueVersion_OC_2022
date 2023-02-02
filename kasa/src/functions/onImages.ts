export function isBright(image: HTMLImageElement) {
    let blockSize :number = 1, // Représente le nombre de pixels que je voudrai sauter
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data :ImageData, width :number, height :number,
        i :number,
        length :number,
        titleLength: number,
        rgb = {r:0,g:0,b:0},
        count = 0;

        height = canvas.height = image.naturalHeight || image.offsetHeight || image.height;
        width = canvas.width = image.naturalWidth || image.offsetWidth || image.width;
    if(context) {
        context.drawImage(image, 0, 0);
        data = context.getImageData(0, 0, width, height);
        length = data.data.length;

        titleLength = ~~(length * 0.21);
        i = length;

        
        while ((i -= blockSize * 4) > (length - titleLength)) {
            let brightness = 0.34 * data.data[i] + 0.5 * data.data[i+1] + 0.16 * data.data[i+2];
            ++count;
            rgb.r += brightness;
            rgb.g += brightness;
            rgb.b += brightness;
        }
        
        rgb.r = ~~(rgb.r/count);
        rgb.g = ~~(rgb.g/count);
        rgb.b = ~~(rgb.b/count);

        const luma = 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;
        console.log(luma);
        if (luma > 128) {
            return true;
        }
        return false;
    }
    else {
        return false;
    }
}