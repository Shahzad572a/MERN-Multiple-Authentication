// export function generateRandomCode() {
//      let length =8
//     let result = '';
//     for (let i = 0; i < length; i++) {
//      const ch =Math.floor(Math.floor((Math.random()) * 10) + 1);
//      result += ch
//     }
//     return result;
//   }


export function generateRandomCode(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}