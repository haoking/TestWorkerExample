
importScripts('3rd/opencv.js');



function getTheData(abc) {
    return abc.data32F;
}

function getTheCV(abc) {
    let aa = cv.matFromArray(3,3,cv.CV_32FC1,abc);
    return aa;
}
