
importScripts('3rd/opencv.js');



function getTheData(abc) {
    return abc.data32F;
}

function getTheCV(abc) {
    let aa = cv.matFromArray(3,3,cv.CV_32FC1,abc);
    
    return aa;
}

self.addEventListener('message', function (e) {
    let aa = cv.matFromArray(3,3,cv.CV_32FC1,[1,2,3,4,5,6,7,8,9]);
  self.postMessage(aa.data32F);
}, false);
