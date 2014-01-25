var cluster = require('cluster');

var cpus = require('os').cpus().length;

if (cluster.isMaster) {
    for (var i = 0; i < cpus; i++) {
        var _ = cluster.fork();
        console.log('master ' + process.pid + ' forking worker ' + _.process.pid);
    };

    cluster.on('exit', function(worker, code) {
        console.log('worker ' + worker.process.pid + ' exit');
        if (code != 0) {
            var _ = cluster.fork();
            console.log('master ' + process.pid + ' re-spawned worker ' + _.process.pid);
        }
    }).on('fork', function(worker) {
        console.log('worker ' + worker.process.pid + ' forked');
    }).on('listening', function(worker, address) {
        console.log('worker ' + worker.process.pid + ' listening ' + address.address + ':' + address.port);
    }).on('online', function(worker) {
        console.log('worker ' + worker.process.pid + ' on-line');
    });

    process.on('SIGUSR2', function() {
        console.log('SIGUSR2 received, reloading workers');

        delete require.cache[require.resolve('./app-express')];

        var i = 0;
        var workers = Object.keys(cluster.workers);
        var f = function() {
            if (i == workers.length) return;

            console.log('killing worker ' + workers[i]);

            cluster.workers[workers[i]].disconnect();
            cluster.workers[workers[i]].on('disconnect', function() {
                console.log('worker disconnected');
            });

            var _ = cluster.fork();
            _.on('listening', function() {
                console.log('replacement worker online');
                i++;
                f();
            });
        };
        f();
    });
} else {
    require('./app');
};