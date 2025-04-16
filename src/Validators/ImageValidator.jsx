
export default function ImageValidator(e) {
  let { files } = e.target
  if (files.length === 0)
    return "Pic Field is mendatory"
  else if (files.length == 1) {
    let file = files[0]
    if(file.size>1048576)
      return "File size is too High. Please upload the file upto 1MB"
    else if (file.type==="image/jpeg" || file.type==="image/jpeg" || file.type==="image/png"|| file.type==="image/gif")
      return""
    else 
    return "Invalid file type"
  }
  else {

  }
}
