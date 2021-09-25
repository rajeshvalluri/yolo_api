const  exec  = require("child_process").exec;
function exec_shell(callback) {
    exec("ls -la", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        // results = (`${stdout}`);
        results = stdout.split('\n')
        
        callback(results)
        // console.log('Inside the function')
        // return results
    });
}

function exec_yolo(callback) {
    exec("/home/rajesh/coding/darknet/run_darknet.sh", (error,stdout,stderr) => {
        if (error) {
            // console.log(`error: ${error.message}`);
            // callback("output")
            // return;
        }
        if (stderr) {
            // console.log(`stderr: ${stderr}`);
            // callback("output")
            // return;
        }
        // console.log(`stdout: ${stdout}`);
        callback(stdout.split('\n'))
    })

}
// exec_shell(results => {
//     console.log(results)
// })


// console.log(results)
 module.exports = {exec_shell, exec_yolo}