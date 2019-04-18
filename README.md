# BlueFinder

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)


## Getting started

### Prerequisites

* Docker >= 18.09.2 or nodejs >= 10.15.0 and npm >= 6.X

### Installing

1. Clone the repository    
    
    ````
    $ git clone https://github.com/aektos/bluefinder.git
    ````
    
2. Build and Start Docker container :

    ````
    $ docker build -t bluefinder ./
    
    $ docker run -d --name bluefinder_app -p 80:3000 -v `pwd`/:/var/www/html/app bluefinder
    
    # pour windows:
        $ docker run -d --name bluefinder_app -p 80:3000 -v ${pwd}/:/var/www/html/app bluefinder
         
    $ docker exec -it bluefinder_app sh -c "NODE_ENV=development npm start"
   ````
   
3. Force stop and remove the container:
   
    ````
    $ docker rm -f bluefinder_app
    ````
      
## Running the tests

Tests should be added soon!

## Built with

* [NodeJS](https://nodejs.org)
* [Express framework](https://expressjs.com)

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Aektos** - *Initial work* -

See also the list of [contributors](https://github.com/aektos/emailcleaner/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.