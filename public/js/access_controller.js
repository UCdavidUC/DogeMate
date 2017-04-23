angular.module('app', ['ngRoute', 'ngTemplate'])
    .factory('Especialistas', ['$resource', function($resource) {
        return $resource('/especialistas/:_email', null, {
            'update': { method: 'PUT' }
        });
    }])
    .controller('EspecialistaRegistroController', ['$scope', 'Especialistas', function($scope, Especialistas) {
        $scope.especialistas = Especialistas.query();
        console.log('EspecialistaRegistroController');
        
        // Email validation
        $('#email').keyup(function emailValidation() {
            var email = $("#email").val();
            var pwd = $('#contrasena');
            var cf = $('#confirmacion');
            var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(regex.test(email)) {
                $('#emailAlert').html('Email válido.');
                $('#emailAlert').css('color', 'green');
            } else {
                $('#emailAlert').html('<strong>Error</strong>: Verifique que su correo electrónico esté escrito correctamente: ' + email);
                $('#emailAlert').css('color', 'red');
            }
        });

        // Password validation
        $('#contrasena').keyup(function passwordConforms() {
            var pwd = $('#contrasena').val();
            if (pwd.length < 8) {
                $('#passwordAlert').html('<strong>Error</strong>: La contaseña introducida debe contener al menos 8 caracteres.');
                $('#passwordAlert').css('color', 'red');
            } else if(pwd.length > 16) {
                $('#passwordAlert').html('<strong>Error</strong>: La contaseña introducida debe contener máximo 16 caracteres.');
                $('#passwordAlert').css('color', 'red');
            } else {
                $('#passwordAlert').html('Contraseña válida.');
                $('#passwordAlert').css('color', 'green');
            }
        });

        // Password match validation
        $('#confirmacion').keyup(function passwordValidation() {
            var pwd = $('#contrasena').val();
            console.log(pwd);
            var conf = $('#confirmacion').val();
            if(pwd===conf) {
                $('#passwordConfirmationAlert').html('Las contrase&ntilde;as coinciden.');
                $('#passwordConfirmationAlert').css('color', 'green');
            } else {
                $('#passwordConfirmationAlert').html('<strong>Error</strong>: Las contrase&ntilde;as no coinciden.');
                $('#passwordConfirmationAlert').css('color', 'red');
            }
        });
        

        // Save specialist into Mongo
        $scope.save = function(newEspecialista) {
            if(!$scope.newEspecialista || $scope.newEspecialista.length < 1) return;
            var especialista = new Especialistas({
                email: newEspecialista.email,
                contrasena: newEspecialista.contrasena
            });
            especialista.save(function() {
                $scope.especialistas.push(especialista);
                $scope.newEspecialista = '';
            });
        }
        
    }])
    .controller('EspecialistaLoginController', ['$scope', '$routeParams', 'Especialista', '$location', function($scope, $routeParams, Especialista, $location) {

    }])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/start#registro', {
            templateUrl: '/registro.html',
            controller: 'EspecialistaRegistroController'
        }).when('/start', {
            templateUrl: '/login.html',
            controller: 'EspecialistaLoginController'
        });
    }]);
