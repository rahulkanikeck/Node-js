const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	try{
		await fs.writeFile(fileNmae,fileContent)
	}
	catch{
		console.log("cant create file")
	}
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	try{
		const data = await fs.readFile(fileName,'utf-8')
		console.log(data)
	}
	catch(error){
		console.log("invalid file name")
	}
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	try{
		await fs.appendFile(fileName,fileContent)
	}catch{
		console.error('cant update the file or invalid file name')
	}
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	try{
		fs.unlinnk(fileName)
	}
	catch (err){
		console.log(err)
	}
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }