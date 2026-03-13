const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');
const savePath = path.join(__dirname, './text-1.txt');

const data = fs.readFileSync(filePath, 'utf-8');

// 파일이 있으면
if (fs.existsSync(savePath)) {
  console.log('파일이 존재합니다.');
} else {
  // 없을 때는 생성
  fs.writeFileSync(savePath, './text-1.txt');
}
