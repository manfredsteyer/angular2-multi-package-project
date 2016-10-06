# External Feature-Modules

This sample shows how to split a huge Angular 2 application into a core application and an external node package that contain feature modules. The external node packages can be developed, executed and tested separately.

Please note the following aspects:

- The core application is located in the folder core-app
- The external package is located in the folder module
- Every project can be executed using ``npm start``
- The external packages uses Angular as *dev-dependencies* and mentions some of them as *peer-dependencies*. This prevents that the package comes with a specific version of Angular. 
- The external package uses a ``.npmignore`` file
- The core application references the external module via the file ``package.json`` using ``file:../module``.
- After updating the external package one has to update the version number in the file ``package.json``. After that, one has to execute ``npm update`` within the core application.
