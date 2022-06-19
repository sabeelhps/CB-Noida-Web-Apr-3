// BAD WAY---------------------------------------------------

// function downloadFile(url,downloaded) {
//     console.log(`Starting to download the file from ${url}`);
//     setTimeout(() => {
//         const fileName = url.split('/').pop(); //downloading a file at this step
//         downloaded(fileName);
//     },1000);
// }

// function compressFile(fileName, compressed) {
//     console.log(`Starting to compress the file ${fileName}`);
//     setTimeout(() => {
//         const compressedFileName = fileName.split('.')[0] + '.zip'; //compressing a file at this step
//         compressed(compressedFileName);
//     }, 2000);
// }


// function uploadFile(compressedFileName, uploaded) {
//     console.log(`Starting to upload the file ${compressedFileName}`);
//     setTimeout(() => {
//         const uploadedPath = `http://facebook.com/localsystem/${compressedFileName}`;
//         uploaded(uploadedPath);
//     }, 3000);
// }


// downloadFile('http://facebook.com/uploads/profile.jpg', function (fileName) {
//     console.log(`File downloaded successfully as ${fileName}`);
//     compressFile(fileName, function (compressedFileName) {
//         console.log(`File compressed successfully as ${compressedFileName}`);
//         uploadFile(compressedFileName, function (uploadedPath) {
//             console.log(`File Uploaded Successfully at ${uploadedPath}`);
//             console.log('Everything done!!!');
//         })
//     })
// });


// ------------------------------------Better way--------------




function downloadFile(url) {
    return new Promise((resolve,reject) => {
        console.log(`Starting to download the file from ${url}`);
        setTimeout(() => {
            const fileName = url.split('/').pop(); //downloading a file at this step
            
            if (!url.startsWith('http')) {
                throw new Error('Protocol is not http');
            }
            
            resolve(fileName);
        },1000);
    })
}

function compressFile(fileName) {
    return new Promise((resolve, reject) => {
        console.log(`Starting to compress the file ${fileName}`);
        setTimeout(() => {
            const compressedFileName = fileName.split('.')[0] + '.zip'; //compressing a file at this step
            resolve(compressedFileName);
        }, 2000);
    })
   
}


function uploadFile(compressedFileName) {
    return new Promise((resolve, reject) => {
        console.log(`Starting to upload the file ${compressedFileName}`);
        setTimeout(() => {
            const uploadedPath = `http://facebook.com/localsystem/${compressedFileName}`;

            resolve(uploadedPath);
        }, 3000);
    }) 
}


downloadFile('smtp://facebook.com/uploads/profile.jpg')
    .then(compressFile)
    .then(uploadFile)
    .then((uploadedPath) => {
        console.log(`File Uploaded successfully as ${uploadedPath}`);
        console.log('everything done!');
    })
    .catch((err) => {
        console.log('Something went wrong...');
        console.log(err);
    });




