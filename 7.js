function mimeFromFilename(filename) {
    const extension = filename.split('.').pop().toLowerCase();

    switch (extension) {
        case 'html':
        case 'htm':
            return 'text/html';
        case 'css':
            return 'text/css';
        case 'js':
            return 'text/javascript';
        case 'jpg':
        case 'jpeg':
            return 'image/jpeg';
        case 'gif':
            return 'image/gif';
        case 'bmp':
            return 'image/bmp';
        case 'ico':
        case 'cur':
            return 'image/x-icon';
        case 'png':
            return 'image/png';
        case 'svg':
            return 'image/svg+xml';
        case 'webp':
            return 'image/webp';
        case 'mp3':
            return 'audio/mp3';
        case 'wav':
            return 'audio/wav';
        case 'mp4':
            return 'video/mp4';
        case 'webm':
            return 'video/webm';
        case 'json':
            return 'application/json';
        case 'mpeg':
            return 'video/mpeg';
        case 'csv':
            return 'text/csv';
        case 'ttf':
            return 'font/ttf';
        case 'woff':
            return 'font/woff';
        case 'zip':
            return 'application/zip';
        case 'avi':
            return 'video/x-msvideo';
        default:
            return 'application/octet-stream';
    }
}

function findMIMEType() {
    const filename = document.getElementById('filename').value;
    const resultElement = document.getElementById('result');

    if (filename.trim() === "") {
        resultElement.textContent = "Please enter a valid filename.";
        return;
    }

    const mimeType = mimeFromFilename(filename);
    resultElement.textContent = `MIME Type: ${mimeType}`;
}
