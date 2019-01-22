var httpVariable= require('http')
var server = httpVariable.createServer(dotItNow)
var customLib=require('./library/datelib')

function dotItNow(myrequest, myresponse){
    myresponse.writeHead(200, {'Content-Type':'text/html'})
    myresponse.write("<h1>Hello from node</h1> ")
    myresponse.write(customLib.datelibrary() + "<br>")
    myresponse.write(customLib.stringlibrary())

    myresponse.end()
}

server.listen(8888)