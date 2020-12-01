const isMaxLength = (text:string)=>{
  return text.length >= 11
}

export const generateOutput = (text: string, output = '0') => {
  switch (text) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (isMaxLength(output)){
        return output
      }
      const dotPosition = output.indexOf('.');
      if (output === '0') {
        return text;
      } else if (dotPosition < 0 || output.length - dotPosition <= 2) {
        return output + text;
      } else {
        return output;
      }
    case '.':
      if (output.indexOf('.') >= 0) {
        return output;
      } else {
        return output + '.';
      }
    case '删除':
      return output.slice(0, -1) || '0';
    case '清空':
      return '0';
    default:
      return '0';
  }
};
