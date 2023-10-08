export function rgbToHex(arr = [7, 7, 7]) {
  let strHex = '';
  for (let i = 0; i < arr.length; i++) {
    let hex = `0${arr[i].toString(16)}`;
    hex = hex.slice(-2);
    strHex += hex;
  }
  return `#${strHex.toUpperCase()}`;
}

export function hexToRGB(hex = '396B5A') {
  const regSplit = /([0-9a-fA-F]{2})/;
  let rgb = hex.replace(/^#/, '').split(regSplit);
  rgb = rgb.filter((item) => item !== '');
  rgb = rgb.map((item) => parseInt(`0x${item}`, 16));
  return rgb;
}
