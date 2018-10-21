{
  let model = {
    song: {},
    data: {},
    find () {
      let query = new AV.Query('Song')
      return query.find().then((song)=>{
        this.data.songs = songs.map((song)=>{
          let 
        })
      })
    }
  }
}