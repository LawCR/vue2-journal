
export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(), // 1627212204241
      date: new Date().toDateString(), // Sun Jul 25 2021
      text: 'loremEt mollit excepteur amet nostrud ipsum nulla. Est sint laborum veniam non nostrud enim ad cillum anim magna non nisi do. Duis minim anim fugiat nisi ad irure.',
      picture: null
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(), 
      text: 'loremEt mollit excepteur amet nostrud ipsum nulla. Est sint laborum veniam non nostrud enim ad cillum anim magna non nisi do. Duis minim anim fugiat nisi ad irure.',
      picture: null
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(), 
      text: 'loremEt mollit excepteur amet nostrud ipsum nulla. Est sint laborum veniam non nostrud enim ad cillum anim magna non nisi do. Duis minim anim fugiat nisi ad irure.',
      picture: null
    }
  ]
})