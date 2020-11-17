// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ];

//console.table(friends);

// const getAllNames = function (allFriends) {
//   const names = [];
//   for (const friend of allFriends) {
//     console.log(friend.name);
//     names.push(friend.name);
//   }

//   return names;
// };

// console.log(getAllNames(friends));

// const getOnLineFriends = function (allFriends) {
//   const friendsOnLine = [];

//   for (const friend of allFriends) {
//     if (friend.online) {
//       friendsOnLine.push(friend);
//     }
//   }
//   return friendsOnLine;
// };

// console.log(getOnLineFriends(friends));

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// playlist.qwe = 5;

// playlist.rating = 10;

// console.log(playlist);

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b);

// //современный способ
// const c = {
//   ...a,
//   ...b,
// };
// console.log(c);

// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };

// // const { ann, david } = developers;
// // console.log(ann, david);

// const { ann, avid, helen, lorence: x = 0 } = developers;
// console.log(x);
