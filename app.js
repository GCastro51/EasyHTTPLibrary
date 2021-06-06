//https://jsonplaceholder.typicode.com/
// free onlione RESP API with fake data for prototyping 

const http = new easyHTTP;

// get posts, use callback to get response before showing anything
// http.get('https://jsonplaceholder.typicode.com/posts', function(error, posts) {
//   if(error) {
//     console.log(error);
//   } else {
//     console.log(posts);
//   }
  
// });

// Get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(error, posts) {
  // if(error) {
  //   console.log(error);
  // } else {
  //   console.log(posts);
  // }
  
// });

// POST single post
//create data
// const data = {
//   title: 'Custom Post', body: 'This is a custom post'
// }
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, posts) {
//   if(error) {
//     console.log(error);
//   } else {
//     console.log(posts);
//   }
// });

// PUT single post
//create data
// const data = {
//   title: 'Custom Post', body: 'This is a custom post'
// }
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(error, posts) {
//   if(error) {
//     console.log(error);
//   } else {
//     console.log(posts);
//   }
// });

// DELETE Single Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, posts) {
  if(error) {
    console.log(error);
  } else {
    console.log(posts);
  }
  
});